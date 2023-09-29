import Image from "next/image";
import React from "react";
import backbtn from "@/public/backbtn.svg";
import Profile from "./profile";
import AddFrdn from "@/public/add-friend 1.svg";
import message from "@/public/message.svg";
import ProfilePic from "@/public/profilePicture.svg";
import vertical from "@/public/vertIcon.svg";

const Hero = () => {
  return (
    <div className="bg-[#15132B]  rounded-md w-[97%] p-5 flex items-center justify-between flex-wrap">
      <div>
        <div className="flex ml-0 xl:ml-10 items-center justify-start gap-3">
          <Image src={backbtn} alt="backbtn" />
          <p className="text-white text-[28px] font-bold  ">
            School November Tasks
          </p>
        </div>
        <div className=" ml-12 xl:ml-24 my-2">
          <p className="flex ">
            Created by Instructor Day on November 31, 2022
          </p>
        </div>
        <div className="flex items-center gap-5 mt-7  ml-10 xl:ml-24">
          <div className="mt-[-40px] ">
            <Profile />
          </div>
          <button className="bg-[#6418C3] rounded-[14px] p-3 ml-16 flex items-center gap-2">
            <Image
              src={AddFrdn}
              alt="add"
              className="w-[17px] h-[17px] xl:w-[24px] xl:h-[24px]"
            />
            <p className="text-sm xl:text-base">Invite People</p>
          </button>
          <button className="bg-transparent border border-violet-500 py-3 px-5 rounded-[14px] text-sm xl:text-base">
            Private
          </button>
          <button className="bg-[#7879F1] px-7 py-3 rounded-[14px] font-medium text-sm xl:text-base">
            Edit
          </button>
          <button className="bg-transparent border border-violet-400 flex items-center gap-2 p-3 rounded-[14px] text-sm xl:text-base">
            <Image
              src={message}
              alt="message"
              className="w-[17px] h-[17px] xl:w-[24px] xl:h-[24px]"
            />
            45 Comments
          </button>
        </div>
      </div>
      {/* Right section */}
      <div className="hidden xl:block">
        <div className="flex flex-col items-end justify-end mt-8 lg:mt-5 ">
          <div className="flex gap-3 items-end justify-end">
            <div className="">
              <p>Centered Martial Arts</p>
              <p>Sunnyvale, Ca</p>
            </div>
            <Image src={ProfilePic} alt="profile" className="cursor-pointer" />
            <Image src={vertical} alt="vertical" className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-end mt-10 gap-5 ">
          <div className=" font-semibold ">
            <p>Total Progress 60%</p>
          </div>
          <div className="h-2 w-[250px] bg-white  rounded-full mb-2">
            <div className="h-2 bg-violet-600 w-[60%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
