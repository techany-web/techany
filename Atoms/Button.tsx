import React from "react";

const Button = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <button
      className="bg-white text-black px-5 py-2 rounded-full 
      hover:bg-rose-500 duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
