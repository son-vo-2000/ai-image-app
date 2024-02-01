import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Questions from "@/components/Questions";
const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowItWork />
      <Reviews/>
      <Questions/>
      <Footer />
    </>
  );
};

export default HomePage;
