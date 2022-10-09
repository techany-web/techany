import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";
import TitleWhites from "../Atoms/TitleWhites";

function ContactForm() {
  return (
    <section
      id="contact"
      className=" text-white content-center col-span-12 h-screen w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center
      bg-gradient-to-r from-gray-900 to-fuchsia-900"
    >
      <TitleWhites title="Contact us" style="gradient" />
      <form className=" max-w-7xl m-10 grid grid-cols-1 space-y-2">
        <label className="block">
          <input
            className=" text-gray-600 rounded-full p-3 w-60 focus-within:w-72 duration-500 ease-in-out"
            placeholder="Your Full Name"
          />
        </label>
        <label className="block">
          <input
            className=" text-gray-600 rounded-full p-3 w-60 focus-within:w-72 duration-500 ease-in-out valid:border-green-300 invalid:border-red-300 "
            placeholder="Your Email Address"
            type="email"
          />
        </label>
        <label className="block">
          <textarea
            className=" text-gray-600 rounded-2xl p-3 w-60 h-60 focus-within:h-72 duration-500 ease-in-out valid:border-green-300 invalid:border-red-300 "
            placeholder="YWhat's your message to us ?"
          />
        </label>
        <PrimaryButton title="Send Now" style="" url="#" />
      </form>
    </section>
  );
}

export default ContactForm;
