import React from "react";
import { TitleBold } from "../Atoms/TitleBold";
import TitlePurple from "../Atoms/TitlePurple";
import PrimaryButton from "../Atoms/PrimaryButton";

function BannerResume() {
  return (
    <section
      id="resume"
      className="py-20  w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center border-b-4 bg-techany-800"
    >
      <TitleBold>Create Your Resume</TitleBold>
      <TitlePurple title="Choose a template" style="gradient" />
      <div className="pt-10 max-w-7xl py-5">
        <img
          alt="Choose Your Template"
          src={"/images/banner-create-your-resume.webp"}
        />
      </div>
      <PrimaryButton title="Create Now" style="primary" url="#" />
    </section>
  );
}

export default BannerResume;
