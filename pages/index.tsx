import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import BannerResume from "../components/BannerResume";
import Blog from "../Organisms/Blog";

const Home: NextPage = () => {
  return (
    <div className="w-full bg-local z-0  scrollbar-hide">
      <div id="top"></div>
      {/* Header */}
      <Header />

      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Resume */}
      <BannerResume />

      {/* Blog */}
      <Blog />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
