"use client";

import { projectsData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";

const featuredProject = projectsData.find((p) => p.featured) ?? projectsData[0];

export function FeaturedProjectCard() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Top side text contents */}
      <div className="w-full flex flex-col gap-3 text-left">
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
            Featured Project
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-wide uppercase block">
            <ShinyText
              text={featuredProject.title}
              color="#a855f7"
              shineColor="#ffffff"
            />
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            {featuredProject.description}
          </p>
        </div>

        {/* Tech Stack Chips & Demo Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 w-full z-10">
          <div className="flex flex-wrap gap-1.5">
            {featuredProject.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted/40 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {featuredProject.liveUrl && (
            <Link
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all shadow-md pointer-events-auto"
            >
              Live Demo
              <ExternalLink className="size-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom side mock browser frame — fills remaining space */}
      <div className="w-full flex-1 min-h-[200px] relative border-t border-border/60 bg-[#121214] shadow-2xl flex flex-col rounded-t-xl overflow-hidden mt-4 -mb-6 -mx-6" style={{ width: "calc(100% + 3rem)" }}>
        {/* Mock browser Title Bar */}
        <div className="flex items-center justify-between border-b border-border/40 bg-[#1a1a1f] px-3.5 py-2 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-red-500/60" />
            <div className="size-1.5 rounded-full bg-yellow-500/60" />
            <div className="size-1.5 rounded-full bg-green-500/60" />
          </div>

          {/* Mock URL Address Bar */}
          <div className="flex-1 max-w-[160px] mx-auto h-3.5 rounded bg-[#0b0b0d] border border-border/30 flex items-center justify-center text-[7px] text-muted-foreground/60 font-mono">
            {featuredProject.title.toLowerCase().replace(/\s/g, "-")}.dev
          </div>

          {/* Empty spacer */}
          <div className="w-12" />
        </div>

        {/* Project Image Viewport */}
        <div className="relative flex-1 w-full min-h-0 bg-[#0b0b0d]">
          <Image
            src={featuredProject.image || ""}
            alt={featuredProject.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}
