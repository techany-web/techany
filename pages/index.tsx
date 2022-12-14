import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import BannerResume from "../components/BannerResume";
import Blog from "../Organisms/Blog";
import Companies from "../Organisms/Companies";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />
      <div className="w-full z-50 fixed bottom-0 top-auto md:top-0 md:bottom-auto ">
        {/* navbar */}
        <Navbar />
      </div>

      <div className="w-full bg-local z-0  scrollbar-hide">
        <div id="top"></div>

        {/* Banner */}
        <Banner />

        {/* Resume */}
        <BannerResume />

        {/* Blog */}
        <Companies />

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
