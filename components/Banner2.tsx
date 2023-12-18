import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/data-analysis.png";

const Banner2 = () => {
  return (
    <div className="flex gap-11 md:gap-6 flex-col-reverse md:flex-row-reverse justify-center md:justify-between items-center h-full">
      <div className="flex flex-col gap-6 sm:gap-8">
        <h1 className="text-xl sm:text-5xl font-semibold md:w-3/4 ">
          Artificial Intelligence Power
        </h1>
        <p className="max-w-screen-sm text-sm sm:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          laudantium debitis libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          laudantium debitis libero.
        </p>
        <div>
          <Link
            className="bg-[#584364] hover:bg-[#43344b] text-white px-4 py-2 rounded-lg"
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

export default Banner2;
