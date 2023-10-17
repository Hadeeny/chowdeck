"use client";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import rema from "../assets/album1.png";
import ChowLottie from "@/assets/lottie.json";
import { useLottie } from "lottie-react";
const Hero = () => {
  const options = {
    animationData: ChowLottie,
    loop: true,
  };
  //  map is cb6a24ebd6ce729c

  const { View } = useLottie(options);

  return (
    <div className="w-screen overflow-hidden flex flex-col justify-end h-1/2 md:h-[50rem]  -z-0 bg-chow-primary ">
      <h2 className="text-[8rem] bottom-0 font-extrabold text-center py-8">
        Have you eaten
      </h2>
      <div>{View}</div>
    </div>
  );
};

export default Hero;
