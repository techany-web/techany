import React from "react";

export const TitleBold = (props: any) => {
  return (
    <h1 className="text-xl uppercase text-purple-900 font-extrabold md:text-3xl lg:text-4xl">
      {props.children}
    </h1>
  );
};
