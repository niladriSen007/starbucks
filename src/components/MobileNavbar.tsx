import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = ["Home", "Gift", "Order", "Pay", "Store"];

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 w-screen bg-white  z-50">
      <div className="flex items-center bg-white justify-between px-6 py-2">
        <Link href={"/"}>
          <Image
            src="/sb.png"
            alt="Starbucks Logo"
            width={40}
            height={36}
            className=" rounded-full object-contain"
          />
        </Link>
        {showMenu ? (
          <p
            className="text-xl font-extrabold text-green-900 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            X
          </p>
        ) : (
          <GiHamburgerMenu
            className=" cursor-pointer"
            size={24}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
      <div className={`absolute bg-white z-50 transition-all duration-400 mobileNav ${showMenu ? "showMobileNav" : "hideMobileNav"}`}>
        <ul className="flex flex-col gap-3 text-black w-screen h-[80vh] items-center justify-center">
          {navLinks.map((navLink, index) => (
            <li className="" key={index}>
              <Link
                href="/"
                className="text-green-700  hover:text-green-900 text-3xl font-semibold text-center transition-all duration-300"
              >
                {navLink}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
