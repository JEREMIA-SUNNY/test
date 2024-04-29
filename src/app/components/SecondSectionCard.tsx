import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TextGenerateEffectDemoTwo } from "../OxygenEffect2";
function SecondSectionCard() {
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="mr-20 pb-8">
        <div className="text-2xl pb-3 text-end ">OUR INDUSTRIAL VERTICALS</div>
      </div>

      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full rounded-b-full py-8 gap-20  basis-[90%]">
            <div className="card rounded-3xl bg-white card-compact hover:scale-105 transition-all duration-500 w-[300px] h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/petro.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="  mt- rounded-xl px-4 bg-white">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Petrochemical Industry
                </div>{" "}
                <div className="flex gap-3 pb-2 text-[#2893ba]">
                  <div className="flex justify-center items-center">
                    <FaLongArrowAltRight />
                  </div>{" "}
                  Learn More{" "}
                </div>
              </div>
            </div>
            <div className="card  hover:scale-105 transition-all duration-500 bg-white card-compact w-[300px] h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/construction.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Construction Industry
                </div>{" "}
                <div className="flex gap-3  pb-2 text-[#2893ba]">
                  <div className="flex justify-center items-center">
                    <FaLongArrowAltRight />
                  </div>{" "}
                  Learn More{" "}
                </div>
              </div>
            </div>

            <div className="card  hover:scale-105 transition-all duration-500 bg-white card-compact w-[300px] h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/equi.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Original Equipment Manufacturers
                </div>{" "}
                <div className="flex gap-3  pb-2 text-[#2893ba]">
                  <div className="flex justify-center items-center">
                    <FaLongArrowAltRight />
                  </div>{" "}
                  Learn More{" "}
                </div>
              </div>
            </div>

            <div className="card  hover:scale-105 transition-all duration-500 bg-white card-compact w-[300px] h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/eng.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[300px] hover:scale-110 transition-all duration-500 h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Precision Engineering Industry
                </div>{" "}
                <div className="flex gap-3  pb-2 text-[#2893ba]">
                  <div className="flex justify-center items-center">
                    <FaLongArrowAltRight />
                  </div>{" "}
                  Learn More{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSectionCard;
