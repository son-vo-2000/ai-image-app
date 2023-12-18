import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Slider from "./Slider";

const Hero = () => {
  const slides = [<Banner1 />, <Banner2 />];
  return (
    <section className=" h-[600px] mx-auto max-w-screen-xl p-4">
      <Slider slides={slides}/>
    </section>
  );
};

export default Hero;
