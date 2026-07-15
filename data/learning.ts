export interface LearningTopic {
  name: string;
  progress: number;
}

export const learningTopics: LearningTopic[] = [
  { name: "Next.js 16 Server Components", progress: 90 },
  { name: "Go & Microservices", progress: 75 },
  { name: "AI Agents & LLM Integrations", progress: 60 },
  { name: "Docker & Kubernetes Deployment", progress: 45 },
];
