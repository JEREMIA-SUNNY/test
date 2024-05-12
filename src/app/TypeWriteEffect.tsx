"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Contact  ",
    },
    {
      text: "Us ",
    },
    {
      text: "Lets Work Together",
    },
    {
      text: "with",
    },
    {
      text: "Tseek",
      className: "text-BlueTNF dark:text-BlueTNF",
    },
  ];
  return (
    <div className="flex flex-col items-center  h-[rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Environmental protection
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  gap-8 space-x-0 md:space-x-4">
        <Link href={"/contact-us"} className="flex  items-center">
          <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
            <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative font-semibold text-greenTNF font-Barlow group-hover:text-white">
              Contact Us
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
