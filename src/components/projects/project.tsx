import React from "react";
import AnimatedPinDemo from "../AnimatedPin";
import Projects from "@/data/projects";

const Project = () => {
  console.log(Projects);
  return (
    <section>
      <h2 className="md:px-16 px-8 mb-12 text-transparent text-4xl md:text-5xl  bg-clip-text bg-gradient-to-b leading-tight from-white to-gray-400">
        My Projects
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4 gap-y-16">
        {Projects?.map((project) => (
          <AnimatedPinDemo key={project?.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
