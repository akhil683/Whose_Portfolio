import Image from "next/image";
import { BorderBeam } from "./magicUI/border-beam";
import heroImg from "@/assets/HeroImg.png";

export function BorderBeamComp() {
  return (
    <div className="w-screen flex relative justify-center items-center px-2 max-md:mb-24">
      <div className="relative rounded-xl mx-auto shadow-3xl w-[90vw]">
        <Image
          src={heroImg}
          alt="Hero Image"
          className="hidden max-w-[90vw] rounded-[inherit] border-2 object-contain shadow-lg dark:block"
        />
        <Image
          src={heroImg}
          alt="Hero Image"
          className="block max-w-[90vw] rounded-[inherit] border-2 object-contain shadow-lg dark:hidden"
        />

        <BorderBeam size={250} duration={8} delay={9} />
      </div>
      <div className="w-screen h-full translate-y-[30%] absolute top-0 left-0 bg-gradient-to-b from-transparent via-black to-black max-md:hidden"></div>
    </div>
  );
}
