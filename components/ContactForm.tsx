import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";
import TitleTechany from "../Atoms/TitleTechany";

function ContactForm() {
  return (
    <section
      id="contact"
      className=" text-white content-center col-span-12 h-screen w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center
      bg-techany-50"
    >
      <TitleTechany title="Contact us" style="gradient" />
      <form className=" max-w-7xl m-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="block col-span-1">
          <label>
            <input
              className=" text-gray-600 rounded-full p-3 w-60 md:w-44 focus-within:shadow-techany-200 focus-within:shadow-lg focus-within:drop-shadow-xs duration-500 ease-in-out"
              placeholder="Your Full Name"
            />
          </label>
        </div>
        <div className="block col-span-1">
          <label>
            <input
              className=" text-gray-600 rounded-full p-3 w-60 md:w-44 focus-within:shadow-techany-200 focus-within:shadow-lg focus-within:drop-shadow-xs duration-500 ease-in-out valid:border-green-300 invalid:border-red-300 "
              placeholder="Your Email Address"
              type="email"
            />
          </label>
        </div>
        <div className="block col-span-1 md:col-span-2">
          <label>
            <textarea
              className=" text-gray-600 rounded-2xl p-3 w-60 md:w-96 h-60 focus-within:h-72 duration-500 ease-in-out  focus-within:shadow-techany-200 focus-within:shadow-lg focus-within:drop-shadow-xs  valid:border-green-300 invalid:border-red-300 "
              placeholder="Wrtie your message..."
            />
          </label>
        </div>

        <PrimaryButton title="Send Now" style="" url="#" />
      </form>
    </section>
  );
}

export default ContactForm;
