"use client"
import { createContext, useState } from "react";

type NavContextType = {
  isShowNav: Boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavContext = createContext<NavContextType | null>(null);

export const NavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <NavContext.Provider value={{ isShowNav, setIsShowNav }}>
      {children}
    </NavContext.Provider>
  );
};
