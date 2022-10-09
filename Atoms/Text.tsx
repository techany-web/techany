import React from "react";

type TitleType = {
  text?: string;
  textStyle?: string;
};

export default function Text({ text, textStyle }: TitleType) {
  return (
    <p
      className={
        textStyle === "normal"
          ? "text-sm text-techany-600"
          : "text-sm text-gray-500"
      }
    >
      {text}
    </p>
  );
}
