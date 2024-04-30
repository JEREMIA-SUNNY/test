"use client";
import React, { useState } from "react";
import NavSidebar from "../NavSideBar";
interface props {
  isToggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar: React.FC<props> = ({ isToggled, setToggle }) => {
  return (
    <>
      <div className="flex  items-center font-Anta  h-full w-full">
        <nav className="  w-full  z-[1000]  inset-0 ">
          <div className="flex md:container md:px-0 px-2 items-center justify-between md:mx-auto ">
            <div>
              <p className="font-extrabold text-white  text-2xl">
                <span className="font-bold text-greenTNF">T</span>seek.
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 font-medium">
              <div className="text-white text-lg font-medium  hover:cursor-pointer">
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  ABOUT US
                </span>
              </div>
              <div
                onClick={() => setToggle(!isToggled)}
                onMouseEnter={() => setToggle(true)}
                className="text-white text-lg font-medium hover:cursor-pointer "
              >
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  SERVICES
                </span>
              </div>
              <div className="text-white text-lg font-medium hover:cursor-pointer">
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  INDUSTRIES
                </span>
              </div>

              <div className="text-white text-lg font-medium hover:cursor-pointer">
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  FACILITIES
                </span>
              </div>

              <div className="text-white text-lg font-medium hover:cursor-pointer">
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  NEWS
                </span>
              </div>
              <div className="text-white text-lg font-medium hover:cursor-pointer">
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  CONTACT
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
