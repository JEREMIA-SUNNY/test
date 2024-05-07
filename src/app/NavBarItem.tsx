import React from "react";
import { motion } from "framer-motion";

interface prop {
  isToggled: boolean;
}

const Navbar: React.FC<prop> = ({ isToggled }) => {
  const items = [
    {
      imageUrl: "/service/brp.jpg",
      Url: "",
      Title: "BTA DRILLING, GUNDRILLING & HONING",
    },
    { imageUrl: "/mech2.jpg", Url: "", Title: "CNC TURNING" },
    {
      imageUrl: "/mech3.jpg",
      Url: "",
      Title: "HEAT TREATMENT & CASE HARDENING",
    },
    { imageUrl: "/mec1.jpg", Url: "", Title: "CYLINDRICAL & SURFACE GRINDING" },
    { imageUrl: "/mech4.jpg", Url: "", Title: "REPAIR AND OVERHAUL" },
    { imageUrl: "/mech5.jpg", Url: "", Title: "OEM" },
    {
      imageUrl: "/auto.jpg",
      Url: "",
      Title: "AUTOMOTIVE",
    },
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className="min-h-[95vh] w-[400px] gap-10 items-center  pt-14 flex flex-col "
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
        transition={{ duration: 5 }}
      >
        <div className="text-white text-2xl  font-Anta">OUR SERVICES</div>
        {items.map((item,i) => (
          <motion.li className="nav-item " variants={navItem} key={i}>
            <div className="flex  gap-4 transition-all duration-500 hover:scale-110 ease-linear px-2 justify-center">
              <div className="w-[30%]">
                <img
                  src={item.imageUrl}
                  className="w-[150px]  transition-all duration-500 hover:scale-125 ease-out rounded-l-xl object-cover h-[60px]"
                  alt=""
                />
              </div>

              <div className=" w-[50%] min-w-[250px] text-left text-sm font-Montserrat">
                <div>{item.Title}</div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
