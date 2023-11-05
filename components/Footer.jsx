import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000000ff] flex flex-col-reverse md:flex-row text-slate-400 px-6">
      <div className="w-full flex flex-col justify-between md:w-[30%] border-t-[1px] md:border-r-[1px] border-slate-600">
        <div className="hidden md:block">chowdeck</div>
        <div className="text-[4rem] text-white font-bold">chowdeck</div>
      </div>
      <div className="flex w-full md:w-[70%] flex-col md:flex-col-reverse">
        <div className="grid text-slate-100 text-xl  grid-cols-2">
          <div className="text-center border-b border-slate-600 p-8">
            Twitter
          </div>
          <div className="text-center border-b border-l border-slate-600 p-8">
            Instagram
          </div>
          <div className="text-center border-slate-600 p-8">Facebook </div>
          <div className="text-center border-l border-slate-600 p-8">
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
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
              <li>
                <Link href={"/"}>Customers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
