import React from "react";
import Addbtn from "@/public/btnAdd.svg";
import Image from "next/image";
import Horizon from "@/public/horizon.svg";
import people from "@/public/people.svg";
import clock from "@/public/clock (1) 1.svg";
 
const Cards = () => {
  return (
    <div className="flex gap-8 justify-start items-start mb-5 mx-5 flex-wrap">
      <div className="flex flex-col gap-5">
        <div className="flex gap-24 items-center">
          <p className="lg:text-[20px] text-xs font-semibold ">To-DO-List(24)</p>
          <Image src={Addbtn} alt="add"  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"/>
        </div>

{/* To-DO-List */}
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#FFAB2D] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#FFAB2D]">
                Important
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
            Create sign up sheet for holiday student/parent conferences.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#FFAB2D] w-[30%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>

        {/* Instructor Meeting */}
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#E328AF] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#E328AF]">
              Instructor Meeting
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
          Plan holiday demonstration program. Create outline.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#E328AF] w-[50%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>

        {/* Databse */}
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#38E25D] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#38E25D]">
              Databse
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
           Determine how many boards need to be ordered for testing and demo.
          </p>
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#38E25D] w-[30%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>
      </div>

       {/* InProgress */}
      <div className="flex flex-col gap-5">
        <div className="flex gap-24 items-center ">
          <p className="lg:text-[20px] text-sm font-semibold">In Progress(2)</p>
          <Image src={Addbtn} alt="add" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"/>
        </div>
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#5ECFFF] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#5ECFFF]">
                Video
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
          Create sparring tutorial video for the weekly class.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#5ECFFF] w-[80%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>
        {/* BUGS FIXING */}
        <div className="relative lg:w-[250px] lg:h-[250px] w-[200px] h-[180px] bg-black rotate-2 rounded-xl z-10">
          <div className="bg-[#211A75] p-3 rounded-xl rotate-6 lg:rotate-10 absolute top-6 left-10 w-[200px] lg:w-[270px]">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <span className="text-3xl text-[#FF4A55] content-none">
                  &bull;
                </span>
                <p className="text-[14px] font-semibold text-[#FF4A55]">
                BUGS FIXING
                </p>
              </div>
              <Image src={Horizon} alt="horizon" />
            </div>
            <p className="py-1 pl-2 text-sm lg:text-base">
              Create sign up sheet for holiday student/parent conferences.
            </p>
 
            <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
              <div className="h-2 bg-[#FF4A55] w-[90%] rounded-full"></div>
            </div>
 
            <div className="flex mt-5 justify-between gap-3">
              <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
              <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
                <Image src={clock} alt="clock" />
                Due in 4 days
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* BUGS FIXING */}
      <div className="flex flex-col gap-5">
        <div className="flex gap-24 items-center">
          <p className="lg:text-[20px] text-xs font-semibold">Done (3)</p>
          <Image src={Addbtn} alt="add"  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"/>
        </div>
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#FF4A55] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#FF4A55]">
                BUGS FIXING
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
          Action Button needed for Google Maps visits.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#FF4A55] w-[100%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>

        {/* Database */}
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#38E25D] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#38E25D]">
              Database
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
          Update new instructor photos.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#38E25D] w-[100%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>

        {/* Instructor Meeting */}
        <div className="bg-[#211A75] p-3 rounded-xl w-[200px] lg:w-[270px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#E328AF] content-none">
                &bull;
              </span>
              <p className="text-[14px] font-semibold text-[#E328AF]">
              Instructor Meeting 
              </p>
            </div>
            <Image src={Horizon} alt="horizon" />
          </div>
          <p className="py-1 pl-2 text-sm lg:text-base">
          Review/correct yellow belt techniques.
          </p>
 
          <div className="h-2 w-[150px] bg-[#0D0B21]  rounded-full my-3 ml-2">
            <div className="h-2 bg-[#E328AF] w-[100%] rounded-full"></div>
          </div>
 
          <div className="flex mt-5 justify-between gap-3">
            <Image src={people} alt="people" className="w-[70px] lg:w-[100px]"/>
 
            <p className="text-neutral-400 text-[10px] lg:text-sm font-semibold flex items-center gap-3">
              <Image src={clock} alt="clock" />
              Due in 4 days
            </p>
          </div>
        </div>
      </div>
 
      <div className="flex flex-col gap-5">
        <div className="flex gap-24 items-center">
          <p className="lg:text-[20px] text-sm font-semibold">Revised(0)</p>
          <Image src={Addbtn} alt="add" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"/>
        </div>
       <div >
        <div className="bg-[#211A75] lg:p-5 p-3 rounded-xl ">
            <div className="bg-[#15132B] p-2 lg:p-5 rounded-2xl border border-violet-400 border-dashed ">
                <p className="text-[#7879F1] lg:text-base text-sm text-center">Move card here</p>
            </div>
        </div>
       </div>
        
      </div>
    </div>
  );
};
 
export default Cards;