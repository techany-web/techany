import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import ActionButton from "../Atoms/ActionButton";
import MenuItem from "../Atoms/MenuItem";
import PrimaryButton from "../Atoms/PrimaryButton";

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
        className="flex mx-auto w-full justify-around space-x-0 text-xs col-span-12 divide-x-2 divide-techany-50 place-items-center
      md:space-x-3 md:justify-end md:items-center md:col-span-10 md:divide-x-0 md:max-w-7xl"
      >
        {/* <span className=" md:hidden cursor-pointer">
          <Link href="#">
            <Image src={logo} alt="logo" width={78} height={20} />
          </Link>
        </span> */}
        <div className="text-center w-full md:w-auto py-5 hover:bg-techany-50 hover:opacity-60 md:hover:bg-inherit md:hidden cursor-pointer">
          <Link href="#" className=" cursor-pointer">
            <Image src={logo} width={80} height={25} />
          </Link>
        </div>
        <div className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit ">
          <ActionButton title="Talent" style="primary" url="/#talent" />
        </div>
        <div className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit ">
          <ActionButton title="Companies" style="primary" url="/#companies" />
        </div>
        <div className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit hidden md:inline order-first ">
          <MenuItem title="Home" style="primary" url="#" />
        </div>
        <div className="text-center w-full md:w-auto py-5 hover:bg-techany-800 md:hover:bg-inherit hidden md:inline order-first ">
          <MenuItem title="Contact" style="primary" url="/#contact" />
        </div>

        <div className="text-center w-full py-5 hover:bg-techany-800 md:hidden ">
          <ActionButton title="Contact" style="primary" url="/#contact" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
