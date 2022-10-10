import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import ActionButton from "../Atoms/ActionButton";

function Navbar() {
  return (
    <nav
      className="grid grid-cols-12 bg-white z-50 flex-col text-center col-span-12 w-full mx-auto md:p-5
    md:flex-row md:justify-around md:shadow-sm md:shadow-techany-100 md:drop-shadow-sm"
    >
      <div className="hidden md:inline col-span-2 my-5 cursor-pointer md:my-0">
        <Link href="#">
          <Image src={logo} alt="logo" width={194} height={50} />
        </Link>
      </div>
      <div
        className="flex mx-auto w-full justify-around space-x-0 text-xs col-span-12 md:col-span-10 md:max-w-7xl divide-x-2 divide-techany-50 md:divide-x-0
      md:space-x-3 md:justify-end md:items-center"
      >
        {/* <span className=" md:hidden cursor-pointer">
          <Link href="#">
            <Image src={logo} alt="logo" width={78} height={20} />
          </Link>
        </span> */}

        <span className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit ">
          <ActionButton title="For Talent" style="primary" url="/#talent" />
        </span>
        <span className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit ">
          <ActionButton title="For Companies" style="primary" url="#" />
        </span>
        <span className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit md:hidden">
          <ActionButton title="Top" style="primary" url="#" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
