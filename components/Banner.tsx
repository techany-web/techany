import React from "react";
import Title from "../Atoms/Title";
import Text from "../Atoms/Text";

function Banner() {
  return (
    <div
      id="home"
      className="grid py-20 px-10 h-[320px] md:h-[600px] md:mt-[110px] w-full space-y-5 mx-auto col-span-12 text-center place-content-center justify-items-center content-center
      snap-center bg-techany-50
      "
    >
      {/* question with 3 multiple choice radio buttons */}
      <div className="flex flex-col items-center text-white space-y-5">
        <Title title="What are you looking for?" style="gradient" />
        <Text
          text="Search for a Talent , Company or Skill that you are looking for in your upcoming project or company."
          textStyle=""
        />
      </div>

      {/* Boolean two buttons  */}

      <div className="">
        {/* search input full width */}
        <div className="flex justify-center">
          <div
            className="flex text-lg w-72 md:w-[360px]  duration-500 items-center p-2 space-x-2 bg-white rounded-full shadow-md
          focus-within:w-96 md:focus-within:w-[500px] focus-within:p-3 focus-within:shadow-2xl focus-within:shadow-techany-200  "
          >
            <input
              type="text"
              className="w-full px-2 py-1 text-techany-600 font-bold  bg-white rounded-full 
              focus:outline-none
              placeholder:font-bold placeholder:text-gray-300"
              placeholder="Search for a Skill / Job title"
            />
            <button
              className="p-1 bg-rose-200 rounded-full 
            hover:bg-rose-400 hover:shadow-sm hover:shadow-rose-900 duration-500 
            focus:outline-none focus:bg-rose-400 focus:text-white focus:ring-2 focus:ring-rose-500 focus:animated-ping focus:duration-100"
            >
              <svg
                className="w-5 h-5 text-white hover:text-white duration-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
