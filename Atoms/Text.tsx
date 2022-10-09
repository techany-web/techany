import React from "react";

type TitleType = {
  text?: string;
  textStyle?: string;
};

export default function Text({ text, textStyle }: TitleType) {
  return (
    <div
      className={
        textStyle === "normal"
          ? "text-sm text-techany-600"
          : "text-sm text-gray-500"
      }
    >
      {text}
    </div>
  );
}
