// "use client";
// import React, { useState } from "react";
import Link from "next/link";
import { MusicaIcon, SearchIcon } from "./Icons";
// import MobileMenu from "./MobileMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import ClientHeader from "./ClientHeader";

const Header = () => {
  return (
    <div className="flex w-full z-[200] px-8 justify-between items-center font-semibold fixed top-10 inset-x-0">
      <div className="px-6 shadow-xl py-3 rounded-full bg-[#0c513f] text-white">
        Chowdeck
      </div>
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
        <div className="bg-white px-6 shadow-xl rounded-full gap-x-4 text-lg py-3">
          C
        </div>
      </div>
    </div>
  );
};

export default Header;
