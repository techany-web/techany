import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { TitleBold } from "../Atoms/TitleBold";
import Header from "../components/Header";
import Title from "../Atoms/Title";
import TitleRose from "../Atoms/TitleRose";
import TitleWhites from "../Atoms/TitleWhites";
import TitlePurple from "../Atoms/TitlePurple";
import TitlePink from "../Atoms/TitlePink";
import { lazy } from "react";
import PrimaryButton from "../Atoms/PrimaryButton";

const Home: NextPage = () => {
  return (
    <div
      className="grid grid-cols-12 w-full mx-auto  h-screen 
      items-center justify-center text-center 
    snap-y snap-proximity overflow-scroll z-0  scrollbar-hide"
    >
      <div id="top"></div>
      <Header />

      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* main */}
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

      <section
        id="contact"
        className=" col-span-12 h-screen w-full snap-center mx-auto
      flex flex-col items-center justify-center text-center
      bg-gradient-to-r from-gray-900 to-fuchsia-900"
      >
        <TitleWhites title="Contact us" style="gradient" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
