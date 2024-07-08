import likeyou from "@/assets/songs/images/like_you.jpg";
import magicshop from "@/assets/songs/images/magic_shopp.jpg";
import tutapull from "@/assets/songs/images/tuta_pull_wahan.jpg";
import populargirl from "@/assets/songs/images/popular_girl.jpeg";
import dilmere from "@/assets/songs/images/dil_mere.png";

import likeyouAudio from "@/assets/songs/like_you.mp3";
import magicshopAudio from "@/assets/songs/Magic_shop.mp3";
import tutapullAudio from "@/assets/songs/tuta_pull_vahan.mp3";
import dilemereAudio from "@/assets/songs/dil_mere.mp3";
import populargirlAudio from "@/assets/songs/popular_girl.mp3";

import { ArtistType, songType } from "../../type";

export const songs: songType[] = [
  {
    id: 1,
    name: "Like You",
    artist: "Tatiana Manaois",
    audio: likeyouAudio,
    img: likeyou,
  },
  {
    id: 2,
    name: "Dil Mere",
    artist: "The Local Train",
    audio: dilemereAudio,
    img: dilmere,
  },
  {
    id: 3,
    name: "Popular girl, typical boy",
    artist: "Powfu",
    audio: populargirlAudio,
    img: populargirl,
  },
  {
    id: 4,
    name: "Magic Shop",
    artist: "BTS",
    audio:
      "https://github.com/akhil683/Whose_Portfolio/blob/main/src/assets/songs/Magic_shop.mp3",
    img: magicshop,
  },
  {
    id: 5,
    name: "Tuta Pull Wahan",
    artist: "Deepak Rathore",
    audio: tutapullAudio,
    img: tutapull,
  },
];

export const Artist: ArtistType[] = [
  {
    id: 1,
    name: "Powfu",
    link: "",
    img: "",
  },
  {
    id: 2,
    name: "Tatiana Manaois",
    link: "",
    img: "",
  },
  {
    id: 1,
    name: "When Chai Meet Toast",
    link: "",
    img: "",
  },
  {
    id: 1,
    name: "BTS",
    link: "",
    img: "",
  },
  {
    id: 1,
    name: "The Local Train",
    link: "",
    img: "",
  },
];
