import * as React from "react";

export const ImageCarousel = () => {
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
  const leftIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white  transform rotate-180"
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
    <>
      <div className="carousel h-full w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/mech3.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide4"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full hover:bg-greenTNF flex justify-center items-center">
                {leftIcon}
              </div>
            </a>
            <a
              href="#slide2"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-greenTNF  hover:scale-110 transition-all duration-500 ease-linear"
            >
              <div className=" rounded-full  hover:bg-greenTNF  flex justify-center items-center">
                {rightIcon}
              </div>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/mech2.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide1"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full hover:bg-greenTNF flex justify-center items-center">
                {leftIcon}
              </div>
            </a>
            <a
              href="#slide3"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full  hover:bg-greenTNF  flex justify-center items-center">
                {rightIcon}
              </div>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/mech4.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide2"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full hover:bg-greenTNF flex justify-center items-center">
                {leftIcon}
              </div>
            </a>
            <a
              href="#slide4"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full  hover:bg-greenTNF  flex justify-center items-center">
                {rightIcon}
              </div>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/mech5.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide3"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full hover:bg-greenTNF flex justify-center items-center">
                {leftIcon}
              </div>
            </a>
            <a
              href="#slide1"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear "
            >
              <div className=" rounded-full  hover:bg-greenTNF  flex justify-center items-center">
                {rightIcon}
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
