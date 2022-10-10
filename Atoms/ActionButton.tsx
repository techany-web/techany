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
              ? " text-techany-200 text-xs px-5 uppercase font-medium rounded-full hover:text-techany-50  md:font-medium md:rounded-full duration-500 md:text-sm md:text-white md:bg-techany-300 md:hover:text-techany-700 md:hover:bg-techany-50 md:px-5 md:py-2"
              : "bg-white text-techany-400 text-xs px-2 py-2 uppercase font-medium rounded-full hover:text-techany-500 hover:bg-techany-50 duration-500 md:text-sm"
          }
        >
          {title}
        </button>
      </a>
    </>
  );
}
