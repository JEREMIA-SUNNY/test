"use client";
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
      text: "Iron man",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center  h-[rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Environmental protection
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  gap-8 space-x-0 md:space-x-4">
        <div className="flex items-center">
          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Join now
            </span>
          </button>
        </div>

        <div className="flex items-center">
          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Sign up
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
