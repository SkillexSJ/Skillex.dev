import { GitBranch, Globe, X, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  username: string;
}

export const socialsData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/SkillexSJ",
    icon: GitBranch,
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/sajid-khan7271",
    icon: Globe,
    username: "Sajid Khan",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/SkillexSJ7",
    icon: X,
    username: "@yourusername",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/sajidkhan272",
    icon: X,
    username: "sajidkhan272",
  },
  {
    name: "Email",
    url: "mailto:sajidtech71.sk@gmail.com",
    icon: Mail,
    username: "sajidtech71.sk@gmail.com",
  },
];

export const profileData = {
  name: "Sajid Khan",
  title: "Full Stack Developer",
  tagline: "Building scalable solutions with modern tech",
  bio: "Passionate Full Stack Developer specializing in the MERN stack with experience in Go and Docker. I build performant, scalable web applications and love turning complex problems into elegant solutions.",
  location: "Dhaka,Bangladesh",
  availableForHire: true,
  yearsOfExperience: 1,
  projectsCompleted: 6,
  technologiesUsed: 20,
  githubUsername: "SkillexSJ",
  resumeUrl:
    "https://drive.google.com/file/d/1hGSZEa598W2YumJ8eQxaSq-UzFAHez2O/view?usp=sharing",
};
