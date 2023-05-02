"use client";
// import axios from "axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import cover1 from "../assets/cover1.png";
import { getCode } from "../app/page";

const TopCharts = () => {
  const searchParams = useSearchParams();
  const accessCode = searchParams.get("code");
  // getCode(accessCode);
  // const data = {
  //   accessCode,
  // };
  // const postCode = async () => {
  //   await axios.post("/api/accesscode/route", data);
  // };

  // postCode();

  return (
    <div className="hidden md:flex gap-y-4 flex-col">
      <h3 className="text-[24px]">Top Charts</h3>
      <div className="flex flex-col gap-y-3">
        {/* first chart */}
        <div className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 ">
          <div className="flex gap-x-4">
            <div>
              <Image src={cover1} alt="cover" />
            </div>
            <div>
              <p className="font-normal text-sm">Golden Age of 80s</p>
              <p className="text-[12px]">Sean Swadder</p>
              <p className="text-[12px]">2:42:34</p>
            </div>
          </div>
          <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
            <OutlineLikeIcon />
          </div>
        </div>
        {/* second chart */}
        <div className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 ">
          <div className="flex gap-x-4">
            <div>
              <Image src={cover1} alt="cover" />
            </div>
            <div>
              <p>Golden Age of 80s</p>
              <p>Sean Swadder</p>
              <p>2:42:34</p>
            </div>
          </div>
          <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
            <OutlineLikeIcon />
          </div>
        </div>
        {/* third chart */}
        <div className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 ">
          <div className="flex gap-x-4">
            <div>
              <Image src={cover1} alt="cover" />
            </div>
            <div>
              <p>Golden Age of 80s</p>
              <p>Sean Swadder</p>
              <p>2:42:34</p>
            </div>
          </div>
          <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
            <OutlineLikeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
