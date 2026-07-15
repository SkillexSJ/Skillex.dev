import React from "react";
import { skillsData } from "@/data/skills";
import { TechIcon } from "@/components/shared/TechIcon";
import ShinyText from "@/components/ShinyText";

const allSkills = skillsData.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.category }))
);

export function TechStackCard() {
  return (
    <div className="flex flex-col gap-4 text-left h-full justify-start w-full">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
          &gt;_ Tools
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
          <ShinyText
            text="Tech Stack"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {allSkills.slice(0, 11).map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center rounded-lg border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground/90 hover:bg-muted/70 hover:border-border transition-all cursor-default"
          >
            <TechIcon name={skill.name} className="size-3.5 mr-1.5 shrink-0" />
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
