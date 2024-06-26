"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChowLottie from "@/assets/lottie.json";
import { useLottie } from "lottie-react";
import playstore from "../assets/icons/icon2.svg";
import whiteapple from "../assets/icons/whiteapple.svg";
import Link from "next/link";
import Image from "next/image";
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
    <div className="w-full relative mb-10 md:mb-auto h-[60vh] md:h-[60vh] md:overflow-hidden">
      <motion.h2
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="text-5xl md:text-[7rem] tracking-tighter absolute inset-x-0 z-[10] top-[8rem] md:bottom-0 font-extrabold text-center py-8"
      >
        {words[iterator]}?{/* <Image src={icon} /> */}
      </motion.h2>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="absolute mx-auto top-[14rem] md:top-[20rem] md:flex-row gap-4 flex flex-col items-start w-max inset-x-0  z-[10]"
      >
        <Link
          className="bg-chow-green flex gap-x-4 item-center text-lg rounded-md px-6 py-2 text-white"
          href={"/"}
        >
          <Image className="w-5 h-5 mt-1" src={playstore} alt="play store" />
          Download on playstore{" "}
        </Link>
        <Link
          className="bg-chow-green flex gap-x-4 item-center text-lg rounded-md px-6 py-2 text-white"
          href={"/"}
        >
          <Image className="w-5 h-5 mt-1" src={whiteapple} alt="appstore" />
          Download on appstore{" "}
        </Link>
        {/* <Link
          className="bg-chow-green text-lg rounded-md px-6 py-2 text-white"
          href={"/"}
        >
          Download on playstore
          <Image className="w-5 h-5 mt-1" src={whiteapple} alt="whiteapple" />
        </Link> */}
      </motion.div>
      <div className="scale-[3.1] md:scale-[1.1]">{View}</div>
    </div>
  );
};

export default Hero;
