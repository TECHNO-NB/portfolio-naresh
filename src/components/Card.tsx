'use client';

import { HoverEffect } from "./ui/card-hover-effect";
import pic1 from "@/image/amazon-clone.webp";
import pic2 from "@/image/amazon-clone.webp";
import pic3 from "@/image/dalle-clone.webp";
import pic4 from "@/image/dalle-clone.webp";
import pic5 from "@/image/spotify-clone.webp";
import pic6 from "@/image/discord-clone.webp";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: pic1,  // Properly imported image
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: pic2,  // Properly imported image
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: pic3,  // Properly imported image
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: pic4,  // Properly imported image
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: pic5,  // Properly imported image
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    image: pic6,  // Properly imported image
  },
];
