import React from "react";
import { TextGenerateEffectDemo } from "../OxygenEffect";
import Link from "next/link";

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
    {
      text: "CNC TURNING",
      image: "/auto.jpg",
    },
  ];
  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="basis-[80%]  pt-16 pb-12">
      <div className="px-8 flex justify-between pb-8">
        <div className="text-4xl font-medium">BLOGS</div>

        <Link href={"/BLOGS"} className="flex  font-Barlow">
          <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
            <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative font-semibold text-greenTNF group-hover:text-white">
              Learn More
            </span>
          </button>
        </Link>
      </div>
      <div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-between rounded-b-full py-8 gap-4 w-full basis-[90%]">
            {data.map((item, i) => (
              <Link
                href={"/BLOGS"}
                key={i}
                className="card   card-compact  h-[500px] relative  hover:scale-105 transition-all duration-500  "
              >
                <figure className="absolute rounded-b-2xl">
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-b-2xl brightness-50 hover:scale-110 transition-all duration-500 w-full h-[450px]  object-cover"
                  />
                </figure>
                <div className="Z-[1000] absolute bottom-0 mb-8 px-4 text-white py-4">
                  <div className=" mt-2">
                    <div className=" font-medium text-xl pb-3">
                      {" "}
                      {item.text}
                    </div>{" "}
                    <div className=" font-medium font-Barlow">
                      {" "}
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                  <div className="flex pt-4 jus items-center">
                    <div className=" rounded-full w-[60px]  h-[60px] flex justify-center items-center">
                      {rightIcon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSectionWhatWeBeilive;
