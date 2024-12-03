"use client";
import React from "react";
import { motion } from "framer-motion";

function Page() {
  return (
    <div>
      {/* Background section with motion */}
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

      {/* PDF Embed section */}
      <div className="flex flex-wrap justify-center py-8 gap-14 mt-8">
        <div className="flex flex-col md:flex- shadow-2xl items-center">
          <img
            src="/pdf1.jpg"
            alt="Image DF1"
            className="w-full max-w-md"
            style={{ maxHeight: "1200px", objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col md:flex- shadow-2xl items-center">
          <img
            src="/pdf2.jpg"
            alt="Image PDF2"
            className="w-full max-w-md"
            style={{ maxHeight: "1200px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
