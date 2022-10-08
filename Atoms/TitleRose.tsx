import { type } from "os";
import React from "react";

type TitleType = {
  title: string;
  style?: string;
};

export default function TitleRose({ title, style }: TitleType) {
  return (
    <h2
      className={
        style === "gradient"
          ? "text-transparent uppercase font-normal text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-rose-400 to-rose-900 drop-shadow-xl shadow-black"
          : "uppercase text-purple-500 text-lg md:text-xl lg:text-2xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
