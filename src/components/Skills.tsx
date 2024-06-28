import React from "react";
import Skills from "@/data/Skills";
import { LinkPreview } from "./magicUI/LinkPreview";

interface SkillType {
  name: string;
  url: string;
}

const Skill = () => {
  return (
    <section className="my-36">
      <h2 className="md:px-16 px-8 my-12 text-transparent font-semibold text-4xl md:text-5xl  bg-clip-text bg-gradient-to-b leading-tight from-white to-gray-400">
        My Skills
      </h2>
      <ul className="md:px-16 px-8 flex flex-wrap max-w-[1200px] gap-2">
        {Skills?.map((skill: SkillType) => (
          <LinkPreview url={skill.url} key={skill.name}>
            <li className="md:px-4 px-3 py-1 md:py-2 text-sm md:text-xl bg-gradient-to-b from-white to-gray-400 hover:to-gray-300 cursor-pointer text-black rounded-md">
              <p>{skill.name}</p>
            </li>
          </LinkPreview>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
