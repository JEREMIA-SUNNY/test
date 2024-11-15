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
      <div className="flex flex-col items-center mt-8 space-y-6">
        <iframe
          src="/pdf/one.pdf#toolbar=0"
          width="90%"
          height="1200px"
          title="Embedded PDF One"
        ></iframe>
        <iframe
          src={`/pdf/two.pdf#toolbar=0`}
          width="90%"
          height="1200px"
          title="Embedded PDF One"
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
