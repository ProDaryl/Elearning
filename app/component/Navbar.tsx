"use client"
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
    const pathName = usePathname()
    const [openMenu, setOpenMenu] = useState(false)
    return (
<<<<<<< HEAD
        <div className="px-2 w-full lg:px-5 pt-5 z-[999] bg-background fixed">
=======
        <div className="px-2 w-full lg:px-5 pt-5 bg-background fixed z-10">
>>>>>>> cb8cd4f4821ae1ec1cdc593e8f60fe957b09a923
            <nav className="relative flex justify-between items-center p-2 px-6 w-full shadow-sm shadow-gray-200">
                <div className="flex gap-[10px] lg:gap-[40px] items-center justify-center">
                    <div className=" p-2 md:py-2 md:px-1 lg:p-2 rounded text-white bg-orange-50"><Logo /></div>
                    <div className={` absolute flex-col ${openMenu ? "flex" : "hidden md:flex"} md:mt-0 md:relative md:bg-transparent md:shadow-none md:w-full md:flex-row top-[100%] mt-2 w-[300px] right-0 bg-background shadow-sm shadow-gray-200 py-2 items-center leading-[150%]  lg:text-[18px] text-gray-15  font-normal  gap-4`}>
                        <Link className={clsx("py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md", { "bg-white-95": pathName === "/courses" })} href={"/courses"}>Courses</Link>
                        <Link className={clsx("py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md", { "bg-white-95": pathName === "/" })} href="/">Home</Link>
                        <Link className={clsx("py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md", { "bg-white-95": pathName === "/about-us" })} href="/about-us">About Us</Link>
                        <Link className={clsx("py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md", { "bg-white-95": pathName === "/community" })} href="/community">Community</Link>
                        <Link className={clsx("py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md", { "bg-white-95": pathName === "/contact" })} href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={"/signup"} className="py-[12px] px-[10px] lg:px-[24px] rounded-md hover:text-white hover:bg-orange-50/20 duration-500">Sign Up</Link>
                    <Link href={"/login"} className="py-[12px] px-[20px] md:px-[24px] text-white bg-orange-50 rounded-md duration-300 hover:scale-105">Login</Link>
                    <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer md:hidden">{openMenu ? <X size={35} /> : <Menu size={35} />}</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
