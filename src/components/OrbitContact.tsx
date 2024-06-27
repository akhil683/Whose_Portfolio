import React from "react";
import OrbitingCircles from "./magicUI/orbitContact";
import Image from "next/image";
import xImg from "@/assets/social/x.png";
import InstaImg from "@/assets/social/insta.png";
import LinkedinImg from "@/assets/social/linkedin.png";
import githubImg from "@/assets/social/github.png";

const SocialImg = ({ image, link }: any) => {
  return (
    <a href={link} target="_blank">
      <Image
        src={image}
        width={40}
        height={40}
        alt="socials"
        className="  rounded-md"
      />
    </a>
  );
};

const OrbitContact = () => {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-8xl font-semibold leading-none text-transparent from-gray-200 to-slate-900/10">
        Contact Me
      </span>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <SocialImg image={xImg} link="https://x.com/akhil_web" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <SocialImg image={InstaImg} link="https://instagram.com/akhil_web" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <SocialImg
          image={LinkedinImg}
          link="https://www.linkedin.com/in/akhil-palsra-90b268247/"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] overflow-hidden border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <SocialImg image={githubImg} link="https://github.com/akhil683" />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitContact;
