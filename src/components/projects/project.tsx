import React from "react";
import AnimatedPinDemo from "../AnimatedPin";
import Projects from "@/data/projects";
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

const Project = () => {
  console.log(Projects);
  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center gap-8 mb-16">
        <p className="px-4 py-2 text-sm bg-[#5D3FD3] text-white rounded-lg">
          Projects
        </p>
        <h3 className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          Checkout my Latest Work !
        </h3>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 gap-y-20">
        {Projects?.map((project: ProjectType) => (
          <AnimatedPinDemo key={project?.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
