"use client";

import Particles from "@/components/magicUI/particle";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-8 h-screen w-screen items-center justify-center overflow-hidden bg-background p-20 max-md:px-3 md:shadow-xl ">
      <h1 className="z-10 whitespace-pre-wrap text-center font-medium leading-tight tracking-tighter text-transparent text-5xl md:text-7xl  bg-clip-text bg-gradient-to-b from-white to-gray-400">
        Welcome to Akhil World !
      </h1>
      <p className="max-w-[800px] mb-4 text-center leading-relaxed px-3 text-base  md:text-xl text-[#888]">
        Enthusiastic and Curious Frontend Web/App Developer. I love NeoVim and
        travelling !
      </p>
      <Button>Contact Me</Button>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
};

export default Hero;
