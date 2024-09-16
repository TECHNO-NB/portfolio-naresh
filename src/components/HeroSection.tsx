import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div className="w-[100vw] h-[70vh] md:w-[60vw] px-2 flex flex-col items-center">
      <Spotlight />
      <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 font-bold to-neutral-400 md:text-7xl">
        Hello there!!
      </h1>
      <p className="mt-4 text-center text-[1rem] p md:text-2xl">
        I am Naresh, a 2024 undergrad and I am quite confident in Full Stack
        Development. I have about 4 years of experience with MERN Stack, Django,
        NextJS, Tailwind and a lot more... Currently, I am doing Open-Source
        Contributions. (Would you like to learn more about me??)
      </p>
      <div className="mt-6 text-center flex justify-center items-center">
        {" "}
        <HoverBorderGradient />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
