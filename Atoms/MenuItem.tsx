import React from "react";

type TitleType = {
  title: string;
  style?: string;
  url?: string;
};

export default function MenuItem({ title, style, url }: TitleType) {
  return (
    <>
      <a href={url}>
        <button
          className={
            style === "primary"
              ? " text-techany-200 text-sm px-5 py-2 uppercase font-medium rounded-full hover:text-techany-600  md:font-medium md:rounded-full duration-500"
              : "bg-white text-techany-400 text-xs px-2 py-2 uppercase font-medium rounded-full hover:text-techany-500 hover:bg-techany-50 duration-500 md:text-sm"
          }
        >
          {title}
        </button>
      </a>
    </>
  );
}
