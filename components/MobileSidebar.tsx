"use client";
import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavContext } from "@/NavContext/NavContext";

const MobileSidebar = () => {
  const context = useContext(NavContext);

  const openMenu = () => {
    context?.setIsShowNav(true);
  };

  return (
    <div className="md:hidden cursor-pointer " onClick={openMenu}>
      <RxHamburgerMenu className="text-2xl" />
    </div>
  );
};

export default MobileSidebar;
