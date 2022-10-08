import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import ActionButton from "../Atoms/ActionButton";

function Navbar() {
  return (
    <nav
      className="grid grid-cols-12 z-50 order-last md:order-first flex-col absolute bottom-0 md:top-0 md:bottom-auto text-center col-span-12 w-full mx-auto p-5
    md:flex-row md:justify-around bg-white"
    >
      <div className="hidden md:inline col-span-2 my-5 cursor-pointer md:my-0">
        <Link href="/#top">
          <Image src={logo} alt="logo" width={194} height={50} />
        </Link>
      </div>
      <div
        className="flex items-center justify-evenly text-xs col-span-12 md:col-span-10
      md:space-x-3 md:justify-end md:items-center"
      >
        <span className=" md:hidden cursor-pointer">
          <Link href="/#top">
            <Image src={logo} alt="logo" width={117} height={30} />
          </Link>
        </span>
        <ActionButton title="Add Resume" style="" url="/#resume" />
        <ActionButton title="Contact" style="" url="/#contact" />

        <span className="hidden md:inline">
          <ActionButton title="Log in" style="primary" url="#" />
        </span>
        <span className="hidden md:inline">
          <ActionButton title="Add" style="primary" url="#" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
