"use client";

import React from "react";
import { PinContainer } from "./magicUI/3d-pin";
import Image from "next/image";
import imageBg from "@/assets/eg.jpg";

interface projectType {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  live: string;
}
const AnimatedPinDemo = ({ project }: any) => {
  const { name, description, github } = project;

  return (
    <div className="flex items-center justify-center ">
      <PinContainer title={`github/${name}`} href={github}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="flex overflow-hidden flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src={imageBg}
              width={400}
              height={80}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
export default AnimatedPinDemo;
