"use client";

import React from "react";
import { FolderGit2, GitCommit, Briefcase } from "lucide-react";
import { profileData } from "@/data/socials";
import ShinyText from "@/components/ShinyText";
import { GitHubCalendar } from "./GitHubCalendar";

export function AchievementsCard() {
  const [commitCount, setCommitCount] = React.useState<string>("500+");
  const username = profileData.githubUsername;

  React.useEffect(() => {
    if (!username || username === "yourusername") {
      setCommitCount("450+");
      return;
    }

    fetch(`/api/github?username=${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        if (json.days && Array.isArray(json.days)) {
          const sum = json.days.reduce((acc: number, day: any) => acc + (day.count || 0), 0);
          setCommitCount(sum > 0 ? `${sum}` : "500+");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch real-time commits, using fallback:", err);
        setCommitCount("500+");
      });
  }, [username]);

  const stats = [
    {
      value: `${profileData.projectsCompleted}+`,
      label: "Projects Shipped",
      icon: FolderGit2,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
    {
      value: commitCount,
      label: "Code Commits",
      icon: GitCommit,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
    {
      value: "1+ Yrs",
      label: "Experience",
      icon: Briefcase,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
  ];

  return (
    <div className="flex flex-col gap-4 text-left h-full justify-between w-full">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
          Achievements
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
          <ShinyText
            text="Track Record &amp; Proof"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h3>
      </div>
      
      <div className="grid grid-cols-3 gap-3.5 mt-2 w-full">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl border border-border/40 bg-muted/10 hover:border-border hover:bg-muted/30 transition-all text-center group"
            >
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105 mb-3">
                <Icon className="size-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-2xl font-extrabold text-foreground tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[10px] text-muted-foreground font-semibold leading-snug mt-1.5 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>

      <GitHubCalendar />
    </div>
  );
}
