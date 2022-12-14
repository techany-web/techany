import React from "react";
import TitlePink from "../Atoms/TitlePink";
import Title from "../Atoms/Title";
import PrimaryButton from "../Atoms/PrimaryButton";

function BannerResume() {
  return (
    <section
      id="talent"
      className="py-20 md:py-40  w-full snap-center mx-auto px-10
      flex flex-col items-center justify-center text-center border-b-4 bg-techany-100"
    >
      <span className=" font-bold text-3xl">
        <Title title="Create Your Resume" style=""></Title>
      </span>
      <Title title="Get headhunted on your terms" style="gradient" />
      <div className="pt-10 max-w-7xl py-5">
        <img
          alt="Choose Your Template"
          src={"/images/banner-create-your-resume.webp"}
        />
      </div>

      <div className="flex space-x-10">
        <PrimaryButton title="Login" style="" url="#" />
        <PrimaryButton title="Create a Resume" style="primary" url="#" />
      </div>
    </section>
  );
}

export default BannerResume;
