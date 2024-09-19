import OrbitContact from "@/components/OrbitContact";
import Hero from "@/components/Hero";
import Project from "@/components/projects/project";
import Skill from "@/components/Skills";
import { GetInTouch } from "@/components/GetInTouch";
import { BorderBeamComp } from "@/components/borderBeam";
import Email from "@/components/Email";
import BlogContainer from "@/components/Blogs";

export default async function Home() {
  return (
    <div>
      <Hero />
      <BorderBeamComp />
      <Project />
      <Skill />
      <BlogContainer />
      <GetInTouch />
      <Email />
      <OrbitContact />
      <p className="text-xs text-gray-400 mb-8 text-center">
        Developed by Akhil Palsra
      </p>
    </div>
  );
}
