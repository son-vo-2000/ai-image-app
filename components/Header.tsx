import React from "react";
import logo from "../public/hand.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white  w-full">
      <nav className="flex mx-auto max-w-screen-xl justify-between py-3 px-4">
        <div className="w-11 h-11">
          <Image src={logo} alt="img" />
        </div>

        <Link
          href="/dashboard"
          className="hover:bg-[#43344b] bg-[#584364] px-4 py-2 rounded-lg text-white flex items-center"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default Header;
