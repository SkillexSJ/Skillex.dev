"use client";

import React from "react";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectDetailsModalContentProps {
  project: Project;
}

export function ProjectDetailsModalContent({ project }: ProjectDetailsModalContentProps) {
  // Split features into two columns if we have them
  const leftColFeatures: string[] = [];
  const rightColFeatures: string[] = [];
  
  if (project.features) {
    project.features.forEach((feature, index) => {
      if (index % 2 === 0) {
        leftColFeatures.push(feature);
      } else {
        rightColFeatures.push(feature);
      }
    });
  }

  return (
    <div className="flex flex-col gap-6 text-left w-full">
      {/* Top Section: Photo Card (Screenshot) */}
      {project.image && (
        <div className="relative w-full h-[240px] md:h-[300px] rounded-2xl overflow-hidden border border-border/80 shadow-inner bg-muted/25 shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority
            className="object-cover object-top hover:scale-102 transition-transform duration-500"
          />
        </div>
      )}

      {/* Action Buttons Section */}
      <div className="flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold transition-all shadow-[0_4px_12px_rgba(168,85,247,0.25)] pointer-events-auto"
          >
            <ExternalLink className="size-4" />
            <span>LIVE</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 text-xs font-bold text-foreground transition-all pointer-events-auto"
          >
            <svg className="size-4 fill-current text-foreground" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span>FULL STACK CODE</span>
          </a>
        )}
      </div>

      {/* Demo Credentials Box */}
      {project.credentials && (
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 bg-muted/20 border border-border/50 rounded-xl p-4 w-full">
          <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/90 uppercase tracking-wider shrink-0">
            <Eye className="size-4 text-primary" />
            <span>Demo Credentials</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {project.credentials.email && (
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Email</span>
                <span className="text-xs font-semibold text-foreground font-mono">{project.credentials.email}</span>
              </div>
            )}
            {project.credentials.password && (
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Password</span>
                <span className="text-xs font-semibold text-foreground font-mono">{project.credentials.password}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Description Paragraph */}
      <p className="text-sm text-muted-foreground leading-relaxed w-full">
        {project.longDescription || project.description}
      </p>

      {/* Key Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="space-y-3 w-full mt-1">
          <h4 className="text-sm font-extrabold text-foreground tracking-tight uppercase font-heading">
            Key Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 w-full text-xs text-muted-foreground">
            {/* Left Column Bullets */}
            <div className="flex flex-col gap-2.5">
              {leftColFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            {/* Right Column Bullets */}
            <div className="flex flex-col gap-2.5">
              {rightColFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack Tags Section */}
      <div className="space-y-3 w-full mt-1">
        <h4 className="text-sm font-extrabold text-foreground tracking-tight uppercase font-heading">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2 w-full">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-bold text-muted-foreground uppercase bg-muted/40 border border-border px-3 py-1 rounded-md tracking-wider cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
