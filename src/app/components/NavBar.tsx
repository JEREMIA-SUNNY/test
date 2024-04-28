import React from "react";

function NavBar() {
  return (
    <div className="flex w-full">
      <nav className="  w-full pt-8 z-[1000]  inset-0 ">
        <div className="flex md:container md:px-0 px-2 items-center justify-between md:mx-auto ">
          <div>
            <p className="font-extrabold text-white  text-2xl">
              <span className="font-bold text-yellow-800">T</span>seek.
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 font-medium">
            <div className="text-white text-lg font-medium  hover:cursor-pointer">
              <span
                className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
              >
                About Us
              </span>
            </div>
            <div className="text-white text-lg font-medium hover:cursor-pointer ">
              <span
                className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
              >
                What's New
              </span>
            </div>
            <div className="text-white text-lg font-medium hover:cursor-pointer">
              <span
                className="bg-left-bottom text-base
               font-bah bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
              >
                Team
              </span>
            </div>
          </div>

          <div className="md:flex  hidden">
            <div className="text-white   px-5 shadow-xl  gap-1 hover:cursor-pointer hover:shadow-2xl flex justify-center  items-center py-4 rounded-lg rounded-r-lg">
              <button className="font-medium ">Contact Us</button>{" "}
              <div className="flex  rounded-full -2 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
