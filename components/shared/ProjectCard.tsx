"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, GitBranch, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="h-full"
    >
      <Card
        className={cn(
          "group glass-card-elevated flex flex-col h-full overflow-hidden",
          "border-border/50 transition-all duration-300",
          "hover:border-primary/30 hover:-translate-y-1.5",
          "hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_oklch(0.62_0.2_250/0.15)]"
        )}
      >
        {/* Gradient accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-primary via-chart-2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Thumbnail */}
        {project.image && (
          <div className="relative h-44 overflow-hidden bg-muted/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                className="text-[10px] uppercase tracking-wider font-medium rounded-full border border-border/50 bg-background/80 backdrop-blur-sm"
              >
                {project.category}
              </Badge>
            </div>
          </div>
        )}

        <CardHeader className={cn("pb-3", !project.image && "pt-5")}>
          <div className="space-y-1.5">
            {!project.image && (
              <Badge
                variant="secondary"
                className="text-[10px] uppercase tracking-wider font-medium rounded-full"
              >
                {project.category}
              </Badge>
            )}
            <h3 className="font-heading font-semibold text-base tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
        </CardHeader>

        <CardContent className="pb-4 flex-1">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                >
                  <Tag className="size-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-0">
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 w-full">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="skill-chip text-[10px] px-2.5 py-0.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 w-full">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "flex-1 rounded-xl btn-magnetic text-xs"
                )}
              >
                <ExternalLink className="size-3.5 mr-1.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "flex-1 rounded-xl text-xs"
                )}
              >
                <GitBranch className="size-3.5 mr-1.5" />
                Source
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
