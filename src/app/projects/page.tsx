import React from "react";
import { Metadata } from "next";
import Projects from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Akhil's Projects",
  description:
    "Small project that Akhil has created during the learning phase.",
};

const ProjectPage = () => {
  return (
    <main className="bg-[#111] min-h-screen px-4 flex flex-col pt-16 md:items-center">
      <div className="max-w-5xl">
        <h1 className="text-2xl mb-6 hover:no-underline text-white underline underline-offset-8 decoration-[#999]">
          Projects
        </h1>
        <div className="flex flex-col gap-8">
          {Projects.slice(5, Projects.length).map((project) => (
            <div key={project.id}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-white">{project.name}</h3>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank">
                    <Github className="text-gray-300 hover:text-white w-4 h-4" />
                  </a>
                  {project.live !== "" && (
                    <a href={project.live} target="_blank">
                      <ExternalLink className="text-gray-300 hover:text-white w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mt-1 max-md:text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
