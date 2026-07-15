export interface Skill {
  name: string;
  icon: string; // Lucide icon name
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      { name: "React", icon: "Blocks", level: "expert" },
      { name: "Next.js", icon: "Globe", level: "expert" },
      { name: "TypeScript", icon: "FileCode", level: "advanced" },
      { name: "Tailwind CSS", icon: "Paintbrush", level: "expert" },
      { name: "HTML/CSS", icon: "Code", level: "expert" },
      { name: "JavaScript", icon: "Braces", level: "expert" },
    ],
  },
  {
    category: "Backend",
    description: "Server-side logic and API development",
    skills: [
      { name: "Node.js", icon: "Server", level: "expert" },
      { name: "Express.js", icon: "Route", level: "advanced" },
      { name: "Go", icon: "Terminal", level: "intermediate" },
      { name: "REST APIs", icon: "Plug", level: "expert" },
      { name: "GraphQL", icon: "Network", level: "intermediate" },
    ],
  },
  {
    category: "Database",
    description: "Data storage and management",
    skills: [
      { name: "MongoDB", icon: "Database", level: "expert" },
      { name: "PostgreSQL", icon: "DatabaseZap", level: "intermediate" },
      { name: "Redis", icon: "Zap", level: "intermediate" },
      { name: "Mongoose", icon: "Layers", level: "advanced" },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Deployment, CI/CD, and developer tooling",
    skills: [
      { name: "Docker", icon: "Container", level: "advanced" },
      { name: "Git", icon: "GitBranch", level: "expert" },
      { name: "GitHub Actions", icon: "Play", level: "intermediate" },
      { name: "Linux", icon: "Monitor", level: "advanced" },
      { name: "Vercel", icon: "Cloud", level: "advanced" },
      { name: "Nginx", icon: "Shield", level: "intermediate" },
    ],
  },
];
