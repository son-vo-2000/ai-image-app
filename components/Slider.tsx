"use client";
import { useEffect, useState } from "react";
import React from "react";
import "../styles/index.css";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
type slideProps = {
  slides: React.JSX.Element[];
};

const Slider = ({ slides }: slideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlidePlaying, setIsSlidePlaying] = useState(true);
  
  useEffect(() => {
    if (!isSlidePlaying) {
      return;
    }
    const timeId = setInterval(() => {
      if (currentSlide >= slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(timeId);
  }, [currentSlide, isSlidePlaying]);
  

  return (
    <div className="w-full h-[100%]">
      <ul className=" w-full h-[90%] relative">
        {slides.map((el, index) => (
          <li
            key={index}
            className={`h-full mb-10 slide ${
              index == currentSlide ? "active-slide" : "not-active-slide"
            }`}
          >
            {el}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-4">
        <div
          className="cursor-pointer"
          onClick={() => setIsSlidePlaying(!isSlidePlaying)}
        >
          {isSlidePlaying ? <CiPause1 /> : <CiPlay1 />}
        </div>
        {slides.map((el, index) => (
          <span
            key={index}
            className={`circle ${
              currentSlide == index ? "selected-indicate" : ""
            } `}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
