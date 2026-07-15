export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  techStack: string[];
  category: "fullstack" | "backend" | "devops" | "frontend";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tags?: string[];
  credentials?: {
    email?: string;
    password?: string;
  };
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "court-connect",
    title: "Court Connect",
    description:
      "Court Connect is a cutting-edge full-stack platform designed to seamlessly connect sports enthusiasts with facility organizers. Built with the latest web technologies, it offers a robust ecosystem for browsing, scheduling, and managing court bookings.",

    image: "/images/project1.png",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Better Auth",
      "Postgres",
      "stripe",
      "react-hook-form",
      "gsap",
      "cloudinary",
      "tanstack-query",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    category: "frontend",
    liveUrl: "court-connect-frontend.vercel.app",
    githubUrl: "https://github.com/SkillexSJ/COURT-CONNECT-FRONTEND",
    featured: true,
    tags: ["UI", "Court", "Booking"],
    features: [
      "Smart Discovery: Advanced search and filtering to find courts by sport, price, location, and availability.",
      "Seamless Booking: Real-time calendar integration and Stripe payments for instant scheduling.",
      "Interactive Dashboard: Track upcoming matches, booking history, and manage payments",
      "Review System: Rate facilities and leave feedback to help the sports community.",
      "Completely responsive and optimized layout for mobile",
    ],
  },
  // {
  //   id: "ecommerce-platform",
  //   title: "E-Commerce & Inventory Management",
  //   description:
  //     "Full-stack e-commerce application with user authentication, product management, shopping cart, payment integration, and order tracking dashboard.",
  //   image: "/images/project-ecommerce.png",
  //   techStack: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Stripe",
  //     "Tailwind CSS",
  //   ],
  //   category: "fullstack",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  //   tags: ["MERN", "Payments", "Dashboard"],
  //   credentials: {
  //     email: "inventory@gmail.com",
  //     password: "demo1234",
  //   },
  //   features: [
  //     "Salesforce & Odoo API integration for seamless data sync",
  //     "Real-time inventory tracking across multiple warehouses",
  //     "Automated purchase order generation and management",
  //     "Advanced analytics and reporting dashboard",
  //     "Multi-warehouse support with stock transfer capabilities",
  //     "Role-based access control for enterprise security",
  //   ],
  // },
  {
    id: "skill-bridge",
    title: "Skill Bridge",
    description:
      "Skill Bridge is a cutting-edge full-stack platform designed to seamlessly connect eager learners with industry-expert tutors. Built with the latest web technologies, it offers a robust ecosystem for browsing, scheduling, and managing educational sessions.",
    image: "/images/project2.png",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Better Auth",
      "Postgres",
      "stripe",
      "react-hook-form",
      "gsap",
      "cloudinary",
      "tanstack-query",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    category: "frontend",
    liveUrl: "skill-bridge-frontend-kappa.vercel.app",
    githubUrl: "https://github.com/SkillexSJ/SkillBridge-Frontend",
    featured: true,
    tags: ["Next.js", "REST", "Skill", "Tutor", "Education"],
    features: [
      "Smart Discovery: Advanced search and filtering to find tutors by subject, price, rating, and availability.",
      "Seamless Booking: Real-time calendar integration for instant session scheduling.",
      "Dynamic Availability: Set weekly recurring schedules and manage time slots effortlessly",
      "Session Management: Accept, reject, or reschedule bookings with ease.",
      "Secure Authentication: Role-based access control (Student, Tutor, Admin) via better-auth.",
    ],
  },
  // {
  //   id: "realtime-chat-app",
  //   title: "Real-time Chat Application",
  //   description:
  //     "Full-stack chat application with real-time messaging using Socket.io, group chats, file sharing, and message search.",
  //   image: "/images/project-chat.png",
  //   techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
  //   category: "fullstack",
  //   githubUrl: "#",
  //   featured: true,
  //   tags: ["Real-time", "WebSocket", "Redis"],
  //   features: [
  //     "Bi-directional WebSocket messaging with Socket.io",
  //     "Persistent message history cached using Redis",
  //     "Group chat creation and member management",
  //     "Real-time online status indicators",
  //     "Optimized query performance with MongoDB indexing",
  //   ],
  // },
  // {
  //   id: "ci-cd-pipeline",
  //   title: "CI/CD Pipeline Setup",
  //   description:
  //     "Automated deployment pipeline using Docker and GitHub Actions for a microservices architecture. Includes monitoring and auto-scaling.",
  //   image: "/images/project-pipeline.png",
  //   techStack: ["Docker", "GitHub Actions", "Nginx", "Linux", "Shell"],
  //   category: "devops",
  //   githubUrl: "#",
  //   featured: false,
  //   tags: ["DevOps", "CI/CD", "Docker"],
  //   features: [
  //     "Automated testing and lint check on code push",
  //     "Continuous deployment to staging environment using SSH",
  //     "Nginx reverse proxy with dynamic load balancing",
  //     "Self-healing auto-restart docker container orchestration",
  //     "Detailed error logging and pipeline Slack notifications",
  //   ],
  // },
  // {
  //   id: "blog-platform",
  //   title: "Developer Blog Platform",
  //   description:
  //     "Markdown-based blog platform with SSG, syntax highlighting, RSS feed, and SEO optimization built on Next.js.",
  //   image: "/images/project-blog.png",
  //   techStack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
  //   category: "frontend",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   tags: ["SSG", "MDX", "SEO"],
  //   features: [
  //     "Static Site Generation (SSG) for instantaneous load speeds",
  //     "MDX support for embedding interactive JSX inside articles",
  //     "Fully responsive syntax highlighting for code blocks",
  //     "SEO best practices with auto-generated sitemap and schema markup",
  //     "Custom RSS 2.0 feed generator for content aggregators",
  //   ],
  // },
];

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "devops", label: "DevOps" },
] as const;
