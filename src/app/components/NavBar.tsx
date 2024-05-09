"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useParams, useRouter, usePathname } from "next/navigation";

interface props {
  isToggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.1,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.2, // Stagger children with a delay of 0.2 seconds
    },
  },
};

const item = {
  variants: {
    closed: { y: -50, opacity: 0 },
    open: { y: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

const SubmenuItemService = () => {
  return (
    <motion.div
      variants={item.variants}
      transition={item.transition}
      className="text-black text-left  py-3 mt-4  px-2 text-sm rounded-xl flex flex-col gap-4 bg-white min-w-[250px]"
    >
      <Link
        href="/services?name=CNC"
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CNC MILLING
      </Link>
      <Link
        href={"/services?name=TURNING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CNC TURNING
      </Link>
      <Link
        href={"/services?name=BTA"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        BTA DRILLING
      </Link>
      <Link
        href={"/services?name=HEATTREATMENT"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        HEAT TREATMENT & CASE HARDENING
      </Link>
      <Link
        href={"/services?name=PHOSPHATING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        PHOSPHATING SERVICES
      </Link>
      <Link
        href={"/services?name=CYLINDRICAL"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CYLINDRICAL & SURFACE GRINDING
      </Link>
      <Link
        href={"/services?name=ELECTRIC"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        ELECTRIC DISCHARGE MACHINING
      </Link>

      <Link
        href={"/services?name=INSPECTION"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        INSPECTION SERVICES
      </Link>
    </motion.div>
  );
};
const NavBar: React.FC<props> = ({ isToggled, setToggle }) => {
  const [isHover, toggleHover] = React.useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const params = usePathname();
  useEffect(() => {
    if (params !== "/") {
      setTextColor("black");
      setBgColor(false);
    } else {
      setTextColor("white");
      setBgColor(true);
    }
  }, [params]);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  return (
    <>
      <div
        className={`flex text-${textColor} ${
          bgColor ? "bg-" : "bg-white"
        } items-center font-Anta  h-full w-full`}
      >
        <nav className="  w-full  z-[1000]  inset-0 ">
          <div className="flex md:container md:px-0 px-2 items-center justify-between md:mx-auto ">
            <div>
              <p className="font-extrabold    text-2xl">
                <span className="font-bold text-greenTNF">T</span>seek.
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 font-medium">
              <div className=" text-lg font-Anta font-medium  hover:cursor-pointer">
                <Link
                  href={"/"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  HOME
                </Link>
              </div>
              <div className=" text-lg font-medium  hover:cursor-pointer">
                <Link
                  href={"/about"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  ABOUT US
                </Link>
              </div>
              <motion.div
                onHoverStart={toggleHoverMenu}
                onHoverEnd={toggleHoverMenu}
                className=" relative text-lg font-medium  "
              >
                <Link
                  className="h-[90px] hover:cursor-pointer"
                  href={"/services"}
                >
                  <span
                    className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                  >
                    SERVICES
                  </span>
                </Link>

                {isHover && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    variants={menu}
                    className="absolute bottom-[100] z-[20000]"
                  >
                    <SubmenuItemService />
                  </motion.div>
                )}
              </motion.div>
              <div className=" text-lg font-medium hover:cursor-pointer">
                <Link
                  href={"/industries"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  INDUSTRIES
                </Link>
              </div>

              <div className=" text-lg font-medium hover:cursor-pointer">
                <Link
                  href={"/facility"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  FACILITIES
                </Link>
              </div>

              <div className=" text-lg font-medium hover:cursor-pointer">
                <Link
                  href={"/news"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  NEWS
                </Link>
              </div>
              <Link
                href={"/contact-us"}
                className=" text-lg font-medium hover:cursor-pointer"
              >
                <span
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  CONTACT
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
