"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import Image from "next/image";

// ─── Hero Background ────────────────────────────────────────────────────────
// Flat background with no visual noise or glows
export function HeroBackground() {
  return null;
}

// ─── Globe Background ───────────────────────────────────────────────────────
// Clean, faint wireframe globe with grid lines (no neon glows or animated floating orbs)
export function GlobeBackground() {
  return null;
}

// ─── Tech Stack Background ──────────────────────────────────────────────────
export function TechStackBackground() {
  return null;
}

export function FeaturedProjectBackground() {
  const featuredProject =
    projectsData.find((p) => p.featured) ?? projectsData[0];

  return (
    // <div className="absolute inset-0 overflow-hidden bg-black/10 select-none">
    //   {/* Clean Straight Browser Mockup Frame aligned on the right half */}
    //   <div className="absolute -right-2 top-8 bottom-0 w-[45%] z-0 rounded-tl-2xl overflow-hidden border-l border-t border-border bg-[#121214] shadow-2xl hidden md:flex flex-col transition-all duration-300">
    //     {/* Mock browser Title Bar */}
    //     <div className="flex items-center justify-between border-b border-border/40 bg-[#1a1a1f] px-3.5 py-2 shrink-0">
    //       <div className="flex items-center gap-1.5 w-16">
    //         <div className="size-1.5 rounded-full bg-red-500/60" />
    //         <div className="size-1.5 rounded-full bg-yellow-500/60" />
    //         <div className="size-1.5 rounded-full bg-green-500/60" />
    //       </div>

    //       {/* Mock URL Address Bar */}
    //       <div className="flex-1 max-w-[140px] h-4 rounded bg-[#0b0b0d] border border-border/30 flex items-center justify-center text-[7px] text-muted-foreground/60 font-mono">
    //         {featuredProject.title.toLowerCase().replace(/\s/g, "-")}.dev
    //       </div>

    //       {/* Empty spacer to balance layout */}
    //       <div className="w-16" />
    //     </div>

    //     {/* Image viewport */}
    //     <div className="relative w-full h-full">
    //       <Image
    //         src={featuredProject.image}
    //         alt={featuredProject.title}
    //         fill
    //         priority
    //         sizes="400px"
    //         className="object-cover object-left-top transition-transform duration-500 hover:scale-102"
    //       />
    //       {/* Faded gradient overlay on the left of the image viewport to blend with card bg */}
    //       <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#121214] to-transparent pointer-events-none z-10" />
    //     </div>
    //   </div>
    // </div>
    null
  );
}

// ─── Experience Background ──────────────────────────────────────────────────
export function ExperienceBackground() {
  return null;
}

// ─── Social Glow Background ──────────────────────────────────────────────────
export function SocialGlowBackground() {
  return null;
}
