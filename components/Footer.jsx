import Link from "next/link";
import React from "react";
import Image from "next/image";
import chowlogo from "@/assets/icons/icon6.svg";
import logo from "@/assets/icons/logo.svg";
import bluestar from "@/assets/icons/bluestar.svg";
import starincircle from "@/assets/icons/starincircle.svg";
import blackmultistars from "@/assets/icons/pinkmultistars.svg";
import greensemicircle from "@/assets/icons/bluesemicircle.svg";

const Footer = () => {
  return (
    <div className="bg-[#000000ff] flex flex-col-reverse md:flex-row text-slate-400 px-6">
      <div className="w-full flex flex-col justify-between md:w-[30%] border-t-[1px] md:border-r-[1px] border-slate-600">
        <div className="hidden md:block">
          <Image
            className="w-32 h-32 mt-[4rem]"
            alt="chow logo"
            src={chowlogo}
          />
        </div>
        <div className="text-[3rem] flex gap-x-2 items-center text-white font-bold">
          <Image src={logo} alt="chowdeck logo" className="w-14 h-14" />
          chowdeck
        </div>
      </div>
      <div className="flex w-full md:w-[70%] flex-col md:flex-col-reverse">
        <div className="grid text-slate-100 text-xl  grid-cols-2">
          <div className="text-center flex items-center justify-center gap-x-2 border-b border-slate-600 p-8">
            <Image src={bluestar} alt="blue star" className="w-5 h-5" />
            Twitter
          </div>
          <div className="text-center flex items-center justify-center gap-x-2 border-b border-l border-slate-600 p-8">
            <Image src={blackmultistars} alt="blue star" className="w-5 h-5" />
            Instagram
          </div>
          <div className="text-center flex items-center justify-center gap-x-2 border-slate-600 p-8">
            <Image src={greensemicircle} alt="blue star" className="w-5 h-5" />
            Facebook{" "}
          </div>
          <div className="text-center flex items-center justify-center gap-x-2 border-l border-slate-600 p-8">
            <Image src={starincircle} alt="blue star" className="w-5 h-5" />
            Linkedin
          </div>
        </div>
        {/* Links */}
        <div className="flex w-full flex-col border-t-[1px] md:border-b-[1px] border-slate-600 justify-between md:divide-x-2 divide-slate-600 md:flex-row">
          <div className="flex md:w-1/3 px-4 gap-x-10 w-full gap-y-4 py-8 flex-row md:flex-col">
            <div className="uppercase text-lg font-normal">Company</div>
            <ul className="text-white space-y-3 text-lg">
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Vendors</Link>
              </li>
              <li>
                <Link href={"/"}>Riders</Link>
              </li>
              <li>
                <Link href={"/"}>Storefront</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Careers</Link>
              </li>
              <li>
                <Link href={"/"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
              <li>
                <Link href={"/"}>Terms of Use</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex md:w-1/3 w-full gap-x-10 px-4 gap-y-4 py-8 flex-row md:flex-col">
            <div className="uppercase leading-[1.2rem] w-20 md:w-auto text-lg font-normal">
              Cuisines near you
            </div>
            <ul className="text-white space-y-3 text-lg">
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Vendors</Link>
              </li>
              <li>
                <Link href={"/"}>Riders</Link>
              </li>
              <li>
                <Link href={"/"}>Storefront</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Careers</Link>
              </li>
              <li>
                <Link href={"/"}>FAQs</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
              <li>
                <Link href={"/"}>Terms of Use</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex md:w-1/3 w-full gap-x-10 px-4 gap-y-4 py-8 flex-row md:flex-col">
            <div className="uppercase text-lg font-normal">Popular</div>
            <ul className="text-white space-y-3 text-lg">
              <li>
                <Link href={"/"}>Food Delivery</Link>
              </li>
              <li>
                <Link href={"/"}>Surulere</Link>
              </li>
              <li>
                <Link href={"/"}>Ogudu</Link>
              </li>
              <li>
                <Link href={"/"}>Yaba</Link>
              </li>
              <li>
                <Link href={"/"}>Ikeja</Link>
              </li>
              <li>
                <Link href={"/"}>Lekki</Link>
              </li>
              <li>
                <Link href={"/"}>King Glab</Link>
              </li>
              <li>
                <Link href={"/"}>Korede Spaghetti</Link>
              </li>
              <li>
                <Link href={"/"}>Iyan Aladuke</Link>
              </li>
              <li>
                <Link href={"/"}>Food Fusion</Link>
              </li>
              <li>
                <Link href={"/"}>Belefull</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
