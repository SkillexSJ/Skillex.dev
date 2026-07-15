"use client";

import { Terminal, Code, Cpu, Database, Mail } from "lucide-react";
import StackIcon from "tech-stack-icons";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "size-3.5" }: TechIconProps) {
  const normName = name.toLowerCase().trim();

  // Custom high-quality SVG paths for popular technologies
  switch (normName) {
    case "react":
      return <StackIcon name="react" className={className} />;
    case "next.js":
    case "nextjs":
    case "next.js 16":
      return <StackIcon name="nextjs2" className={className} />;
    case "typescript":
      return <StackIcon name="typescript" className={className} />;
    case "tailwind css":
    case "tailwindcss":
      return <StackIcon name="tailwindcss" className={className} />;
    case "node.js":
    case "nodejs":
      return <StackIcon name="nodejs" className={className} />;
    case "express":
    case "express.js":
    case "expressjs":
      return <StackIcon name="expressjs" className={className} />;
    case "mongodb":
      return <StackIcon name="mongodb" className={className} />;
    case "go":
    case "golang":
      return <StackIcon name="go" className={className} />;
    case "postgresql":
    case "postgres":
      return <StackIcon name="postgresql" className={className} />;
    case "redis":
      return <StackIcon name="redis" className={className} />;
    case "docker":
      return <StackIcon name="docker" className={className} />;
    case "git":
      return <StackIcon name="git" className={className} />;
    case "github":
    case "github actions":
      return <StackIcon name="github" variant="dark" className={className} />;
    case "html/css":
    case "html":
    case "css":
    case "html5":
    case "css3":
      return <StackIcon name="html5" className={className} />;
    case "javascript":
    case "js":
      return <StackIcon name="js" className={className} />;
    case "linux":
      return <StackIcon name="linux" className={className} />;
    case "nginx":
      return <StackIcon name="nginx" className={className} />;
    case "vercel":
      return <StackIcon name="vercel" className={className} />;
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className={className}
        >
          <g
            fill="#0072b1"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="inherit"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
            </g>
          </g>
        </svg>
      );
    case "twitter":
    case "x":
      return <StackIcon name="twitter" variant="dark" className={className} />;
    case "email":
    case "mail":
      return <Mail className={className} />;
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
          className={className}
        >
          <path
            fill="#3F51B5"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
          ></path>
        </svg>
      );

    case "behance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
          className={className}
        >
          <path
            fill="#2196F3"
            d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"
          ></path>
          <path
            fill="#FFF"
            d="M27 17H34V19H27zM21.512 23.428c.585-.285 1.903-.934 1.903-2.857 0-3.617-3.952-3.57-4.683-3.57H12v14h7.025C19.61 31 24 30.835 24 26.999 24 24.524 22.39 23.714 21.512 23.428zM15 19.428h2.928c.292 0 2.195.104 2.195 1.572 0 1.467-1.463 1.714-1.902 1.714H15V19.428zM18.336 28.571h-3.367v-3.856h3.367c.731 0 2.341.237 2.341 2C20.677 28.476 18.628 28.571 18.336 28.571zM32.438 28.395c-.465.289-.929.436-1.549.436-2.326 0-2.789-1.961-2.789-2.83H36c0-.869 0-1.511-.155-2.236C35.689 23.04 34.63 20 30.734 20 25.289 20 25 24.778 25 25.5c0 .723.156 1.593.467 2.171.309.724.619 1.304 1.084 1.736.464.435 1.083.866 1.703 1.157C29.028 30.855 29.803 31 30.578 31c1.238 0 2.324-.288 3.253-.868.931-.579 1.55-1.448 2.014-2.606h-2.633C33.057 27.816 32.902 28.104 32.438 28.395zM30.734 22.027c1.518 0 2.168 1.592 2.322 2.314H28.1C28.1 24.198 28.471 22.027 30.734 22.027z"
          ></path>
        </svg>
      );
    default:
      if (normName.includes("database") || normName.includes("sql")) {
        return <Database className={className} />;
      }
      if (normName.includes("api") || normName.includes("rest")) {
        return <Cpu className={className} />;
      }
      if (normName.includes("code") || normName.includes("script")) {
        return <Code className={className} />;
      }
      return <Terminal className={className} />;
  }
}
