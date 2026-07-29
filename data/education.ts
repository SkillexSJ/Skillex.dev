export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  description?: string;
  startDate: string;
  endDate: string | "Present";
  status: "completed" | "in-progress" | "upcoming";
  certificates?: Certificate[];
}

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Senior School Certificate",
    institution: "Noyanagar Dakhil Madrasa",
    description:
      "Completed senior school education with focus on science and mathematics.",
    startDate: "2025",
    endDate: "2026",
    status: "completed",
  },
  {
    id: "edu-2",
    degree: "Next Level AI-Driven Software Engineering Bootcamp",
    institution: "Programming Hero",
    description:
      "Intensive full-stack web development bootcamp covering React, Next.js, Node.js, MongoDB, PostgreSQL, TypeScript, and modern deployment workflows.",
    startDate: "2025",
    endDate: "2026",
    status: "completed",
    certificates: [
      {
        id: "cert-1",
        title: "Software Engineering",
        issuer: "Programming Hero",
        date: "2026",
        credentialUrl:
          "https://web.programming-hero.com/verification?validationNumber=PHL2B6L2B600411152",
        imageUrl: "/images/cert.png",
      },
    ],
  },
  {
    id: "edu-3",
    degree: "Software Engineer(HackerRank)",
    institution: "HackerRank",
    startDate: "2025",
    endDate: "2025",
    status: "completed",
    certificates: [
      {
        id: "cert-1",
        title: "Software Engineering",
        issuer: "HackerRank",
        date: "2025",
        credentialUrl: "https://www.hackerrank.com/certificates/088ebcc187a7",
        imageUrl: "/images/cert2.png",
      },
    ],
  },
];
