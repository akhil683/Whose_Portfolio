import React from "react";
import Skills from "@/data/Skills";

const Skill = () => {
  return (
    <section className="my-24">
      <h2 className="md:px-16 px-8 my-12 text-transparent font-semibold text-4xl md:text-5xl  bg-clip-text bg-gradient-to-b leading-tight from-white to-gray-400">
        My Skills
      </h2>
      <ul className="md:px-16 px-8 flex flex-wrap max-w-[1200px] gap-2">
        {Skills?.map((skill) => (
          <li
            className="px-4 py-2 text-sm md:text-xl bg-gradient-to-b from-white to-gray-400 hover:to-gray-300 cursor-pointer text-black rounded-lg"
            key={skill}
          >
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
