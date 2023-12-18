import React from "react";
import Image from "next/image";
import { Logo, QMark } from "../assets";
export const Navbar = () => {
  return (
    <header className="w-full absolute z-10 border-b-2 border-gray-200">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:pr-16 pr-6 pl-5 py-4">
        <Image
          src={Logo}
          alt="craxino"
          className="object-contain w-[50%] sm:w-[30%] h-[40px] md:h-[50px]"
        />
        <Image
          src={QMark}
          alt="craxino"
          className="object-contain w-[9.5%] sm:w-[5%] h-[25px] md:h-[35px]"
        />
      </nav>
    </header>
  );
};
