import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";

function ThirdSectionWhatWeBeilive() {
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="ml-24 pb-8">
        <div className="text-sm pb-3">OUR SOLUTIONS</div>

        <div className="text-2xl"> OUR SERVICES</div>
        <TextGenerateEffectDemo />
      </div>
      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-3 justify-between rounded-b-full py-8 gap-4 w-full basis-[90%]">
            <div className="card  card-compact  h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-full h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    BTA DRILLING, GUN DRILLING & HONING
                  </div>{" "}
                  <div className="text-black font-medium ">
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

            <div className="card  card-compact  h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-full h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    CYLINDRICAL & SURFACE GRINDING
                  </div>{" "}
                  <div className="text-black font-medium ">
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

            <div className="card  card-compact  h-[500px]   ">
              <figure className="relative rounded-b-2xl">
                <img
                  src="/one.jpg"
                  alt="Shoes"
                  className="rounded-b-2xl w-full h-[500px] brightness-75 object-cover"
                />
              </figure>
              <div className="">
                <div className=" mt-2">
                  <div className="text-black font-medium text-xl pb-3">
                    {" "}
                    CNC TURNING
                  </div>{" "}
                  <div className="text-black font-medium ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSectionWhatWeBeilive;
