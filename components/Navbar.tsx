import Image from "next/image";
import React from "react";
import search from "@/public/search.svg";
import Bell from "@/public/bell 1.svg";
import Video from "@/public/Video Lesson 2 2.svg";
import CheckBox from "@/public/checkbox (1) 1.svg";
import Folder from "@/public/office 1.svg";
import USA from "@/public/united-states.svg";
import { BiSolidDownArrow } from "react-icons/bi";
import Profile from "@/public/profilePicture.svg";
import hambuger from "@/public/hamburgermenu.svg";

const Navbar = (props: any) => {
  return (
    <div className="bg-[#15132B]   w-[100%] flex p-7  items-center justify-between">
      <div className="block lg:hidden">
        <div className="flex items-center justify-center " onClick={()=>props.setIsToggle(true)}>
          <Image
            src={hambuger}
            alt="hamburgermenu"
            className="cursor-pointer"
          />
          <p className="text-xl">WeFrametech </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="border-2 pl-4 pr-2 rounded-full bg-[#211A75] flex items-center relative focus-within:border-cyan-700 outline-none ">
          <Image src={search} alt="searchbar" height={25} width={25} />
          <input
            type="text"
            className="outline-none py-2 mx-2 w-full bg-[#211A75]"
            placeholder="Search here"
          />
        </div>
      </div>

      <div className="text-[#6418C3] text-16px font-semibold underline ml-20 text-base cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out hover:opacity-50 hidden lg:block">
        OTHER MENUS
      </div>
      <div className="ml-12  relative group hidden lg:block">
        <Image
          src={Bell}
          alt="bell"
          className=" hover:scale-110 transition-all duration-500 ease-in-out hover:opacity-50"
        />
        <div
          className="text-gray-900 text-[10px] xl:text-sm font-bold absolute bg-cyan-400 rounded-[46px] top-[-0.5em] right-[-0.2em] w-1/2 flex justify-center items-center group-hover:scale-110 transition-all
                    "
        >
          12
        </div>
      </div>
      <div className="ml-7 relative group hidden lg:block">
        <Image
          src={Video}
          alt="Video"
          className=" hover:scale-110 transition-all duration-500 ease-in-out hover:opacity-50"
        />
        <div className="text-gray-900 text-sm font-bold absolute bg-cyan-400 rounded-[46px] top-[-0.5em] right-[-0.2em] w-1/2 flex justify-center items-center group-hover:scale-110 transition-all">
          3
        </div>
      </div>
      <div className="ml-7 relative group hidden lg:block">
        <Image
          src={CheckBox}
          alt="checkbox"
          className=" hover:scale-110 transition-all duration-500 ease-in-out hover:opacity-50"
        />
        <div className="text-gray-900 text-sm font-bold absolute bg-cyan-400 rounded-[46px] top-[-0.5em] right-[-0.2em]  w-1/2 flex justify-center items-center group-hover:scale-110 transition-all">
          9
        </div>
      </div>
      <div className="ml-7 relative group hidden lg:block">
        <Image
          src={Folder}
          alt="folder"
          className=" hover:scale-110 transition-all duration-500 ease-in-out hover:opacity-50 "
        />
        <div className="text-gray-900 text-sm font-extrabold absolute bg-rose-400 rounded-[46px] top-[-0.5em] right-[-0.2em] w-1/2 flex justify-center items-center group-hover:scale-110 transition-all">
          !
        </div>
      </div>
      <div className="w-[160px] h-[58px] bg-violet-950 rounded-[46px] ml-12 relative cursor-pointer hover:opacity-60 transition-all hidden lg:block">
        <div className="w-[27.52px] h-[24.96px] left-[1em] top-[1.01em] absolute">
          <Image src={USA} alt="usa" />
        </div>
        <div className="flex place-items-center justify-center absolute left-[3.5em] top-[1.1em]">
          English
        </div>
        <div className="absolute right-[1.2em] top-[1.3em] ">
          <BiSolidDownArrow />
        </div>
      </div>

      <div className="w-px h-14 bg-slate-800 rounded-lg ml-20" />

      <div className=" flex ml-8">
        <div>
          <Image
            src={Profile}
            alt="Profile"
            height={50}
            width={50}
            className="fex"
          />
        </div>
        <div className="text-white text-sm font-bold ml-5 flex flex-col mt-2 ">
          Instructor Day
          <span className="text-xs text-indigo-400 font-normal">
            Super Admin
          </span>
        </div>
        <div className="flex items-center justify-center ml-3 cursor-pointer">
          <BiSolidDownArrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
