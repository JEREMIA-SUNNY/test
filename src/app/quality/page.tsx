"use client";
import React from "react";
import { motion } from "framer-motion";
function page() {
  return (
    <div className="h-screen">
      {" "}
      <div
        className="h-[350px] pt-8 flex justify-center items-center bg-black"
        style={{
          backgroundImage: `url(${"/slider/3.jpg"})`,
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          viewport={{ once: true }}
          className="text-3xl pt-8 font-Barlow text-white"
        >
          QUALITY
        </motion.div>
      </div>
    </div>
  );
}

export default page;
