"use client";
// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import cart from "@/assets/icons/cart.svg";
import open from "@/assets/icons/open.svg";
import close from "@/assets/icons/close.svg";
import pack from "@/assets/icons/Pack.svg";
import pastry from "@/assets/icons/Pastry.svg";
import Fitfam from "@/assets/icons/Fitfam.svg";
import drink from "@/assets/icons/drink.svg";
import Fastfoodxsnacks from "@/assets/icons/Fastfoodxsnacks.svg";
import { useState } from "react";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const links = [
    { name: "Customers", path: "/", icon: pack },
    { name: "Vendors", path: "/", icon: pastry },
    { name: "Riders", path: "/", icon: Fastfoodxsnacks },
    { name: "Company", path: "/", icon: Fitfam },
    { name: "Blog", path: "/", icon: pastry },
    { name: "Contact", path: "/", icon: Fastfoodxsnacks },
    { name: "Twitter", path: "/", icon: pack },
    { name: "Instagram", path: "/", icon: pastry },
  ];
  return (
    <>
      <div className="flex w-full z-[200] px-4 justify-between items-center font-semibold fixed top-6 inset-x-0">
        <div className="md:px-6 p-4 flex items-center gap-x-2 shadow-xl md:py-3 rounded-full bg-[#0c513f] text-white">
          <Image
            className="w-[1.4rem] md:w-[1rem] md:mt-1"
            src={logo}
            alt="icon"
          />
          <span className="hidden md:block">Chowdeck</span>
        </div>
        {/* <div className="">
      </div> */}
        <ul className="hidden shadow-xl  md:flex absolute justify-between px-8 max-w-max inset-x-0 mx-auto items-center bg-white rounded-full gap-x-8 text-lg py-3">
          <li>Company</li>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-x-4">
          <div className="bg-white shadow-xl hidden md:block px-6 rounded-full gap-x-4 text-lg py-3">
            Customers
          </div>
          <div className="bg-white p-4 shadow-xl rounded-full">
            <Image src={cart} alt="cart" />
          </div>
          <div
            onClick={() => setIsOpened(!isOpened)}
            className="bg-chow-green md:hidden block cursor pointer p-4 shadow-xl rounded-full"
          >
            <Image className="w-[2rem]" src={open} alt="menu" />
          </div>
        </div>
      </div>
      {/* Mobile menu starts */}
      <div
        className={`bg-[#000000ff] translate-x-[-100%] fixed duration-300 ${
          isOpened && "translate-x-[0%]"
        }  inset-x-0 top-0 z-[1000] h-screen w-full`}
      >
        <div className="border-b border-white py-6 px-4">
          <div className="flex w-max ml-auto ">
            <div className="bg-white items-center flex p-2 shadow-xl rounded-full">
              <Image className="w-[2rem]" src={cart} alt="cart" />
            </div>
            <div
              onClick={() => setIsOpened(!isOpened)}
              className="bg-chow-green cursor pointer p-2 shadow-xl rounded-full"
            >
              <Image className="w-[2rem]" src={close} alt="menu" />
            </div>
          </div>
        </div>
        <ul>
          {links.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              onClick={() => setIsOpened(false)}
              className="text-white flex gap-x-4 px-10 py-7 border-b text-2xl font-semibold border-white"
            >
              <Image className="w-[2rem]" src={item.icon} alt="icon" />
              <span>{item.name}</span>
            </Link>
          ))}
        </ul>
        <p className="text-white relative top-10 text-center">
          Built with ❤ by Segun
        </p>
      </div>
    </>
  );
};

export default Header;
