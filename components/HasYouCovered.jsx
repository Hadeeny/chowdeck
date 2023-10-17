import React from "react";
import InfiniteMarquee from "./InfiiniteMarquee";
import InfiniteImage from "./InfiniteImage";
import path from "@/assets/icons/svgpath.svg";
import Image from "next/image";

const HasYouCovered = () => {
  return (
    <div className="bg-chow-green md:pt-[52rem] pt-[20rem]  w-full pb-[4rem]">
      <div className=" px-4 md:px-8 items-center flex md:flex-row flex-col  justify-between">
        <p className="text-[32px] md:text-[64px] leading-[-2px] md:leading-[80px] text-white font-bold max-w-md">
          Chowdeck has you covered
        </p>
        <p className="text-[1.5rem] md:leading-[2rem] max-w-xl text-white ">
          Hungry? Too tired to cook? Have friends over, or do you simply need to
          chop life? Download Chowdeck, and let’s deliver happiness to your
          doorstep in minutes.
        </p>
      </div>
      <InfiniteMarquee />
      <InfiniteImage />
    </div>
  );
};

export default HasYouCovered;
