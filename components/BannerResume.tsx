import React from "react";
import Image from "next/image";
import { TitleBold } from "../Atoms/TitleBold";
import TitlePurple from "../Atoms/TitlePurple";
import PrimaryButton from "../Atoms/PrimaryButton";

function BannerResume() {
  return (
    <section
      id="resume"
      className=" col-span-12 h-screen w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center bg-gray-900"
    >
      <TitleBold>Create Your Resume</TitleBold>
      <TitlePurple title="Choose a template" style="gradient" />
      <div className="pt-10 w-[920px]">
        <Image
          alt="Choose Your Template"
          src="/images/banner-create-your-resume.webp"
          layout="responsive"
          objectFit="contain"
          width="1920"
          height="760"
        />
      </div>
      <PrimaryButton title="Create Now" style="primary" url="#" />
    </section>
  );
}

export default BannerResume;
