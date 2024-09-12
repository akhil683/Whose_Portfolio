"use client";

import React, { useEffect, useState, useRef } from "react";

import populargirlAudio from "@/assets/songs/dil_mere.mp3";

const PlaySong = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (audioRef.current) {
      if (!play) return audioRef.current.pause();
      audioRef.current.play();
      console.log("played music");
    }
  }, [play]);

  return (
    <>
      <audio ref={audioRef} src={populargirlAudio} loop />
      <button
        onClick={() => setPlay(!play)}
        className="absolute bottom-8 right-8 shadow-black shadow-2xl px-6 text-xl md:px-8 py-3 md:py-4 hover:bg-gray-300 duration-200 md:text-2xl rounded-full bg-white text-black"
      >
        {play ? "Pause" : "Play"}
      </button>
    </>
  );
};

export default PlaySong;
