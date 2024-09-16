import React from "react";
import Image from "next/image";

import insta from "@/image/insta.png";
import github from "@/image/github.png";
import email from "@/image/email.png";
import linkidin from "@/image/linkdin.png";

const Footer = () => {
  return (
    <div className="flex fixed   bottom-2 pb-2 z-40 h-10vh items-center justify-center w-full gap-6">
      <Image className=" cursor-pointer" height={40} src={email} alt="name" />
      <Image className=" cursor-pointer"  height={40} src={linkidin} alt="name" />
      <Image className=" cursor-pointer bg-white"  height={40} src={github} alt="name" />
      <Image className=" cursor-pointer"  height={40} src={insta} alt="name" />
    </div>
  );
};

export default Footer;
