import hermeticaImg from "@/assets/projects/hermetica.png";
import nikeImg from "@/assets/projects/nike.png";
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
    id: 2,
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
    live: "adventurevault.vercel.app",
  },
  {
    id: 3,
    name: "Doctor App",
    image: doctorImg,
    description:
      "Promotion website for a platform which can be used by doctor to easily manage their Patient's Records",
    techStack: [
      "Reactjs",
      "TailwindCSS",
      "Framer Motion",
      "SwiperJS",
      "Firebase",
    ],
    github: "https://github.com/akhil683/doctor-site",
    live: "hello",
  },
  {
    id: 4,
    name: "My Portfolio",
    image: portfolioImg,
    description: "Boring personal website built with mainly NextJS and MagicUI",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Magic UI",
      "Aceternity UI",
      "Firebase",
    ],
    github: "https://akhilpalsra.vercel.app",
    live: "hello",
  },
  {
    id: 5,
    name: "Nike Website",
    image: nikeImg,
    description:
      "Developed a Nike website inspired UI for E-commerce platform.",
    techStack: ["Reactjs", "Tailwind CSS"],
    github: "https://github.com/akhil683/nike-website",
    live: "hello",
  },
];
export default Projects;
