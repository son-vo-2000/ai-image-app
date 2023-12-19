"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/hand.png";
import { AiOutlineHome, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { NavContext } from "@/NavContext/NavContext";

const routes = [
  {
    label: "Home",
    icon: AiOutlineHome,
    href: "/",
    color: "text-lime-500",
  },
  {
    label: "Dashboard",
    icon: BiSolidDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Image Generation",
    icon: BsImage,
    href: "/image",
    color: "text-amber-500",
  },
];

const Sidebar = () => {
  const context = useContext(NavContext);

  // flag is to keep track of closing sidebar on mobile not window
  // when flag is false means we're on big screen and we don't want to close sidebar when switch tabs
  // when flag is true means we're on small screen and close sidebar when switch tabs
  //
  const [flag, setFlag] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    context?.setIsShowNav(false);
  };

  useEffect(() => {
    const handleResize = () => {

      // if we on the big screen
      if (window.innerWidth >= 768) {
        context?.setIsShowNav(true);
        setFlag(false)
      } else {
        // we on small screen
        context?.setIsShowNav(false);
        setFlag(true)
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeMenuOnMobile(){
    // we need this funciton because when we switch between tabs we want to close the side bar mobile
    //
    if(flag){
      closeMenu()
    } 
  }
  
  return (
    <div
      className={`${
        context?.isShowNav ? "translate-x-0" : "-translate-x-60"
      } absolute h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 md:inset-x-0 
    space-y-4 py-4 flex flex-col  bg-[#43344b] text-white transition z-10 `}
    >
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center justify-between mb-14">
          <Link href="/dashboard" className="flex items-center pl-3 ">
            <div className=" w-8 h-8 mr-4">
              <Image src={logo} alt="logo" />
            </div>
            <h1 className="text-2xl font-bold">Finn</h1>
          </Link>
          <div onClick={closeMenu}>
            <AiOutlineCloseCircle className="md:hidden w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className="space-y-2 ">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              onClick={closeMenuOnMobile}
              className={`text-sm text-white/70 ${
                route.href === pathname ? "bg-white/10 text-white/100" : ""
              }  group flex p-3 w-full justify-start font-medium cursor-pointer 
              hover:text-white hover:bg-white/10 rounded-lg transition`}
            >
              <div className="flex items-center flex-1">
                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
