"use client";

import React from "react";
import { PinContainer } from "./magicUI/3d-pin";
import Image from "next/image";

const AnimatedPinDemo = ({ project }: any) => {
  const { name, description, github, image, techStack } = project;

  return (
    <PinContainer title={`github/${name}`} href={github}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-lg text-slate-100">
          {name}
        </h3>
        <div className="flex overflow-hidden w-full h-40 border border-slate-700 rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
          <Image
            src={image}
            width={400}
            height={200}
            alt={name}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="text-base my-4 !p-0 font-normal">
          <span className="text-slate-400 ">{description}</span>
          <ul className="flex gap-1 mt-4 flex-wrap">
            {techStack?.map((skill: string) => (
              <li
                key={skill}
                className="px-2 py-1 text-xs bg-gray-400 rounded-md text-black"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PinContainer>
  );
};
export default AnimatedPinDemo;
