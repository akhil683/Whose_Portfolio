import { StaticImageData } from "next/image";
type BlogPost = {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
};
type songType = {
  id: number;
  name: string;
  artist: string;
  audio: string;
  img: StaticImageData;
};
type ArtistType = {
  id: number;
  name: string;
  img: string;
  link: string;
};
