import OrbitContact from "@/components/OrbitContact";
import Hero from "./Hero";
import Project from "@/components/projects/project";
import Skill from "@/components/Skills";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Project />
      <Skill />
      <GetInTouch />
      <OrbitContact />
    </div>
  );
}
