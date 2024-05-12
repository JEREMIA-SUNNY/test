"use client";
import { motion } from "framer-motion";
import React from "react";
import { FacilityBentoDemo } from "../facility";

function Service() {
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
          initial={{
            x: -500,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="text-3xl font-Barlow text-white"
        >
          FACILITIES
        </motion.div>
      </div>
      <section className="flex justify-center py-8">
        <div className="basis-[80%]">
          <FacilityBentoDemo />
        </div>
      </section>
    </>
  );
}

export default Service;
