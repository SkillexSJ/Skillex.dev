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
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Your Company",
    type: "Full-time",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Leading the development of scalable web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built and deployed 5+ production applications serving 10K+ users",
      "Reduced API response time by 40% through query optimization",
      "Implemented CI/CD pipelines using Docker and GitHub Actions",
      "Mentored 2 junior developers on React and Node.js best practices",
    ],
    techUsed: ["React", "Node.js", "MongoDB", "Docker", "TypeScript"],
  },
  {
    id: "exp-2",
    role: "Backend Developer",
    company: "Previous Company",
    type: "Full-time",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description:
      "Developed and maintained RESTful APIs and microservices. Worked with Go for high-performance backend services.",
    achievements: [
      "Designed RESTful APIs handling 100K+ daily requests",
      "Migrated monolithic service to microservices architecture",
      "Built containerized deployment workflow with Docker",
    ],
    techUsed: ["Go", "Node.js", "Docker", "PostgreSQL", "Redis"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer Intern",
    company: "Startup Name",
    type: "Internship",
    startDate: "Jan 2023",
    endDate: "May 2023",
    description:
      "Contributed to building responsive web interfaces and learned modern frontend development practices.",
    achievements: [
      "Built responsive UI components used across 3 product pages",
      "Improved Lighthouse performance score from 65 to 92",
      "Integrated REST APIs with React frontend using Axios",
    ],
    techUsed: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
];
