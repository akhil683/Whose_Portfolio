import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  play: boolean;
  onFinish: () => void;
}
const AudioPlayer = ({ src, play, onFinish }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (play) {
      playAudio();
      console.log("Play audio");
    }
  }, [play]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleAudioEnded = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        loop
        className="hidden"
        onEnded={handleAudioEnded}
        src={src}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
