export interface LearningTopic {
  name: string;
  progress: number;
}

export const learningTopics: LearningTopic[] = [
  { name: "AWS", progress: 10 },
  { name: "Go & Microservices", progress: 75 },
  { name: "AI Agents & LLM Integrations", progress: 60 },
  { name: "Docker & Nginx", progress: 45 },
];
