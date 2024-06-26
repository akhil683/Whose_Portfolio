import OrbitContact from "@/components/OrbitContact";
import Hero from "./Hero";
import Project from "@/components/projects/project";
import Skill from "@/components/Skills";
import { GetInTouch } from "@/components/GetInTouch";
import { BorderBeamComp } from "@/components/borderBeam";
import Email from "@/components/Email";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <BorderBeamComp />
      <Project />
      <Skill />
      <GetInTouch />
      <Email />
      <OrbitContact />
    </div>
  );
}
