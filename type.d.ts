import { StaticImageData } from "next/image";
import { JSXElementConstructor, ReactElement } from "react";

type Meta = {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  tag: string;
};
type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,

}
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
