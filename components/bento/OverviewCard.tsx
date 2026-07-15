"use client";

import React from "react";
import { Download, Mail } from "lucide-react";
import { profileData, socialsData } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import ShinyText from "@/components/ShinyText";

export function OverviewCard() {
  const githubUrl =
    socialsData.find((s) => s.name === "GitHub")?.url ?? "https://github.com";
  const linkedinUrl =
    socialsData.find((s) => s.name === "LinkedIn")?.url ??
    "https://linkedin.com";
  const twitterUrl =
    socialsData.find((s) => s.name === "Twitter")?.url ?? "https://twitter.com";
  const emailUrl =
    socialsData.find((s) => s.name === "Email")?.url ??
    "mailto:hello@example.com";

  const nameParts = profileData.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between h-full w-full text-foreground p-0">
      {/* Left Column: Intro & Info */}
      <div className="flex flex-col flex-1 justify-between text-left h-full gap-4 pb-6 md:pb-8">
        <div className="space-y-4">
          {/* Heading */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
              Hi, I'm
            </span>
            <h2 className="text-[2.5rem] sm:text-[3rem] font-black tracking-wide leading-none uppercase font-heading block">
              <ShinyText
                text={`${firstName} ${lastName}`}
                color="#a855f7"
                shineColor="#ffffff"
              />
            </h2>
            <p className="text-sm text-primary font-semibold font-mono tracking-tight">
              {profileData.title}
            </p>
          </div>

          {/* Bio text */}
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[92%]">
            {profileData.bio}
          </p>
        </div>

        <div className="space-y-4.5 mt-auto">
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* <Link
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold transition-all shadow-[0_4px_12px_rgba(168,85,247,0.25)] pointer-events-auto"
            >
              <span>View My Work</span>
            </Link> */}
            {profileData.resumeUrl && (
              <Link
                href={profileData.resumeUrl}
                download
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl  text-white text-xs font-extrabold tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 active:scale-95 pointer-events-auto shadow-md"
              >
                <span>Download CV</span>
                <Download className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            )}
          </div>

          {/* Minimal Social Links */}
          {/* <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors pointer-events-auto"
              aria-label="GitHub"
            >
              <StackIcon name="github" className="size-4.5" variant="dark" />
            </Link>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors pointer-events-auto"
              aria-label="LinkedIn"
            >
              <StackIcon name="git" className="size-4.5" variant="dark" />
            </Link>
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors pointer-events-auto"
              aria-label="Twitter"
            >
              <StackIcon name="twitter" className="size-4.5" variant="dark" />
            </Link>
            <Link
              href={emailUrl}
              className="hover:text-foreground transition-colors pointer-events-auto"
              aria-label="Email"
            >
              <Mail className="size-4.5" />
            </Link>
          </div> */}
        </div>
      </div>

      {/* Right Column: Large Profile Picture Card */}
      <div className="relative w-full md:w-[250px] lg:w-[270px] h-[300px] md:h-auto shrink-0 select-none md:self-stretch">
        <div className="relative md:absolute inset-0 w-full h-full flex items-end justify-center">
          <Image
            src="/images/profile.png"
            alt={profileData.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain object-bottom scale-110 md:scale-125 lg:scale-135 origin-bottom translate-x-0 md:translate-x-2.5 grayscale"
          />
        </div>
        {/* Floating Experience Badge Overlay */}
        <div className="absolute bottom-2 right-2 bg-card/90 backdrop-blur-md border border-border/80 rounded-xl p-2 shadow-lg flex flex-col items-center min-w-[65px] text-center z-10">
          <span className="text-base font-extrabold text-primary font-heading leading-none">
            {profileData.yearsOfExperience}+
          </span>
          <span className="text-[7px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5 whitespace-nowrap">
            Years of Exp
          </span>
        </div>
      </div>
    </div>
  );
}
