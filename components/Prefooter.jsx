import Image from "next/image";
import React from "react";
import pre1 from "@/assets/icons/footer1.svg";
import pack from "@/assets/icons/Pack.svg";
import Link from "next/link";
import pre2 from "@/assets/footer2.webp";
import Faqs from "./Faqs";

const Prefooter = () => {
  return (
    <div className="bg-[#000000ff] mt-[15rem] pt-2 px-6">
      <Faqs />
      <div className=" flex flex-col md:flex-row gap-4 text-white pb-[2rem] pt-[8rem] ">
        <div className="w-full bg-chow-green relative rounded-xl pt-[2rem] px-6 md:w-1/2">
          <div className="space-y-4 md:space-y-12">
            <p className="font-bold md:leading-[4.2rem] leading-[2.3rem] text-[2.4rem] md:text-[4rem]">
              Place your <br />
              order in seconds
            </p>
            <div className="space-y-2">
              <Link
                className="w-[16rem] h-[2.5rem] text-lg flex justify-center items-center rounded-lg bg-white text-black"
                href={"/"}
              >
                Download on Google Play
              </Link>
              <Link
                className="w-[16rem] h-[2.5rem] text-lg flex justify-center items-center rounded-lg bg-white text-black"
                href={"/"}
              >
                Download on App Store
              </Link>
            </div>
          </div>
          <div className="flex pb-2 justify-between items-end">
            <div className="pb-4">
              <div className="w-[10rem]  border-[3px] border-black h-[3.5rem] text-black font-semibold flex justify-center items-center rounded-xl bg-[#ffc501ff]">
                <div className="w-4 h-4 rounded-full border-black border-[3px] bg-chow-green mr-2" />
                CDNWEB
              </div>
              <p>Get ₦300 off your first order when you use this promo code!</p>
            </div>
            <div className=" w-[18rem]">
              <Image className="w-full h-full" alt="footer" src={pre1} />
            </div>
          </div>
        </div>
        <div className="full hidden md:block md:w-1/2">
          <Image className="w-full h-full" src={pre2} />
        </div>
      </div>
      <div className="text-white gap-x-4 flex items-center">
        <p className="">star</p>
        <div className="block flex-1 grow md:flex gap-x-4 items-center">
          <p className="text-[2rem] md:text-[4rem] font-bold">
            Cool stuff only
          </p>
          <p className="text-[#ffedb3ff] md:text-lg md:mt-6">
            Subscribe to our newsletter
          </p>
        </div>
        <div className="hidden w-[8rem] md:block">
          <Image src={pack} alt="pack" />
        </div>
      </div>
      <form action="" className="w-full border-y-[1px] flex border-slate-600">
        <input
          className="outline-none text-slate-600 font-semibold text-xl py-7 
          bg-transparent w-[76.5%]"
          type="text"
          placeholder="yourname@email.com"
        />
        <button className="border-l-[1px] py-7 w-[23.5%] flex justify-center text-slate-600 border-slate-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Prefooter;
