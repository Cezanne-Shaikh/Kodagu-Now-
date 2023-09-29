import Image from "next/image";
import React from "react";
import invitedPeople from '@/public/placeholder.svg';


const Profile = ({width}:any) => {
  return (
  <div className="flex  mt-10 relative  items-start">
  <Image
  width={width ?? 40} 
  src={invitedPeople}
  alt="profile"
  className=" "/>
  <Image 
  width={width ?? 40}
  src={invitedPeople}
  alt="profile"
  className=" absolute left-5  "/>
  <Image 
  width={width ?? 40}
  src={invitedPeople}
  alt="profile"
  className=" absolute left-10  "/>
  <Image 
  width={width ?? 40}
  src={invitedPeople}
  alt="profile"
  className="absolute left-[3.6rem]   "/>
 <span 
 className={`bg-[#E328AF] rounded-[46px] w-10 h-10 flex items-center justify-center  left-[4.5rem] bottom-[0.5px] absolute `}>
  5+
  </span>
  </div>
  )

};

export default Profile;
