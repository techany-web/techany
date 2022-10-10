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
              ? "bg-green-500 text-white text-lg px-3 py-1 my-1 rounded-full hover:bg-green-900 duration-500 md:font-bold md:rounded-full md:uppercase md:mt-2 md:px-8 md:py-3"
              : "bg-techany-300 text-white text-lg px-3 py-1 my-1 rounded-full hover:bg-techany-900 duration-500 md:font-bold md:rounded-full md:uppercase md:mt-2 md:px-8 md:py-3"
          }
        >
          {title}
        </button>
      </a>
    </>
  );
}
