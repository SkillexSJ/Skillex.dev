"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import ShinyText from "@/components/ShinyText";
import { learningTopics } from "@/data/learning";

export function CurrentlyLearningCard() {
  const topics = learningTopics;

  return (
    <div className="flex flex-col gap-4 text-left h-full justify-start w-full">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
            Acquiring Skills
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
            <ShinyText
              text="Currently Learning"
              color="#a855f7"
              shineColor="#ffffff"
            />
          </h3>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
          <BookOpen className="size-4" />
        </div>
      </div>

      <div className="flex flex-col gap-3.5 mt-2 w-full">
        {topics.map((topic, i) => (
          <div key={i} className="space-y-1.5 min-w-0 w-full">
            <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-foreground/90">
              <span className="truncate">{topic.name}</span>
              <span className="text-muted-foreground shrink-0">{topic.progress}%</span>
            </div>
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden border border-border/20">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
