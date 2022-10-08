import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

function Footer() {
  return (
    <footer className="hidden snap-end md:flex col-span-12 max-w-7xl mx-auto py-20 content-center text-center items-center align-middle">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className="">
          <Image src={logo} alt="Vercel Logo" width={100} height={18} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
