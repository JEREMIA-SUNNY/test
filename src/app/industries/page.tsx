"use client";
import React from "react";
import { motion } from "framer-motion";
const ContactUs = () => {
  const items = [
    {
      title: "BTA DRILLING, GUNDRILLING & HONING",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: "/service/brp.jpg",
    },
    {
      title: "CNC TURNING",
      description: "Dive into the transformative power of technology.",
      header: "/mech2.jpg",
    },
    {
      title: "HEAT TREATMENT & CASE HARDENING",
      description: "Discover the beauty of thoughtful and functional design.",
      header: "/mech3.jpg",
    },
    {
      title: "CYLINDRICAL & SURFACE GRINDING",
      description:
        "Understand the impact of effective communication in our lives.",
      header: "/mec1.jpg",
    },
    {
      title: "REPAIR AND OVERHAUL",
      description: "Join the quest for understanding and enlightenment.",
      header: "/mech4.jpg",
    },
    {
      title: "OEM",
      description: "Experience the thrill of bringing ideas to life.",
      header: "/mech5.jpg",
    },
    {
      title: "AUTOMOTIVE",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: "/auto.jpg",
    },
  ];
  return (
    <>
      <div
        className="h-[600px] pt-8 flex justify-center items-center bg-black"
        style={{
          backgroundImage: `url(${"/slider/3.jpg"})`,
          backgroundSize: "120%",
          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-4xl font-Anta text-white"
        >
          INDUSTRIES SERVED
        </motion.div>
      </div>
      <div className="text-white pt-14 min-h-screen flex flex-col  bg-[#f2f2f2]">
        <div className="pb-40  flex flex-col">
          <div className="flex pb-12  justify-center ">
            {" "}
            <div className="flex justify-between   basis-[70%]">
              <div className="w-[80%] text-4xl font-Anta text-black flex-1">
                WE SERVE <br /> A WIDE VARIETY OF <br /> BUSINESS & SERVICE
                DOMAINS
              </div>
              <div className="font-Montserrat flex flex-col text-black gap-2 w-[40%]">
                <span className="">
                  {" "}
                  We offer the following services to our clients using the
                  latest generation of hi-tech machining centers.
                </span>
                <span>
                  In addition, we can design, manufacture and repair press
                  toolings, jigs, and fixtures to provide value-addition for our
                  clients.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <div className="grid grid-cols-4 basis-[70%] gap-x-4 gap-y-8 justify-center flex-wrap">
              {items.map((item, index) => (
                <div
                  className=" rounded-2xl hover:scale-110 transition-all duration-500 ease-linear "
                  key={index}
                >
                  <div>
                    <img
                      src={item.header}
                      className="min-h-[300px] object-cover "
                      alt=""
                    />
                  </div>

                  <div className="bg-white rounded-b-2xl pt-4 px-4 min-h-[120px] text-black">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
