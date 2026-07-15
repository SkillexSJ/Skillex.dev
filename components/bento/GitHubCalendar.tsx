"use client";

import React, { useMemo, useState, useEffect } from "react";
import { profileData } from "@/data/socials";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function GitHubCalendar() {
  const [realData, setRealData] = useState<ContributionDay[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const username = profileData.githubUsername;

  useEffect(() => {
    // If the username is empty or is the placeholder, skip fetch and use mock data
    if (!username || username === "yourusername") {
      return;
    }

    setIsLoading(true);
    fetch(`/api/github?username=${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        if (json.days && Array.isArray(json.days)) {
          // Format raw dates (e.g. 2026-07-14) into friendly tooltip dates (Jul 14, 2026)
          const formattedDays = json.days.map((d: any) => {
            const dateObj = new Date(d.date + "T00:00:00");
            const dateString = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            return {
              date: dateString,
              count: d.count,
              level: d.level as 0 | 1 | 2 | 3 | 4,
            };
          });
          // Slice the last 224 days (32 weeks) for a wider, bigger graph
          setRealData(formattedDays.slice(-224));
        }
      })
      .catch((err) => {
        console.error("GitHub calendar fetch error, using mock fallback:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username]);

  // Seeded mock contribution generator (224 days / 32 weeks)
  const mockData: ContributionDay[] = useMemo(() => {
    const result: ContributionDay[] = [];
    const today = new Date();
    const totalDays = 224;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - totalDays + 1);

    let seed = 123; // Different seed for variety
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < totalDays; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      let count = 0;
      const randVal = random();
      
      if (isWeekend) {
        if (randVal > 0.82) {
          count = Math.floor(randVal * 4) + 1;
        }
      } else {
        if (randVal > 0.28) {
          count = Math.floor(randVal * 7) + 1;
          if (randVal > 0.9) {
            count = Math.floor(randVal * 6) + 7;
          }
        }
      }

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 8) level = 3;
      else if (count > 8) level = 4;

      const dateString = currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      result.push({
        date: dateString,
        count,
        level,
      });
    }

    return result;
  }, []);

  const finalData = realData || mockData;

  // Group data by weeks (chunks of 7 days)
  const weeks = useMemo(() => {
    const cols: ContributionDay[][] = [];
    for (let i = 0; i < finalData.length; i += 7) {
      cols.push(finalData.slice(i, i + 7));
    }
    return cols;
  }, [finalData]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-purple-950/50 border border-purple-900/30";
      case 2:
        return "bg-purple-800/70 border border-purple-700/40";
      case 3:
        return "bg-purple-600/90 border border-purple-500/50";
      case 4:
        return "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)] border border-purple-200/90";
      default:
        return "bg-white/[0.03] border border-white/[0.04]";
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6 pt-5 border-t border-white/5 w-full select-none">
      <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground font-semibold">
        <span>COMMIT CONTRIBUTIONS</span>
        <span className="font-mono text-primary">
          {isLoading ? (
            <span className="animate-pulse">FETCHING ACTIVITY...</span>
          ) : username && username !== "yourusername" && realData ? (
            <span>@{username} ON GITHUB</span>
          ) : (
            <span>DEMO ACTIVITY</span>
          )}
        </span>
      </div>

      {/* Calendar Grid Container */}
      <div className="overflow-x-auto scrollbar-none w-full pb-1">
        <div className="flex gap-[4px] min-w-max justify-center">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-[4px]">
              {week.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`size-[13px] md:size-[14px] rounded-[3px] transition-all hover:scale-125 duration-100 cursor-pointer relative group ${getLevelColor(
                    day.level
                  )}`}
                >
                  {/* Interactive Tooltip on Hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block z-50 pointer-events-none">
                    <div className="bg-[#121214] border border-white/10 text-white text-[10px] font-bold py-1 px-2.5 rounded-md shadow-xl whitespace-nowrap">
                      <span className="text-primary font-extrabold mr-1">
                        {day.count} {day.count === 1 ? "commit" : "commits"}
                      </span>
                      <span className="text-muted-foreground">on {day.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend Indicators */}
      <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground font-semibold mt-1">
        <span>Less</span>
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 md:size-3 rounded-[2px] bg-white/[0.03] border border-white/[0.04]" />
          <div className="size-2.5 md:size-3 rounded-[2px] bg-purple-950/50 border border-purple-900/30" />
          <div className="size-2.5 md:size-3 rounded-[2px] bg-purple-800/70 border border-purple-700/40" />
          <div className="size-2.5 md:size-3 rounded-[2px] bg-purple-600/90 border border-purple-500/50" />
          <div className="size-2.5 md:size-3 rounded-[2px] bg-purple-400 border border-purple-200/90 shadow-[0_0_4px_rgba(168,85,247,0.4)]" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
