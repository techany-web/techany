import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import BannerResume from "../components/BannerResume";

const Home: NextPage = () => {
  return (
    <div
      className="grid grid-cols-12 w-full mx-auto h-screen 
      items-center justify-center text-center
    snap-y snap-proximity overflow-scroll z-0  scrollbar-hide"
    >
      <div id="top"></div>
      {/* Header */}
      <Header />

      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Resume */}
      <BannerResume />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
