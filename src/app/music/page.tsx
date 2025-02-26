import React, { Suspense } from "react";
import { Metadata } from "next";
import { songs } from "@/data/music";
import MusicBox from "@/components/MusicBox";

export const metadata: Metadata = {
  title: "Akhil's Music",
  description: "The Songs and Artists, I love to listen !",
};

const Music = () => {
  return (
    <main className="bg-[#111] min-h-screen flex flex-col items-center gap-12 pt-20">
      {/* <PlaySong /> */}
      <div className="flex max-md:flex-col justify-center items-center md:gap-32 gap-16">
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Favourite Songs
          </h2>
          <Suspense fallback={<h1>Loading songs...</h1>}>
            <div className="mt-12 flex flex-col gap-4">
              {songs?.map((song) => <MusicBox key={song.id} song={song} />)}
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Music;
