export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "B.S. Computer Science",
    institution: "University of Technology",
    startDate: "2015",
    endDate: "2019",
  },
  {
    id: "edu-2",
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    startDate: "2015",
    endDate: "2015",
  },
];
