import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";

function ThirdSectionWhatWeBeilive() {
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="ml-24 pb-8">
        <div className="text-sm pb-3">Stay Updated to our Blogs</div>

        <div className="text-2xl">Blogs </div>
      </div>
      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between rounded-b-full py-8 gap-4 w-full basis-[90%]">
            <div className="card   card-compact  h-[500px]  hover:scale-105 transition-all duration-500  ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/eng.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl hover:scale-110 transition-all duration-500 w-full h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    BTA DRILLING, GUN DRILLING & HONING
                  </div>{" "}
                  <div className="text-black font-medium font-Montserrat">
                    {" "}
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="flex items-center">
                  <div className=" rounded-full w-[60px] border-4  h-[60px] flex justify-center items-center">
                    <img
                      src="/arrorw.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card  card-compact  h-[500px]   hover:scale-105 transition-all duration-500 ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/construction.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl  hover:scale-110 transition-all duration-500 w-full h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    CYLINDRICAL & SURFACE GRINDING
                  </div>{" "}
                  <div className="text-black font-medium font-Montserrat ">
                    {" "}
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="flex items-center">
                  <div className=" rounded-full w-[60px] border-4  h-[60px] flex justify-center items-center">
                    <img
                      src="/arrorw.png"
                      className="w-[20px]  h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card  card-compact  h-[500px]  hover:scale-105 transition-all duration-500  ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/mech4.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-full hover:scale-110 transition-all duration-500 h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    CNC TURNING
                  </div>{" "}
                  <div className="text-black font-medium font-Montserrat">
                    {" "}
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="flex items-center">
                  <div className=" rounded-full w-[60px] border-4  hover:scale-110 transition-all duration-500 h-[60px] flex justify-center items-center">
                    <img
                      src="/arrorw.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSectionWhatWeBeilive;
