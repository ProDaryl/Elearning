"use client"
import Link from "next/link"
import FlashIcon from "../FlashIcon"

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-3 pt-20 md:pt-5 h-screen ">
      <div className="bg-white flex items-center gap-2 p-3 rounded-md">
        <div className="p-3 bg-orange-95 rounded-md"><FlashIcon/></div>
        <div className="text-gray-15 text-[16px] leading-[150%] font-semibold"><span className="text-orange-50">Unlock</span> Your Creative Potential</div>
      </div>
      <div className="mt-5 w-[78%] md:px-0 md:w-full text-center flex flex-col justify-center items-center">
        <p className="text-gray-15 text-[24px]   leading-[150%] font-medium ">with Online Design and Development Courses.</p>
        <p className="text-[14px]">Learn from Industry Experts and Enhance Your Skills.</p>
        <Link href={"/courses"} className="px-5 py-[14px] mt-9 rounded-md text-white bg-orange-50">
          Explore Courses
        </Link>
      </div>
      <div className="text-[14px]  bg-white flex py-2 justify-center gap-5 px-5 mt-10 items-center text-gray-15 font-semibold">
        <div className="md:px-3">Tech Army</div>
        <div className="!h-[60px] !w-[2px]  bg-background"></div>
        <div className="md:px-3">Robotic club</div>
      </div>
    </div>
  )
}

export default Hero
