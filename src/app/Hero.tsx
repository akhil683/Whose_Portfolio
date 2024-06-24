"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicUI/AnimatedGrid";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-8 h-screen w-screen items-center justify-center overflow-hidden bg-background p-20 max-md:px-3 md:shadow-xl ">
      <h1 className="z-10 whitespace-pre-wrap text-center font-medium leading-tight tracking-tighter text-transparent text-5xl md:text-8xl  bg-clip-text bg-gradient-to-b from-white to-gray-500">
        Welcome to Akhil's World !
      </h1>
      <p className="max-w-[800px] mb-4 text-center leading-relaxed px-3 text-base  md:text-xl text-[#888]">
        Used by some of the world's largest companies, Next.js enables you to
        create high-quality web applications with the power of React components.
      </p>
      <Button>Contact Me</Button>
      <GridPattern
        numSquares={100}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};

export default Hero;
