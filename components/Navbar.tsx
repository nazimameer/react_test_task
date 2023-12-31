/**
 * Navbar component for the website header.
 * @module Components
 * @exports Navbar - The Navbar React component.
 */

import React from "react";
import Image from "next/image";
import { Logo, QMark } from "../assets";

/**
 * React component for the website header.
 * @function Navbar
 * @returns {JSX.Element} The JSX representation of the component.
 */
export const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="w-full absolute z-10 border-b-2 border-gray-200">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:pr-16 pr-6 pl-5 py-4">
        <Image
          src={Logo}
          alt="craxino"
          className="object-contain cursor-pointer w-[50%] sm:w-[30%] h-[40px] md:h-[50px]"
        />
        <Image
          src={QMark}
          alt="craxino"
          className="object-contain cursor-pointer w-[9.5%] sm:w-[5%] h-[25px] md:h-[35px]"
        />
      </nav>
    </header>
  );
};
