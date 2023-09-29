import Image from "next/image";
import React from "react";
import dashboard from '@/public/dashboard 1.svg';
import email from '@/public/email 1.svg';
import thumbnail from '@/public/thumbnail 1.svg';
import contact from '@/public/contact 1.svg';
import calender from '@/public/calendar-silhouette 1.svg';
import video from '@/public/Video Lesson 2 1.svg';
import shop from '@/public/online-shopping 1.svg';
import invoice from '@/public/invoice 1.svg';
import setting from '@/public/setting 1.svg';
import comment from '@/public/comment 1.svg';
import downarrow from '@/public/downarrow.svg'
import rightarrow from '@/public/rightarrow.svg';
import hambuger from '@/public/hamburgermenu.svg';
import search from "@/public/search.svg";


const MainMenu = (props:any) => {
//    console.log(props.isToggle,"toggling");
  return (
    <div className={`bg-[#15132B] xl:w-[18%]  p-10 min-h-full absolute left-0 xl:block xl:left-0 z-50 xl:static ${props.isToggle ? ' left-0' : 'absolute left-[-999px] ' } transition-all duration-500`} >
        <div className="flex items-center gap-4 mb-8 ">
            <p className="text-2xl">WeFrametech </p>     
        <div >
        <div className="hidden lg:block">
            <Image
              src={hambuger}
              alt="hamburgermenu"
              className="cursor-pointer"
            />
          </div>
          <div className="block lg:hidden" onClick={()=>props.setIsToggle(false)}>
            <p>BACK</p>
          </div>
        </div>
        </div>
        <div className="block lg:hidden">
        <div className="border-2 pl-4 pr-2 rounded-full bg-[#211A75] flex items-center relative focus-within:border-cyan-700 outline-none ">
          <Image src={search} alt="searchbar" height={25} width={25} />
          <input
            type="text"
            className="outline-none py-2 mx-2 w-full bg-[#211A75]"
            placeholder="Search here"
          />
        </div>
      </div>

        
        <div className="text-stone-300 text-base font-bold tracking-wide mt-10 ">
            MAIN MENU
            </div>

            <div className="mt-10 flex-1 items-center justify-center cursor-pointer">

            <div className="flex ">
                <Image
                src={dashboard}
                alt="dashboard" />
                <span className="text-slate-600 text-lg font-semibold ml-5">Dashboard</span>
            </div>
            <div className="flex mt-5">
                <Image
                src={email}
                alt="email" />
                <span className="text-slate-600 text-lg font-semibold ml-5">Email</span>
                <div className="bg-cyan-400 rounded-[46px] w-1/2 flex justify-center items-center ml-16"> 17</div>
                <Image
                src={downarrow}
                alt="downarrow"
                className="ml-5"/>
            </div>
            <div className="flex mt-5">
                <Image
                src={comment}
                alt="comment" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Chat</span>
            </div>
            <div className="flex mt-5">
                <Image
                src={thumbnail}
                alt="thumbnail" />
                <span className="text-violet-800 text-lg font-semibold ml-5">Kanban</span>
                <Image
                src={rightarrow}
                alt="rightarrow"
                className="ml-20"/>
            </div>
            <div className="flex mt-5">
                <Image
                src={contact}
                alt="contact" />
                <span className="ttext-indigo-400 text-lg font-semibold ml-5">Contact</span>
                <div className="bg-[#E328AF] rounded-[46px] w-[5em] flex justify-center items-center ml-12">NEW</div>
            </div>
            <div className="flex mt-5">
                <Image
                src={calender}
                alt="calender" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Calendar</span>
            </div>
            <div className="flex mt-5">
                <Image
                src={video}
                alt="video" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Courses</span>
                <Image
                src={rightarrow}
                alt="rightarrow"
                className="ml-20"/>
            </div>

            <div className="flex mt-5">
                <Image
                src={shop}
                alt="shop" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Shop</span>
                
            </div>

            <div className="flex mt-5">
                <Image
                src={invoice}
                alt="invoice" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Invoices</span>
                <Image
                src={rightarrow}
                alt="rightarrow"
                className="ml-20"/>
            </div>
            <div className="flex mt-5">
                <Image
                src={setting}
                alt="settings" />
                <span className="text-indigo-400 text-lg font-semibold ml-5">Settings</span>
            </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-300  rounded-2xl my-6 mt-9 flex  items-center justify-center w-[180px] py-4">
       
        <span className="text-white text-md font-semibold  ml-2">Increase your work with kanban <br /><span className="ml-5 ">→</span></span>
        </div>
        
    </div>
  )
};

export default MainMenu;
