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
      className="text-black text-left  py-3 mt-4  px-2 text-sm rounded-xl grid grid-cols-2 gap-y-4 gap-x-2  bg-white min-w-[300px]"
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
        href={"/services?name=EDM"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        EDM Services
      </Link>
      <Link
        href={"/services?name=GRINDING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        GRINDING
      </Link>
      <Link
        href={"/services?name=PHOSPHATING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        PHOSPHATING SERVICES
      </Link>

      <Link
        href={"/services?name=CMM"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CMM
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
        href={"/services?name=DESIGN"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        DESIGN, MANUFACTURE & REPAIR SERVICES
      </Link>

      <Link
        href={"/services?name=INSPECTION"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        INSPECTION SERVICES
      </Link>

      <Link
        href={"/services?name=TURRET"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        TURRET PUNCHING
      </Link>
      <Link
        href={"/services?name=BENDING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        BENDING
      </Link>
      <Link
        href={"/services?name=ROLLING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        ROLLING
      </Link>

      <Link
        href={"/services?name=WELDING"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        WELDING
      </Link>

      <Link
        href={"/services?name=CNC_PLASMA"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CNC PLASMA CUTTING
      </Link>

      <Link
        href={"/services?name=WATERJET"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        WATERJET CUTTING
      </Link>

      <Link
        href={"/services?name=BANDSAW"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        BANDSAW CUTTING
      </Link>

      <Link
        href={"/services?name=RADIAL"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        RADIAL DRILLING
      </Link>
    </motion.div>
  );
};

interface props {
  isToggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmenuItemIndustree = () => {
  return (
    <motion.div
      variants={item.variants}
      transition={item.transition}
      className="text-black text-left  py-3 mt-4  px-2 text-sm rounded-xl flex flex-col gap-4 bg-white min-w-[250px]"
    >
      <Link
        href="/industries?name=PETROCHEMICAL"
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        PETROCHEMICAL INDUSTRY
      </Link>
      <Link
        href={"/industries?name=CONSTRUCTION"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        CONSTRUCTION INDUSTRY
      </Link>
      <Link
        href={"/industries?name=ORIGINAL"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        ORIGINAL EQUIPMENT MANUFACTURERS
      </Link>
      <Link
        href={"/industries?name=PRECISION"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        PRECISION ENGINEERING INDUSTRY
      </Link>
      <Link
        href={"/industries?name=OILGAS"}
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        OIL AND GAS
      </Link>

      <Link
        href="/industries?name=DEFENSEANDAEROSPACE"
        className="hover:scale-105 transition-all duration-300 ease-linear"
      >
        DEFENSE AND AEROSPACE
      </Link>
    </motion.div>
  );
};
const NavBar: React.FC<props> = ({ isToggled, setToggle }) => {
  const [isHover, toggleHover] = React.useState(false);
  const [isHoverIndustree, toggleHoverIndustree] = React.useState(false);
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
  const toggleHoverIndustreeFunction = () => {
    toggleHoverIndustree(!isHoverIndustree);
  };

  return (
    <>
      <div
        className={`flex text-${textColor} ${
          bgColor ? "bg-" : "bg-white"
        } items-center font-Barlow  h-full w-full`}
      >
        <nav className="  w-full  z-[1000]  inset-0 ">
          <div className="flex md:container md:px-0 px-2 items-center justify-between md:mx-auto ">
            <Link href={"/"}>
              <p className="font-extrabold  pt-4 pb-4   text-2xl">
                <img src="/footer.png" alt="" className="h-[60px]" />
              </p>
            </Link>
            <div className="flex gap-2 md:gap-4 font-medium">
              <div className=" text-lg font-Barlow font-medium  hover:cursor-pointer">
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
                    className="absolute bottom-[100]  z-[20000]"
                  >
                    <SubmenuItemService />
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                onHoverStart={toggleHoverIndustreeFunction}
                onHoverEnd={toggleHoverIndustreeFunction}
                className=" text-lg font-medium hover:cursor-pointer"
              >
                <Link
                  href={"/industries"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  INDUSTRIES
                </Link>

                {isHoverIndustree && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    variants={menu}
                    className="absolute bottom-[100] z-[20000]"
                  >
                    <SubmenuItemIndustree />
                  </motion.div>
                )}
              </motion.div>

              <div className=" text-lg font-medium hover:cursor-pointer">
                <Link
                  href={"/facility"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  FACILITIES
                </Link>
              </div>

              {/* <div className=" text-lg font-medium hover:cursor-pointer">
                <Link
                  href={"/BLOGS"}
                  className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                >
                  BLOGS
                </Link>
              </div> */}
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
