
import Link from "next/link"
import Logo from "../Logo"
import { usePathname } from "next/navigation"
import {clsx} from "clsx"

const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className="mt-7 flex justify-between items-center py-3 px-6 w-[90%] mx-20 shadow-sm shadow-gray-200">
            <div className="flex gap-[40px] items-center justify-center">
                <div className="p-2 rounded text-white bg-orange-50"><Logo/></div>
                <div className="flex items-center leading-[150%] text-[18px] text-gray-15  font-normal h-full gap-4">
                    <Link className={clsx("px-[14px] py-[24px] rounded-md",{"bg-white-95":pathName === "/"})} href="/">Home</Link>
                    <Link className="px-[14px] py-[24px]" href="/courses">Courses</Link>
                    <Link className="px-[14px] py-[24px]" href="/about-us">About Us</Link>
                    <Link className="px-[14px] py-[24px]" href="/community">Community</Link>
                    <Link className="px-[14px] py-[24px]" href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
