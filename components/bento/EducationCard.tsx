"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";
import ShinyText from "@/components/ShinyText";

export function EducationCard() {
  return (
    <div className="flex flex-col gap-4 text-left h-full justify-start w-full">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] flex items-center gap-1 mb-1 font-sans">
          <GraduationCap className="h-3.5 w-3.5" /> Credentials
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
          <ShinyText
            text="Education"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h3>
      </div>
      <div className="flex flex-col gap-3 mt-1 w-full">
        {educationData.slice(0, 2).map((edu) => (
          <div key={edu.id} className="flex items-center justify-between gap-4 w-full border-b border-border/50 pb-3 last:border-0 last:pb-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-foreground leading-snug">{edu.degree}</span>
              <span className="text-xs text-muted-foreground font-semibold">{edu.institution}</span>
            </div>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-muted/50 border border-border/50 px-2.5 py-1 rounded-md font-semibold">
              {edu.startDate} {edu.startDate !== edu.endDate ? `- ${edu.endDate}` : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
