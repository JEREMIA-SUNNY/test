import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";

function ThirdSectionWhatWeBeilive() {
  const data = [
    {
      text: " BTA DRILLING, GUN DRILLING & HONING",
      image: "/eng.jpg",
    },
    {
      text: "CYLINDRICAL & SURFACE GRINDING",
      image: "/construction.jpg",
    },
    {
      text: "CNC TURNING",
      image: "/mech4.jpg",
    },
  ];
  return (
    <div className="basis-[90%]  pt-16 pb-12">
      <div className="ml-24 pb-8">
        <div className="text-2xl">Blogs </div>
      </div>
      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between rounded-b-full py-8 gap-4 w-full basis-[90%]">
            {data.map((item) => (
              <div className="card   card-compact  h-[500px] relative  hover:scale-105 transition-all duration-500  ">
                <figure className="absolute rounded-b-2xl">
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-b-2xl brightness-50 hover:scale-110 transition-all duration-500 w-full h-[500px]  object-cover"
                  />
                </figure>
                <div className="Z-[1000] absolute bottom-0 px-4 text-white py-4">
                  <div className=" mt-2">
                    <div className=" font-medium text-xl pb-3">
                      {" "}
                      {item.text}
                    </div>{" "}
                    <div className=" font-medium font-Montserrat">
                      {" "}
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                  <div className="flex pt-4 jus items-center">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSectionWhatWeBeilive;
