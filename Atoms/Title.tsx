import { type } from "os";
import React from "react";

type TitleType = {
  title?: string;
  style?: string;
};

export default function Title({ title, style }: TitleType) {
  return (
    <h2
      className={
        style === "gradient"
          ? "whitespace-nowrap text-transparent uppercase text-left font-normal text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-900 drop-shadow-xl shadow-black"
          : "uppercase text-gray-500 text-left text-lg md:text-xl lg:text-2xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
