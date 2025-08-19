import hermeticaImg from "@/assets/projects/hermetica.png";
import commithubImg from "@/assets/projects/commit.png";
import techfixImg from "@/assets/projects/techix.png";
import cloudsyncImg from "@/assets/projects/gallery.png";
import doctorImg from "@/assets/projects/doctor.png";
import portfolioImg from "@/assets/projects/portfolio.png";
import adventureImg from "@/assets/projects/adventureVault.png";
import { StaticImageData } from "next/image";

interface ProjectType {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

const Projects: ProjectType[] = [
  {
    id: 1,
    name: "Wiki Reel",
    image: hermeticaImg,
    description:
      "AI-powered microlearning for exams. Wikipedia, news & questions in reels like format.",
    techStack: [
      "Gemini API",
      "Nextjs",
      "Posthog",
      "Drizzle",
      "Zustand",
      "Nodemailer",
      "NeonDB (Postgres)",
      "Wikipedia API",
    ],
    github: "https://github.com/akhil683/wiki-reel",
    live: "https://wiki.akkhil.dev",
  },
  {
    id: 2,
    name: "Commit Hub",
    image: commithubImg,
    description:
      "An application that helps developers keep their GitHub contribution graph updated, even for work done on branches other than main.",
    techStack: [
      "Nextjs",
      "Typescript",
      "NextAuth",
      "Webhooks",
      "Drizzle",
      "NeonDB",
      "React Query",
      "Framer Motion",
      "Stripe",
    ],
    github: "https://github.com/akhil683/Commit-Hub",
    live: "auto-commit-hub.vercel.app",
  },
  {
    id: 3,
    name: "Ping Pong",
    image: hermeticaImg,
    description:
      "A simple scribble alternative with extra features for drawing, game management and authentication",
    techStack: [
      "Gemini API",
      "Nextjs",
      "Posthog",
      "Drizzle",
      "Zustand",
      "Nodemailer",
      "NeonDB (Postgres)",
      "Wikipedia API",
    ],
    github: "https://github.com/akhil683/PingPong",
    live: "https://pingpong.akkhil.dev",
  },
  {
    id: 4,
    name: "Team Hermetica",
    image: hermeticaImg,
    description:
      "Built college club's website for technical fest NIMBUS, 2024. It showcase club's history and projects",
    techStack: [
      "Reactjs",
      "TailwindCSS",
      "Firebase",
      "Framer Motion",
      "Daisy UI",
    ],
    github: "https://github.com/akhil683/Hermetica-Club",
    live: "https://www.teamhermetica.in",
  },
  {
    id: 5,
    name: "Cloud Sync",
    image: cloudsyncImg,
    description: "React Native Gallery app which syncs with the cloud",
    techStack: [
      "React Native",
      "Supabase",
      "Expo router",
      "Nativewind",
      "Imagekit",
      "Expo Media Library",
      "Typescript",
    ],
    github: "https://github.com/akhil683/Cloud-Sync",
    live: "",
  },
  {
    id: 6,
    name: "TechFix-Shop",
    image: techfixImg,
    description: "Platform to manage employee and customers tickets in a Shop.",
    techStack: [
      "Nextjs",
      "Tanstack Table",
      "Kinde Auth",
      "Sentry",
      "Drizzle",
      "NeonDB",
      "Typescript",
      "React Query",
    ],
    github: "https://github.com/akhil683/TechFix-Shop",
    live: "https://techfix.akkhil.dev",
  },

  {
    id: 7,
    name: "My Coll",
    image: techfixImg,
    description: "Zoom Clone with scheduling and recording the meeting",
    techStack: [
      "Nextjs",
      "Tanstack Table",
      "Kinde Auth",
      "Sentry",
      "Drizzle",
      "NeonDB",
      "Typescript",
      "React Query",
    ],
    github: "https://github.com/akhil683/zoom-clone-YT",
    live: "https://mycoll.akkhil.dev",
  },
  {
    id: 8,
    name: "Doctor App",
    image: doctorImg,
    description:
      "Promotion website for a platform which can be used by doctor to easily manage their Patient's Records (credit: JS Mastery)",
    techStack: [
      "Reactjs",
      "TailwindCSS",
      "Framer Motion",
      "SwiperJS",
      "Firebase",
    ],
    github: "https://github.com/akhil683/doctor-site",
    live: "https://doctor.akkhil.dev",
  },
  {
    id: 9,
    name: "NITH Chess",
    image: adventureImg,
    description:
      "A simple chess leaderboard for nith with admin dashboard for adding matches and creating tournaments.",
    techStack: [
      "Reactjs",
      "Typescript",
      "TailwindCSS",
      "Appwrite",
      "React Query",
      "Framer Motion",
      "Stripe",
    ],
    github: "https://github.com/akhil683/chess",
    live: "https://nith-chess.vercel.app",
  },
  {
    id: 10,
    name: "Instander",
    image: adventureImg,
    description:
      "Instagram UI clone with dark/light theme using React Native and NativeWind ",
    techStack: [
      "Reactjs",
      "Typescript",
      "TailwindCSS",
      "Appwrite",
      "React Query",
      "Framer Motion",
      "Stripe",
    ],
    github: "https://github.com/akhil683/RN-Insta",
    live: "",
  },
  {
    id: 11,
    name: "Adventure Vault",
    image: adventureImg,
    description:
      "Book your dream adventure like paragliding and rafting in Manali, Shimla, Massorie etc.",
    techStack: [
      "Reactjs",
      "Typescript",
      "TailwindCSS",
      "Appwrite",
      "React Query",
      "Framer Motion",
      "Stripe",
    ],
    github: "https://github.com/akhil683/adventure-camp",
    live: "https://adventurevault.vercel.app",
  },
];
export default Projects;
