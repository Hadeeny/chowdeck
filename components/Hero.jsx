"use client";
import { useState, useEffect } from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import rema from "../assets/album1.png";
import ChowLottie from "@/assets/lottie.json";
import { useLottie } from "lottie-react";
import Link from "next/link";
const Hero = () => {
  const options = {
    animationData: ChowLottie,
    loop: true,
  };
  //  map is cb6a24ebd6ce729c

  const { View } = useLottie(options);

  const [iterator, setIterator] = useState(0);

  const words = [
    "Have you eaten",
    "You don chow",
    "Se o ti jeun",
    "Kun cin abinci",
    "Iri ela nri",
  ];

  useEffect(
    (params) => {
      const switchItem = () => {
        if (iterator < words.length - 1) {
          setIterator(iterator + 1);
        } else setIterator(0);
      };
      setTimeout(() => {
        switchItem();
      }, 5000);
    },
    [iterator]
  );

  return (
    <div className="w-full relative h-[60vh] md:h-[60vh] md:overflow-hidden">
      <h2 className="text-5xl md:text-[7rem] tracking-tighter absolute inset-x-0 z-[10] top-[7rem] md:bottom-0 font-extrabold text-center py-8">
        {words[iterator]}?
      </h2>
      <div className="absolute mx-auto top-[14rem] md:top-[20rem] md:flex-row gap-4 flex flex-col items-start w-max inset-x-0  z-[10]">
        <Link
          className="bg-chow-green text-lg rounded-md px-6 py-2 text-white"
          href={"/"}
        >
          Download on playstore
        </Link>
        <Link
          className="bg-chow-green text-lg rounded-md px-6 py-2 text-white"
          href={"/"}
        >
          Download on playstore
        </Link>
      </div>
      <div className="scale-[3] md:scale-[1]">{View}</div>
    </div>
  );
};

export default Hero;
