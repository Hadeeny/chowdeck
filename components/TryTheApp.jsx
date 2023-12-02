"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import vec1 from "@/assets/vec1.webp";
import vec2 from "@/assets/vec2.webp";
import vec3 from "@/assets/vec4.webp";
import bigphone from "@/assets/bigphone.png";
import pastry from "@/assets/icons/Pastry.svg";
import iphone from "@/assets/icons/whiteapple.svg";
import playstore from "@/assets/icons/playstore.svg";
import pinkmultistars from "@/assets/icons/pinkmultistars.svg";
import bluestar from "@/assets/icons/bluestar.svg";
import greensemicircle from "@/assets/icons/greensemicircle.svg";
import leftarr from "@/assets/icons/leftarr.svg";
import downarr from "@/assets/icons/downarr.svg";
import { motion } from "framer-motion";

const joinsec = [
  {
    image: vec1,
    icon: pinkmultistars,
    title: "Start selling",
    text: "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
  },
  {
    image: vec2,
    icon: greensemicircle,
    title: "Deliver happiness",
    text: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
  },
  {
    image: vec3,
    icon: bluestar,
    title: "Behind the scenes",
    text: "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
  },
];

const TryTheApp = () => {
  return (
    <div className="overflow-hidden px-4 md:px-8">
      <ul className="bg-chow-primary text-lg rounded-full gap-x-2 p-1 flex items-center max-w-min mx-auto mt-12">
        <li className="px-4 bg-[#ffc501] rounded-full py-2">Customer</li>
        <li className="px-4 rounded-full py-2">Vendor</li>
        <li className="px-4 rounded-full py-2">Rider</li>
      </ul>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">Try the App</h2>
        <p className="max-w-md text-base my-8 mx-auto">
          Have meals delivered to you within minutes from a wide variety of
          restaurants ranging from African to Continental cuisines to satisfy
          your cravings.
        </p>

        <div className="flex my-8 gap-x-6 max-w-min mx-auto">
          <div className=" bg-chow-green flex items-center justify-center w-12 h-12 rounded-full">
            <Image className="w-5 h-5" src={playstore} alt="playstore" />
          </div>
          <div className=" bg-chow-green flex items-center justify-center w-12 h-12 rounded-full">
            <Image className="w-5 h-5" src={iphone} alt="iphone" />
          </div>
        </div>
        <br />
        <div className="md:w-[25rem] w-2/3 relative mx-auto">
          <Image className="w-full h-full" src={bigphone} />
          <Image
            className="w-1/3 h-full -top-[15rem] md:-top-[23rem] -right-9 absolute"
            src={pastry}
          />
        </div>
      </div>

      <div>
        <div className=" flex justify-center gap-x-1 md:gap-x-2 items-center   my-14  font-semibold">
          <h2 className="md:text-7xl text-[28px] text-slate-300">
            Join our growing network
          </h2>
          <Image src={downarr} alt="arrow" className="w-[2rem] md:w-[4rem]" />
        </div>
        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-8 gap-4 items-center">
          {joinsec.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: i * 0.6 }}
              viewport={{ once: true }}
              key={i}
              className="border-[4px] rounded-3xl border-black"
            >
              <div className="pl-4 pt-8 pb-2">
                <Image className="w-[2rem]" src={item.icon} />
              </div>
              <div className="px-4 pb-8 flex gap-y-8 items-start flex-col">
                <p className="font-bold text-3xl">{item.title}</p>
                <p className="text-lg text-left">{item.text}</p>
                <Link
                  className="flex uppercase tracking-[3px] font-bold items-center gap-x-3"
                  href="/"
                >
                  See more{" "}
                  <Image className="rotate-180" src={leftarr} alt="arrow" />
                </Link>
              </div>
              <div>
                <Image src={item.image} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TryTheApp;
