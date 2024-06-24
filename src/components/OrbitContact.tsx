import React from "react";
import OrbitingCircles from "./magicUI/orbitContact";

import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const OrbitContact = () => {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Contact Me
      </span>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <FaSquareXTwitter />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <AiFillInstagram />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <FaYoutube className="text-2xl" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <FaGithub className="text-2xl" />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitContact;
