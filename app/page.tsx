"use client";
import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import MainMenu from '@/components/MainMenu'
import Navbar from '@/components/Navbar'
import {useState} from 'react';


export default function Home() {
  const [isToggle, setIsToggle] = useState(false);
  console.log(isToggle);
  return (
   <div className='flex  min-h-full'>
    <MainMenu isToggle={isToggle} setIsToggle={setIsToggle}/>
    <div className='bg-[#0D0B21] w-full flex flex-col items-center justify-start gap-10 '>
      <Navbar setIsToggle={setIsToggle}/>
      <Hero/>
      <Cards/>
    </div>
   </div>
  



  )
}
