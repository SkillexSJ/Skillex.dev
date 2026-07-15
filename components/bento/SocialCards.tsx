import React from "react";
import { Mail, CalendarCheck2 } from "lucide-react";
import { socialsData } from "@/data/socials";
import Link from "next/link";

export const githubUrl =
  socialsData.find((s) => s.name === "GitHub")?.url ?? "https://github.com";
export const linkedinUrl =
  socialsData.find((s) => s.name === "LinkedIn")?.url ?? "https://linkedin.com";
export const twitterUrl =
  socialsData.find((s) => s.name === "Twitter")?.url ?? "https://twitter.com";
export const emailAddress =
  socialsData.find((s) => s.name === "Email")?.username ?? "hello@example.com";
export const emailUrl =
  socialsData.find((s) => s.name === "Email")?.url ??
  "mailto:hello@example.com";

// Compatibility exports
export function GitHubCardContent() {
  return null;
}

export function LinkedInCardContent() {
  return null;
}

export function ContactCardContent() {
  return null;
}

// Redesigned Unified Contact & Social Links component
export function SocialCards() {
  return (
    <div className="flex flex-col gap-4 text-left h-full justify-between w-full">
      {/* Follow Me Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
            Follow Me
          </span>
          <span className="text-[9px] text-muted-foreground font-semibold">
            Online Presence
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-muted/10 hover:bg-muted/30 transition-all text-xs text-foreground group"
          >
            <div className="flex items-center gap-2">
              <svg
                className="size-3.5 fill-current text-muted-foreground group-hover:text-foreground transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                GitHub
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">
              @github
            </span>
          </Link>
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-muted/10 hover:bg-muted/30 transition-all text-xs text-foreground group"
          >
            <div className="flex items-center gap-2">
              <svg
                className="size-3.5 fill-current text-blue-400/80 group-hover:text-blue-400 transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">
              @linkedin
            </span>
          </Link>
          <Link
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-muted/10 hover:bg-muted/30 transition-all text-xs text-foreground group"
          >
            <div className="flex items-center gap-2">
              <svg
                className="size-3.5 fill-current text-sky-400/80 group-hover:text-sky-400 transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                Twitter
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">
              @twitter
            </span>
          </Link>
        </div>
      </div>

      {/* Let's Work Together Section */}
      <div className="space-y-2 mt-1">
        <div className="text-center space-y-0.5">
          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
            Let&apos;s Work Together
          </span>
          <span className="text-[9px] text-muted-foreground leading-none font-semibold">
            Make magic happen
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href={emailUrl}
            className="flex items-center justify-center gap-2 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white transition-all shadow-[0_0_12px_rgba(147,51,234,0.2)]"
          >
            <Mail className="size-3.5" />
            <span>Email Me</span>
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 py-2 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 text-xs font-bold text-foreground transition-all"
          >
            <CalendarCheck2 className="size-3.5 text-primary" />
            <span>Message Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
