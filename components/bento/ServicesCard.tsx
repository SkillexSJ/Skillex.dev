"use client";

import React from "react";
import { Laptop, Database, Cloud, Zap, CheckCircle2 } from "lucide-react";
import ShinyText from "@/components/ShinyText";

export function ServicesCard() {
  const services = [
    {
      title: "Full-Stack Web Apps",
      description: "Fast, responsive web applications using Next.js & React.",
      icon: Laptop,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
    {
      title: "Scalable APIs & Systems",
      description: "Robust backends built with Node.js, Express, Go, and SQL/NoSQL.",
      icon: Database,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
    {
      title: "Cloud Infrastructure & CI/CD",
      description: "Containerized hosting using Docker, GitHub Actions, and AWS.",
      icon: Cloud,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
    {
      title: "Optimization & SEO",
      description: "Performance tuning, caching strategies, and Core Web Vitals.",
      icon: Zap,
      color: "text-muted-foreground bg-muted/40 border-border/40",
    },
  ];

  return (
    <div className="flex flex-col gap-4 text-left h-full justify-start w-full">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] block mb-1 font-sans">
          Offerings
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold font-heading tracking-wide uppercase block">
          <ShinyText
            text="Services &amp; Expertise"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={i}
              className="flex flex-col justify-between p-4 rounded-2xl border border-border/40 bg-muted/10 hover:border-primary/30 hover:bg-muted/25 transition-all duration-300 group h-full text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-start transition-transform duration-300 group-hover:scale-105 w-fit">
                  <Icon className="size-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-foreground group-hover:text-primary transition-colors font-heading tracking-wide leading-tight">
                    {svc.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-relaxed mt-1.5 line-clamp-3">
                    {svc.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
