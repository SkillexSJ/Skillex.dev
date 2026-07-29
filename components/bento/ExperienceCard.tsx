"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import ShinyText from "@/components/ShinyText";
import { Briefcase, Rocket } from "lucide-react";

export function ExperienceCard() {
  const hasExperience = experienceData.length > 0;

  return (
    <div className="flex flex-col gap-4 text-left h-full justify-start w-full">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
          &lt;/&gt; Timeline
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
          <ShinyText
            text="Experience"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h3>
      </div>

      {hasExperience ? (
        <div className="flex flex-col gap-3 mt-1 w-full">
          {experienceData.slice(0, 2).map((exp) => (
            <div
              key={exp.id}
              className="flex items-center justify-between gap-4 w-full border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground leading-snug">
                  {exp.role}
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  {exp.company}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-muted/50 border border-border/50 px-2.5 py-1 rounded-md font-semibold">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 py-4 flex-1">
          <div className="flex items-center justify-center size-10 rounded-xl bg-purple-500/[0.06] border border-purple-500/10">
            <Rocket className="size-4.5 text-purple-400/50" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground font-semibold">
              Open to Opportunities
            </p>
            <p className="text-[11px] text-muted-foreground/50 max-w-[220px] leading-relaxed">
              Fresher with real full-stack projects, ready to contribute from day
              one.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-md bg-emerald-500/[0.08] border border-emerald-500/15 text-emerald-400">
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full size-1.5 bg-emerald-500" />
            </span>
            Available for Hire
          </span>
        </div>
      )}
    </div>
  );
}
