
import { CardHoverEffectDemo } from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-fit mt-60 bg-black/[0.96]  antialiased bg-grid-white/[0.02] flex flex-col justify-center  text-center items-center md:mt-48">
     <HeroSection/>
     <h1 className="text-2xl mt-0 md:mt-4">Projects:</h1>
     <CardHoverEffectDemo/>
    </main>
  );
}
 