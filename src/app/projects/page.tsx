import { CardHoverEffectDemo } from "@/components/Card";
import Footer from "@/components/Footer";

import React from "react";

const page: React.FC = () => {
  return (
    <div className="h-screen mt-36 bg-black/[0.96] antialiased bg-grid-white/[0.02]  justify-center  text-center items-center">
      <h1 className="text-2xl font-bold">Projects:</h1>
      <CardHoverEffectDemo />
    </div>
  );
};

export default page;
