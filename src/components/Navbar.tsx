"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["Home", "Gift", "Order", "Pay", "Store"];

const Navbar = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <nav className="bg-white shadow-lg h-24 w-screen">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex gap-3 items-center">
              <Image
                src="/sb.png"
                alt="Starbucks Logo"
                width={44}
                height={44}
                className=" rounded-full object-contain"
              />
              {/* <span className="text-xl font-semibold">Starbucks</span> */}
            </div>

            {/* Navigation links */}

            <ul className="flex space-x-6 text-black">
              {navLinks.map((navLink, index) => (
                <li
                  className="relative transition-all duration-300"
                  key={index}
                  onMouseOver={() => setActive(index)}
                >
                  <Link
                    href="/"
                    className="text-gray-700  hover:text-gray-900 transition-all duration-300"
                  >
                    {navLink}
                  </Link>
                  {active === index && (
                    <div className="absolute w-10  rounded-lg h-[3.5px] bg-green-900 bottom-[-1]"></div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <div className="flex gap-1 items-center border-2 botder-gray-200 px-2 py-1 rounded-full">
                <label htmlFor="search"></label>
                <AiOutlineSearch />
                <input
                  type="text"
                  name="search"
                  placeholder="Looking for something ... "
                  className=" outline-none "
                />
              </div>
              <CgProfile size={28}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
