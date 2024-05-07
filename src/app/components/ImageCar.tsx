import * as React from "react";

export const ImageCarousel = () => {
  return (
    <>
      <div className="carousel h-full w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/mech3.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide4"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/mech2.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide1"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/mech4.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide2"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/mech5.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/3 left-2 right-2 top-1/2">
            <a
              href="#slide3"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-linear bg-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
