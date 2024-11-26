"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  // Define default and community-specific menu items
  const defaultLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const communityLinks = [
    { href: "/community", label: "Forums" },
    { href: "/community/groups", label: "Groups" },
    { href: "/community/events", label: "Events" },
    { href: "/community/resources", label: "Resources" },
  ];

  // Determine which menu to render based on the current path
  const navLinks = pathName.startsWith("/community") ? communityLinks : defaultLinks;

  return (
    <div className="px-2 w-full lg:px-5 pt-5 bg-background fixed z-10">
      <nav className="relative flex justify-between items-center p-2 px-6 w-full shadow-sm shadow-gray-200">
        {/* Left Section: Logo and Links */}
        <div className="flex gap-[10px] lg:gap-[40px] items-center justify-center">
          <div className="p-2 md:py-2 md:px-1 lg:p-2 rounded text-white bg-orange-400">
            <Logo />
          </div>
          <div
            className={`absolute flex-col ${
              openMenu ? "flex" : "hidden md:flex"
            } md:mt-0 md:relative md:bg-transparent md:shadow-none md:w-full md:flex-row top-[100%] mt-2 w-[300px] right-0 bg-background shadow-sm shadow-gray-200 py-2 items-center leading-[150%] lg:text-[18px] text-gray-15 font-normal gap-4`}
          >
            {/* Render Menu Items Dynamically */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={clsx(
                  "py-[14px] px-3 lg:px-[24px] hover:bg-white-95 rounded-md",
                  { "bg-white-95": pathName === link.href }
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Sign Up, Login, and Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href={"/signup"}
            className="py-[12px] px-[10px] lg:px-[24px] rounded-md hover:text-white hover:bg-orange-400 duration-500"
          >
            Sign Up
          </Link>
          <Link
            href={"/login"}
            className="py-[12px] px-[20px] md:px-[24px] text-white bg-orange-400 hover:bg-orange-500/90 rounded-md duration-300 hover:scale-105"
          >
            Login
          </Link>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer md:hidden"
          >
            {openMenu ? <X size={35} /> : <Menu size={35} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;