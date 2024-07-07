"use client";

import React, { useState } from "react";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
import { songType } from "../../type";

const MusicBox = ({ song }: { song: songType }) => {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <button
      onClick={() => setPlayMusic(true)}
      className="flex md:w-96 w-full gap-6 py-2 pl-4 pr-8 rounded-xl border border-[#222] hover:border-[#333] hover:shadow-2xl hover:shadow-[#111] duration-100"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#444] bg-gray-400">
        <Image
          src={song.img}
          className="w-full h-full object-cover rounded-full"
          alt="song"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h4 className="md:text-lg text-base">{song.name}</h4>
        <p className="text-sm text-[#999]">{song.artist}</p>
        <AudioPlayer
          src={song.audio}
          play={playMusic}
          onFinish={() => setPlayMusic(false)}
        />
      </div>
    </button>
  );
};

export default MusicBox;