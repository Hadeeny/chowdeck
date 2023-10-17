import React from "react";
import alhaja from "@/assets/alhaja.png";
import laptopman from "@/assets/laptopman.png";
import groupie from "@/assets/group.png";
import baby from "@/assets/baby.png";
import Image from "next/image";

const InfiniteImage = () => {
  return (
    <div className="scroll-img">
      <div className="flex">
        <span className="md:w-[320px] w-[200px] ">
          <Image className="" src={laptopman} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px] translate-y-14">
          <Image className="w-full h-full" src={baby} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px]">
          <Image className="w-full h-full" src={alhaja} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px] translate-y-14">
          <Image className="w-full h-full" src={groupie} alt="man on laptop" />
        </span>
      </div>
      <div className="flex">
        <span className="md:w-[320px] w-[200px] ">
          <Image className="" src={laptopman} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px] translate-y-14">
          <Image className="w-full h-full" src={baby} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px]">
          <Image className="w-full h-full" src={alhaja} alt="man on laptop" />
        </span>
        <span className="md:w-[320px] w-[200px] translate-y-14">
          <Image className="w-full h-full" src={groupie} alt="man on laptop" />
        </span>
      </div>
    </div>
  );
};

export default InfiniteImage;
