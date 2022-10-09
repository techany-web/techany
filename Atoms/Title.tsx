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
          ? "text-transparent uppercase text-4xl bg-clip-text bg-gradient-to-r font-bold from-techany-200 to-techany-600 drop-shadow-xl shadow-black"
          : "uppercase text-techany-400 font-bold  text-left text-xl md:text-2xl"
      }
    >
      {title}
    </h2>
  );
}
