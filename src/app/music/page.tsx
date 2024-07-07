import Image from "next/image";
import React, { Suspense } from "react";
import img from "@/assets/projects/adventureVault.png";
import { Metadata } from "next";
import { songs } from "@/data/music";
import MusicBox from "@/components/MusicBox";
export const metadata: Metadata = {
  title: "Akhil's Music",
  description: "The Songs and Artists, I love to listen !",
};

const Music = () => {
  return (
    <main className="bg-gradient-radial min-h-screen flex flex-col justify-center items-center gap-12 md:pt-12 from-black to-[#111]">
      <h1 className="py-3 font-semibold uppercase bg-[#222] w-full text-center text-gray-300 md:text-2xl">
        Work in progress !
      </h1>
      <div className="flex max-md:flex-col justify-center items-center md:gap-32 gap-16">
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Favourite Songs
          </h2>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="mt-12 flex flex-col gap-4">
              {songs?.map((song) => <MusicBox key={song.id} song={song} />)}
            </div>
          </Suspense>
        </div>
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Favourite Artists
          </h2>
          <Suspense>
            <div className="mt-12 flex flex-col gap-4">
              {songs.map((song) => (
                <MusicBox key={song.id} song={song} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
      {/* <div className="flex justify-center items-center"> */}
      {/*   <p>Continue Playing :(</p> */}
      {/* </div> */}
    </main>
  );
};

export default Music;
