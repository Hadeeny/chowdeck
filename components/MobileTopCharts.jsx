"use client";
import React from "react";
import cover1 from "../assets/cover1.png";
import Image from "next/image";
import { OutlineLikeIcon } from "./Icons";
import useChartQueries from "@/hooks/useChartQueries";

const MobileTopCharts = () => {
  const [queryResults] = useChartQueries();
  return (
    <div className="overflow-x-hidden md:hidden block w-[90vw] mt-10">
      <ul className="grid w-full grid-flow-col px-4 scroll-auto gap-4 overflow-y-auto overflow-x-scroll overscroll-x-contain">
        <li className="w-[323px] p-4 flex justify-between rounded-[20px] h-[233px] bg-red-[#1a1e1f] ">
          <div className="flex flex-col justify-between">
            <div className="w-[108px] h-[99px] rounded-lg">
              <Image
                className="w-full h-full object-contain"
                src={cover1}
                alt="album"
              />
            </div>
            <p>Golden Age of 80s</p>
            <p>Sean Swadder</p>
            <p>2:34:45</p>
          </div>
          <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
            <OutlineLikeIcon />
          </div>
        </li>
        <li className="w-[323px] rounded-[20px] h-[233px] bg-blue-400 "></li>
        <li className="w-[323px] rounded-[20px] h-[233px] bg-green-400 "></li>
      </ul>
    </div>
  );
};

export default MobileTopCharts;
