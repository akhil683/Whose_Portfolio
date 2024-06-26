import React from "react";
import AnimatedPinDemo from "../AnimatedPin";
import Projects from "@/data/projects";

const Project = () => {
  console.log(Projects);
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-8 mb-16">
        <p className="px-4 py-2 text-sm bg-white text-black rounded-lg">
          Projects
        </p>
        <h3 className="text-5xl font-semibold">Checkout my Latest Work !</h3>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 gap-y-20">
        {Projects?.map((project) => (
          <AnimatedPinDemo key={project?.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
