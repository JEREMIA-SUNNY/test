import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TextGenerateEffectDemoTwo } from "../OxygenEffect2";
import Link from "next/link";
function SecondSectionCard() {
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="flex justify-center relative w-full">
        {" "}
        <div className="w-full basis-[80%] font- text-sm pt-9 pb-">
          <div className=" w-full basis-[0%]  text-3xl font-medium  pb-16">
            OUR INDUSTRIES
          </div>
        </div>
        <div className="   w- -4 flex justify-center pt-8 ">
          {" "}
          <Link href={"/industries"} className="flex  font-Barlow">
            <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-[#f2f2f2] text-base shadow">
              <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative font-semibold text-greenTNF group-hover:text-white">
                Learn More
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full rounded-b-full py-8 gap-20   basis-[90%]">
            <div className="card rounded-3xl bg-[#f2f2f2] card-compact hover:scale-105 transition-all duration-500 w-[300px] h-[450px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/petro.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[450px] brightness-75 object-cover"
                />
              </figure>
              <div className="rounded-xl px-4 bg-[#f2f2f2] pb-2">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Petrochemical Industry
                </div>{" "}
              </div>
            </div>
            <div className="card  hover:scale-105 transition-all duration-500 bg-[#f2f2f2] card-compact w-[300px] h-[450px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/construction.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[450px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl pb-2 px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Construction <br /> Industry
                </div>{" "}
              </div>
            </div>

            <div className="card  hover:scale-105 transition-all duration-500 bg-[#f2f2f2] card-compact w-[300px] h-[450px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/equi.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-[300px] h-[450px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl pb-2 px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Original Equipment Manufacturers
                </div>{" "}
              </div>
            </div>

            <div className="card  hover:scale-105 transition-all duration-500 bg-[#f2f2f2] card-compact w-[300px] h-[450px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/eng.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-[300px] hover:scale-110 transition-all duration-500 h-[450px] brightness-75 object-cover"
                />
              </figure>
              <div className="  rounded-xl pb-2 px-4">
                <div className="text-black mt-4 font-medium text-2xl">
                  {" "}
                  Precision Engineering Industry
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSectionCard;
