"use client";
import { useRouter } from "next/navigation";

import { signIn, signOut } from "next-auth/react";

import React, { useState } from "react";
import Link from "next/link";
import { MusicaIcon, SearchIcon } from "./Icons";
import MobileMenu from "./MobileMenu";
const ClientHeader = ({ session }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  //   console.log();
  const getAccess = () => {
    router.push(
      `https://connect.deezer.com/oauth/auth.php?app_id=598584&redirect_uri=http://localhost:3000&perms=basic_access,email`
    );
  };

  return (
    <>
      <div
        className="w-full bg-[#1e1e1e] fixed z-[100] inset-0 px-[27px] justify-between md:justify-normal 
      text-gray-500 items-center gap-x-[36.7px] mb-[23px] flex h-[73px]"
      >
        <div className="flex items-center gap-x-6">
          <div
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className={`border z-[4000] bg-white cursor-pointer ${
              openMenu && "-space-y-0.5 fixed top-5"
            } flex md:hidden rounded items-center justify-center space-y-2 flex-col border-gray-500 w-6 h-6`}
          >
            <div
              className={`w-4 duration-500 h-0.5 bg-white ${
                openMenu && "rotate-45"
              }`}
            />
            <div
              className={`w-4 duration-500 delay-100 h-0.5 bg-white ${
                openMenu && "-rotate-45"
              } `}
            />
          </div>
          <Link href={"/"}>
            <MusicaIcon />
          </Link>
        </div>

        <div className="md:flex hidden px-6 items-center gap-x-6">
          <div>
            <SearchIcon />
          </div>
          <input
            className="bg-gray-800 hidden md:block w-[500px] p-2 rounded-full text-md font-bold font-quicksand"
            placeholder="search"
          />
        </div>
        {!session ? (
          <>
            <button
              className="text-sm bg-gray-700 font-semibold rounded-md text-white py-2 px-6 disabled:opacity-25"
              onClick={() => {
                signIn();
              }}
            >
              Signin
            </button>
            <button onClick={getAccess}>Deezer auth</button>
          </>
        ) : (
          <p>Hello {session.user.email}</p>
        )}
      </div>
      <MobileMenu open={openMenu} />
    </>
  );
};

export default ClientHeader;
