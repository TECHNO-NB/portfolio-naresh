"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import resume from "@/image/new resume_page-0001.jpg"

export function BackgroundGradientDemo() {
  const openResume = (imagePath: string) => {
    // Open image in new tab using a static path from the public folder
    window.open(imagePath, "_blank");
  };

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] h-full w-fit flex items-center justify-center  p-2 sm:p-2 bg-white dark:bg-zinc-900">
        <Image
          onClick={() => openResume("/new resume_page-0001.jpg")} // Use public folder path
          src={resume} // Serve the image from the public folder
          alt="resume"
          height={1000}
          width={1000}
          className="rounded-[22px] cursor-pointer"
        />
      </BackgroundGradient>
    </div>
  );
}
