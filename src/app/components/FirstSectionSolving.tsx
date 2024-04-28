import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";
import { motion, useMotionValue } from "framer-motion";

function FirstSectionSolving() {
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="ml-24 pb-8">
        <div className="text-sm pb-3">DISCOVER ARAMCO</div>
        <TextGenerateEffectDemo />
      </div>

      <div>
        <div className="flex w-full justify-center">
          <div className="flex justify-between rounded-b-full py-8 gap-4 w-full basis-[90%]">
            <motion.div
              whileInView={{ x: -0 }}
              animate={{ x: -200 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 10,
              }}
              className="card  card-compact w-[354px] h-[500px]  bg-base-100 shadow-xl"
            >
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[354px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="absolute ml-5 mt-8">
                <div className="text-white font-medium text-2xl">
                  {" "}
                  Sustainability
                </div>{" "}
                <div className="text-white font-medium ">
                  {" "}
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-full w-[70px] border-4  h-[70px]">
                <motion.div
                  initial={{ x: -40 }} // Starting position off-screen to the left
                  animate={{ x: 0 }} // Ending position at 0 (default)
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-full items-center justify-center"
                >
                  <motion.img
                    src="/arrorw.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: -0 }}
              animate={{ x: -200 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 10,
              }}
              className="card  card-compact w-[354px] h-[500px]  bg-base-100 shadow-xl"
            >
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[354px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="absolute ml-5 mt-8">
                <div className="text-white font-medium text-2xl">
                  {" "}
                  Sustainability
                </div>{" "}
                <div className="text-white font-medium ">
                  {" "}
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-full w-[70px] border-4  h-[70px]">
                <motion.div
                  initial={{ x: -40 }} // Starting position off-screen to the left
                  animate={{ x: 0 }} // Ending position at 0 (default)
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-full items-center justify-center"
                >
                  <motion.img
                    src="/arrorw.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="card  card-compact w-[354px] h-[500px]  bg-base-100 shadow-xl"
            >
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[354px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="absolute ml-5 mt-8">
                <div className="text-white font-medium text-2xl">
                  {" "}
                  Sustainability
                </div>{" "}
                <div className="text-white font-medium ">
                  {" "}
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-full w-[70px] border-4  h-[70px]">
                <motion.div
                  initial={{ x: -40 }} // Starting position off-screen to the left
                  animate={{ x: 0 }} // Ending position at 0 (default)
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-full items-center justify-center"
                >
                  <motion.img
                    src="/arrorw.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="card  card-compact w-[354px] h-[500px]  bg-base-100 shadow-xl"
            >
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[354px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="absolute ml-5 mt-8">
                <div className="text-white font-medium text-2xl">
                  {" "}
                  Sustainability
                </div>{" "}
                <div className="text-white font-medium ">
                  {" "}
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-full w-[70px] border-4  h-[70px]">
                <motion.div
                  initial={{ x: -40 }} // Starting position off-screen to the left
                  animate={{ x: 0 }} // Ending position at 0 (default)
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-full items-center justify-center"
                >
                  <motion.img
                    src="/arrorw.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSectionSolving;
