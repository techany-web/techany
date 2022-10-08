import React from "react";

const MenuItem = (props: any) => {
  return (
    <button
      className="bg-white text-gray-400 px-5 py-2 uppercase text-sm font-medium rounded-full 
      hover:text-purple-500 hover:bg-purple-100 duration-500
      md:text-sm"
    >
      {props.children}
    </button>
  );
};

export default MenuItem;
