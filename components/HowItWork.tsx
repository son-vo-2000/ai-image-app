import React from "react";
import Image from "next/image";
import image1 from "../public/chatbot.png";
import image2 from "../public/photo-gallery.png";
import image3 from "../public/images.png";
const HowItWork = () => {
  return (
    <section className="max-w-[1260px] m-auto sm:py-20 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:gap-12 gap-6">
        <h1 className="text-2xl sm:text-4xl font-semibold ">How it works?</h1>
        <ul className="flex flex-col justify-between gap-16 sm:gap-6 sm:flex-row">
          <li className="flex flex-col items-center  gap-3 sm:w-1/4 p-2">
            <Image className="w-28" src={image1} alt="image-text" />
            <h3 className="font-bold text-xl">Enter your text</h3>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              expedita!adipisicing Dolore, elit.
            </p>
          </li>
          <li className="flex flex-col items-center gap-3 sm:w-1/4 p-2">
            <Image className="w-28" src={image2} alt="image-number" />
            <h3 className="font-bold text-xl">Select the number of photo</h3>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li className="flex flex-col items-center gap-3 sm:w-1/4 p-2">
            <Image className="w-28" src={image3} alt="image-resolution" />
            <h3 className="font-bold text-xl">Select the resolution</h3>
            <p className="text-center">
              Lorem ipsum dolor, ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Dolore,
              expedita!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWork;
