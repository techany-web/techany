import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";
import TitleWhites from "../Atoms/TitleWhites";

function ContactForm() {
  return (
    <section
      id="contact"
      className=" text-white content-center col-span-12 h-screen w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center
      bg-techany-50"
    >
      <TitleWhites title="Contact us" style="gradient" />
      <form className=" max-w-7xl m-10 grid grid-cols-2 gap-8">
        <div className="block col-span-1">
          <label>
            <input
              className=" text-gray-600 rounded-full p-3 w-44 focus-within:w-72 duration-500 ease-in-out"
              placeholder="Your Full Name"
            />
          </label>
        </div>
        <div className="block col-span-1">
          <label>
            <input
              className=" text-gray-600 rounded-full p-3 w-44 focus-within:w-72 duration-500 ease-in-out valid:border-green-300 invalid:border-red-300 "
              placeholder="Your Email Address"
              type="email"
            />
          </label>
        </div>
        <div className="block col-span-2">
          <label>
            <textarea
              className=" text-gray-600 rounded-2xl p-3 w-96 h-60 focus-within:h-72 duration-500 ease-in-out valid:border-green-300 invalid:border-red-300 "
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
