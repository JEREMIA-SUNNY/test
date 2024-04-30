import React, { useState } from "react";
import NavbarItems from "./NavBarItem";
import { motion, AnimatePresence } from "framer-motion";
interface props {
  isToggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavSidebar: React.FC<props> = ({ isToggled, setToggle }) => {
  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar w-[450px] flex flex-col fixed left-0 z-[20000]"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div
              onClick={() => setToggle(!isToggled)}
              className="text-white  flex justify-end  w-full"
            >
              <p className="transition-all text-2xl cursor-pointer duration-500 hover:scale-150 ease-linear ">
                x
              </p>
            </div>
            <NavbarItems isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSidebar;
