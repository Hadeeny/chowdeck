import React from "react";
import { HomeIcon, LibraryIcon, RadioIcon, VideoIcon } from "./Icons";
import Link from "next/link";

const MobileMenu = ({ open }) => {
  return (
    <div
      className={`fixed flex z-[100] duration-500 w-full ${
        open ? "h-screen" : "h-0"
      } inset-0 bg-black`}
    >
      <ul
        className={`mt-28 px-10 text-[17px] flex flex-col gap-y-14 opacity-0 ${
          open && "opacity-100"
        }`}
      >
        <Link href={"/"} className="flex items-center gap-x-8">
          <HomeIcon />
          <div>Home</div>
        </Link>
        <Link href={"/"} className="flex items-center gap-x-8">
          <LibraryIcon />
          <div>Collection</div>
        </Link>
        <Link href={"/"} className="flex items-center gap-x-8">
          <RadioIcon />
          <div>Radio</div>
        </Link>
        <Link href={"/"} className="flex items-center gap-x-8">
          <VideoIcon />
          <div>Video</div>
        </Link>

        <Link href={"/"} className="flex items-center gap-x-8">
          <RadioIcon />
          <div>Radio</div>
        </Link>
        <Link href={"/"} className="flex items-center gap-x-8">
          <VideoIcon />
          <div>Video</div>
        </Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
