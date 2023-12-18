import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/ai.png";

const Banner1 = () => {
  return (
    <div className="flex gap-11 md:gap-6 flex-col-reverse md:flex-row justify-center md:justify-between items-center h-full ">
      <div className="flex flex-col gap-6 sm:gap-8">
        <h1 className="text-xl sm:text-4xl md:text-6xl font-semibold md:w-[300px] ">
          LET'S EXPLORE{" "}
          <span className="bg-[#584364] text-white flex sm:my-3">UNIQUE</span>{" "}
          IMAGES
        </h1>
        <p className="max-w-screen-sm text-sm sm:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          laudantium debitis libero.
        </p>
        <div>
          <Link
            className="bg-[#584364] hover:bg-[#43344b] text-white px-4 py-3 sm:text-xl rounded-lg"
            href="/dashboard"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 flex items-center justify-center">
        <Image className="w-full h-full" src={logo} alt="banner" />
      </div>
    </div>
  );
};

export default Banner1;
