"use client";
import { signOut } from "next-auth/react";
import React from "react";
import {
  HomeIcon,
  LibraryIcon,
  LogoutIcon,
  RadioIcon,
  UserIcon,
  VideoIcon,
} from "./Icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[98px] bg-transparent hidden md:flex gap-y-[20px] flex-col items-center h-screen ">
      <div className="flex bg-[#1a1e1f] justify-between items-center py-6 flex-col w-[52px] h-[230px] rounded-[32px] ">
        <Link href={"/"}>
          <HomeIcon />
        </Link>
        <Link href={"/"}>
          <LibraryIcon />
        </Link>
        <Link href={"/"}>
          <RadioIcon />
        </Link>
        <Link href={"/"}>
          <VideoIcon />
        </Link>
      </div>
      <div className="flex bg-[#1a1e1f] justify-between items-center py-6 flex-col w-[52px] h-[127px] rounded-[32px]  ">
        <Link href={"/"}>
          <VideoIcon />
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            signOut();
          }}
          aria-label="logout"
        >
          <RadioIcon />
        </div>
      </div>
      {/* <div className="flex flex-col w-[52px] h-[127px] rounded-[32px]  "></div> */}
    </div>
  );
};

export default Sidebar;
