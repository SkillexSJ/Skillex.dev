import type { Metadata } from "next";
import { Manrope, Bebas_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkilleX | Full Stack Developer",
  description:
    "Minimal portfolio for a Full Stack Developer specializing in MERN, Go, and Docker. Explore featured work, live activity, and contact details.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "Docker",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Sajid Khan" }],
  openGraph: {
    title: "SkilleX | Full Stack Developer",
    description:
      "Minimal portfolio — MERN, Go, Docker. View projects, skills, and experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkilleX | Full Stack Developer",
    description:
      "Minimal portfolio — MERN, Go, Docker. View projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased",
        bebasNeue.variable,
        manrope.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
