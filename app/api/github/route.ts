import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 }, // Cache on server-side for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contributions from GitHub: ${response.statusText}`);
    }

    const html = await response.text();
    const days: { date: string; level: number; count: number }[] = [];
    
    // Regex matches <rect> or <td> tags containing both data-date and data-level attributes
    const regex = /<(?:rect|td)[^>]*data-date="([^"]+)"[^>]*data-level="([^"]+)"[^>]*>/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
      const dateStr = match[1];
      const level = parseInt(match[2], 10) || 0;
      
      // Map level to commits estimate
      let count = 0;
      if (level === 1) count = 1;
      else if (level === 2) count = 3;
      else if (level === 3) count = 6;
      else if (level === 4) count = 10;

      days.push({
        date: dateStr,
        level,
        count,
      });
    }

    if (days.length === 0) {
      return NextResponse.json(
        { error: "No contribution data found. Please verify the GitHub username." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { days },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch contribution data" },
      { status: 500 }
    );
  }
}
