import OrbitContact from "@/components/OrbitContact";
import Hero from "./Hero";
import Project from "@/components/projects/project";
import Skill from "@/components/Skills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Skill />
      <Project />
      <OrbitContact />
    </div>
  );
}
