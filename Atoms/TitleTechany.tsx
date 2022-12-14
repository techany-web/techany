import { type } from "os";
import React from "react";

type TitleType = {
  title: string;
  style?: string;
};

export default function TitleTechany({ title, style }: TitleType) {
  return (
    <h2
      className={
        style === "gradient"
          ? "text-transparent uppercase font-bold text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-techany-300 to-techany-800 drop-shadow-xl shadow-black "
          : "uppercase text-techany-400 text-2xl md:text-5xl font-normal"
      }
    >
      {title}
    </h2>
  );
}
