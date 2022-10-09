import React from "react";
import Title from "../Atoms/Title";
import Text from "../Atoms/Text";

type TitleType = {
  title?: string;
  text?: string;
  style?: string;
  textStyle?: string;
};

function Paragraph({ title, text, style, textStyle }: TitleType) {
  return (
    <div className="text-left space-y-5">
      <Title title={title} style={style} />
      <Text text={text} textStyle={textStyle} />
    </div>
  );
}

export default Paragraph;
