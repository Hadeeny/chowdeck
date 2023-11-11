import Image from "next/image";
import React from "react";
import pre1 from "@/assets/icons/footer1.svg";
import pack from "@/assets/icons/Pack.svg";
import playstore from "@/assets/icons/playstore.svg";
import blackapple from "@/assets/icons/blackapple.svg";
import Link from "next/link";
import pre2 from "@/assets/footer2.webp";
import Faqs from "./Faqs";
import Promocode from "@/assets/icons/Promo-code.svg";
import star1 from "@/assets/icons/icon2.svg";
import star2 from "@/assets/icons/icon3.svg";
import star3 from "@/assets/icons/icon6.svg";
import arrow from "@/assets/icons/rightbluearrow.svg";
import brownstar from "@/assets/icons/brownstar.svg";

const Prefooter = () => {
  return (
    <div className="bg-[#000000ff] mt-[15rem] pt-2 px-3 md:px-6">
      <Faqs />
      <div className=" flex flex-col md:flex-row gap-4 text-white pb-[2rem] pt-[8rem] ">
        <div className="w-full bg-chow-green relative rounded-xl pt-[2rem] md:px-6 px-4 md:w-1/2">
          <div className="space-y-4 md:space-y-12">
            <p className="font-bold md:leading-[4.2rem] leading-[2.3rem] text-[2.4rem] md:text-[4rem]">
              Place your <br />
              order in seconds
            </p>
            <div className="flex md:flex-col gap-2">
              <Link
                className="md:w-[16rem] w-[3rem] gap-x-2 h-[3rem] md:h-[2.5rem] text-lg flex justify-center items-center md:rounded-lg rounded-full bg-white text-black"
                href={"/"}
              >
                <Image className="w-5 h-5" src={playstore} alt="play store" />
                <p className="hidden md:block">Download on Google Play</p>
              </Link>
              <Link
                className="md:w-[16rem] w-[3rem] gap-x-2 h-[3rem] md:h-[2.5rem] text-lg flex justify-center items-center rounded-full md:rounded-lg bg-white text-black"
                href={"/"}
              >
                <Image className="w-5 h-5" src={blackapple} alt="apple store" />
                <p className="hidden md:block">Download on App Store</p>
              </Link>
            </div>
          </div>
          <div className="flex pb-2 justify-between items-end">
            <div className="pb-4">
              <div>
                <Image
                  src={Promocode}
                  className="w-24 h-24 md:w-auto"
                  alt="promo code"
                />
              </div>
              <div className="w-[10rem]  border-[3px] border-black h-[3.5rem] text-black font-semibold flex justify-center items-center rounded-xl bg-[#ffc501ff]">
                <div className="w-4 h-4 rounded-full border-black border-[3px] bg-chow-green mr-2" />
                CDNWEB
              </div>
              <p className="text-base md:text-lg">
                Get <span className="text-[#ffc501ff] font-bold">₦300 off</span>{" "}
                your first order when you use this promo code!
              </p>
            </div>
            <div className="w-[13rem] md:w-[18rem]">
              <Image className="w-full h-full" alt="footer" src={pre1} />
            </div>
          </div>
        </div>
        <div className="full hidden md:block md:w-1/2">
          <Image className="w-full h-full" src={pre2} />
        </div>
      </div>
      <div className="text-white gap-x-4 flex items-center">
        <Image alt="star" className="w-10 h-10" src={brownstar} />
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
        <button className="border-l-[1px] py-7 w-[23.5%] flex items-center justify-center text-slate-600 border-slate-600">
          <Image src={arrow} alt="arrow" className="w-10 h-10" />
        </button>
      </form>
    </div>
  );
};

export default Prefooter;
