export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract" | "Internship";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  techUsed: string[];
}

export const experienceData: Experience[] = [
  // Add your real experience here when you get one. Example:
  //
  // {
  //   id: "exp-1",
  //   role: "Full Stack Developer",
  //   company: "Company Name",
  //   companyUrl: "https://company.com",
  //   type: "Full-time",
  //   startDate: "Jan 2027",
  //   endDate: "Present",
  //   description:
  //     "Building scalable web apps with the MERN stack.",
  //   achievements: [
  //     "Built and shipped a production feature used by 500+ users",
  //     "Improved API response time by 30% through query optimization",
  //   ],
  //   techUsed: ["React", "Node.js", "MongoDB", "TypeScript"],
  // },
];
