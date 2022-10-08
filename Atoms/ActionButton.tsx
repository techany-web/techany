import React from "react";

type TitleType = {
  title: string;
  style?: string;
  url?: string;
};

export default function ActionButton({ title, style, url }: TitleType) {
  return (
    <>
      <a href={url}>
        <button
          className={
            style === "primary"
              ? "bg-rose-500 text-white text-sm px-5 py-2 rounded-full hover:bg-purple-900 duration-500 md:text-sm md:uppercase md:mx-2 md:bg-purple-500 md:hover:bg-purple-900"
              : "bg-white text-gray-400 text-sm px-5 py-2 uppercase font-medium rounded-full hover:text-purple-500 hover:bg-purple-100 duration-500 md:text-sm"
          }
        >
          {title}
        </button>
      </a>
    </>
  );
}