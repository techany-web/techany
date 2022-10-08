import { type } from "os";
import React from "react";

type TitleType = {
  title: string;
  style?: string;
};

export default function TitlePink({ title, style }: TitleType) {
  return (
    <h2
      className={
        style === "gradient"
          ? "text-transparent uppercase font-normal text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-400 to-pink-900 drop-shadow-xl shadow-black"
          : "uppercase text-gray-500 text-lg md:text-xl lg:text-2xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
