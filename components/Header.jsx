// "use client";
// import React, { useState } from "react";
import Link from "next/link";
import { MusicaIcon, SearchIcon } from "./Icons";
// import MobileMenu from "./MobileMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import ClientHeader from "./ClientHeader";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Desktop */}
      {/* <div className="w-full bg-transparent relative px-[27px] justify-between md:justify-normal text-gray-500 items-center gap-x-[36.7px] mb-[23px] flex h-[73px]"> */}
      <ClientHeader session={session} />
      {/* </div> */}
    </>
  );
};

export default Header;
