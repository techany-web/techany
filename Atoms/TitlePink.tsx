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
          ? "text-transparent uppercase text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-pink-100 to-pink-500 drop-shadow-xl shadow-black"
          : "uppercase text-pink-500 text-xl md:text-2xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
