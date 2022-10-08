import React from "react";

type TitleType = {
  title: string;
  style?: string;
  url?: string;
};

export default function PrimaryButton({ title, style, url }: TitleType) {
  return (
    <>
      <a href={url}>
        <button
          className={
            style === "primary"
              ? "bg-green-500 text-white text-lg px-6 py-3 mt-6 rounded-full hover:bg-green-900 duration-500 md:text-2xl md:font-bold md:rounded-full md:uppercase md:mt-8 md:px-8 md:py-3 md:bg-green-500 md:hover:bg-green-900"
              : "bg-rose-500 text-white text-lg px-5 py-2 mt-6 rounded-full hover:bg-rose-900 duration-500 md:text-2xl md:font-bold md:rounded-full md:uppercase md:mt-8 md:px-8 md:py-3 md:bg-rose-500 md:hover:bg-rose-900"
          }
        >
          {title}
        </button>
      </a>
    </>
  );
}
