import { type } from "os";
import React from "react";

type TitleType = {
  title: string;
  style?: string;
};

export default function TitleWhites({ title, style }: TitleType) {
  return (
    <h2
      className={
        style === "gradient"
          ? "text-transparent uppercase font-normal text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-xl shadow-black"
          : "uppercase text-gray-500 text-lg md:text-xl lg:text-2xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
