"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BentoGridDemo } from "./Accenti";
import LineWithAnimation from "./LineWithAnimation";
import { TypewriterEffectSmoothDemo } from "./TypeWriteEffect";
import FirstSectionSolving from "./components/FirstSectionSolving";
import SecondSectionCard from "./components/SecondSectionCard";
import ThirdSectionWhatWeBeilive from "./components/ThirdSectionWhatWeBeilive";
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [div1Loaded, setDiv1Loaded] = useState(false);
  const [div2Loaded, setDiv2Loaded] = useState(false);
  const [div3Loaded, setDiv3Loaded] = useState(false);
  const [div4Loaded, setDiv4Loaded] = useState(false);

  useEffect(() => {
    const animateBackground = async () => {
      // Animate the first div

      // Set loaded to true to trigger background color change
      const timer1 = setTimeout(() => {
        setDiv1Loaded(true);
      });
      setTimeout(() => {
        clearTimeout(timer1);
        setDiv1Loaded(false);
      }, 8000);

      const timer2 = setTimeout(() => {
        setDiv2Loaded(true);
      }, 8000);
      setTimeout(() => {
        clearTimeout(timer2);
        setDiv2Loaded(false);
      }, 16000);

      const timer3 = setTimeout(() => {
        setDiv3Loaded(true);
      }, 16000);
      setTimeout(() => {
        clearTimeout(timer3);
        setDiv3Loaded(false);
      }, 24000);

      // const timer4 = setTimeout(() => {
      //   setDiv4Loaded(true);
      // }, 24000);
      setTimeout(() => {
        setDiv4Loaded(false);
        animateBackground(); // Restart the animation cycle
      }, 24000);
    };

    animateBackground();
  }, []);

  return (
    <>
      {" "}
      <main className="flex">
        <main className="flex font-Anta flex-col  justify-between ">
          <section className=" text-white font-semibold font-Saira bg-black relative">
            <motion.div
              key={`${div1Loaded}${div2Loaded}${div3Loaded}${div4Loaded}`}
              className="h-screen bg-black"
              style={{
                backgroundImage: `url(${
                  div1Loaded
                    ? "/slider/one.jpg"
                    : div2Loaded
                    ? "/slider/2.jpg"
                    : "/slider/3.jpg"
                })`,
                backgroundSize:
                  div1Loaded || div2Loaded || div3Loaded ? "120%" : "110%",
                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              {div1Loaded && (
                <motion.div
                  key="div1"
                  initial={{ opacity: 0, y: -200, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-screen  flex flex-col justify-evenly"
                >
                  <div className=" flex justify-center font-Montserrat">
                    <div className="flex flex-col basis-[80%] justify-center">
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        A Glorious Legacy of Experience
                        <br /> And Expertise
                      </div>
                      <div className="flex items-center">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-black group-hover:text-white">
                            Learn More
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {div2Loaded && (
                <motion.div
                  key="div1"
                  initial={{ opacity: 0, y: -200, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-screen  flex flex-col justify-evenly"
                >
                  <div className=" flex justify-center">
                    <div className="flex flex-col basis-[80%] justify-center">
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        A Global Machine Shop <br /> For all your need
                      </div>
                      <div className="flex items-center font-Montserrat">
                        <div className="flex ">
                          <div className="flex items-center">
                            <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                              <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                              <span className="relative text-black group-hover:text-white">
                                Learn More
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {div3Loaded && (
                <motion.div
                  key="div1"
                  initial={{ opacity: 0, y: -200, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-screen  flex flex-col justify-evenly"
                >
                  <div className=" flex justify-center">
                    <div className="flex flex-col basis-[80%] justify-center">
                      <div>Titles one and two</div>
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        Credibility Rooted in <br /> Proven Reliability
                      </div>
                      <div className="flex items-center font-Montserrat">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-black group-hover:text-white">
                            Learn More
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
            <div className="absolute z-[1000] bottom-[5%] w-full">
              <div className="flex justify-center  items-end h-full   w-full">
                <LineWithAnimation
                  loaded={loaded}
                  setLoaded={setLoaded}
                  div1Loaded={div1Loaded}
                  setDiv1Loaded={setDiv1Loaded}
                  div2Loaded={div2Loaded}
                  setDiv2Loaded={setDiv2Loaded}
                  div3Loaded={div3Loaded}
                  setDiv3Loaded={setDiv3Loaded}
                  div4Loaded={div4Loaded}
                  setDiv4Loaded={setDiv4Loaded}
                />
              </div>
            </div>
          </section>

          <section>
            <div className=" bg-gray-50 flex justify-center items-center">
              <section className="bg-cover basis-[80%] bg-center py-32 w-full">
                <div className=" text-left text-black">
                  <div className="flex items-center gap-8">
                    <div className="w-1/2">
                      <img
                        src="/serv.jpg"
                        className="h-96 w-full object-cover rounded-xl"
                        alt="Layout Image"
                      />
                    </div>
                    <motion.div
                      initial={{
                        x: 200,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "linear",
                      }}
                      viewport={{ once: true }}
                      className="w-1/2"
                    >
                      <h1 className="text-4xl font-medium mb-6">
                        SOLVING WITH PRECISION
                      </h1>
                      <p className="font-Montserrat mb-12">
                        Perfect Tools is your trusted & reliable manufacturing
                        solution provider, your one cnc machine shop – one stop
                        for all your machining & heat treatment requirements. We
                        are an API Q1, ISO 9001 QMS Certified Job Shop holding
                        two Monogram Licences (API 7-1 & API 5CT). Our
                        state-of-the-art manufacturing facilities located
                        strategically in Dubai offer comprehensive manufacturing
                        support to various OEMs around the world meeting their
                        needs and specifications.
                      </p>
                      <div className="flex items-center font-Montserrat">
                        <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-black group-hover:text-white">
                            Learn More
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className=" bg-gray-50 flex justify-center items-center">
            <section className="bg-cover  bg-center  w-full">
              <div className=" text-left text-black">
                <div className="flex items-center bg-black">
                  <div className="w-1/2 flex flex-wrap justify-end gap-x-8 gap-y-14 text-white">
                    <div className="flex justify-end ">
                      <img
                        src="/worker.png"
                        className="w-[100px] h-[100px]"
                        alt=""
                      />
                      <p className="w-[200px]">
                        <span className="text-2xl">30 + </span> <br />{" "}
                        <span className="text-sm">
                          YEARS OF INDUSTRY <br /> EXPERIENCE
                        </span>
                      </p>
                    </div>
                    <div className="flex  ">
                      <img
                        src="/worker.png"
                        className="w-[100px] h-[100px]"
                        alt=""
                      />
                      <p className="w-[200px]">
                        <span className="text-4xl">26 K+ </span> <br />{" "}
                        <span className="text-base">
                          CNC MACHINE <br />
                          HOURS PER MONTH
                        </span>
                      </p>
                    </div>
                    <div className="flex  ">
                      <img
                        src="/worker.png"
                        className="w-[100px] h-[100px]"
                        alt=""
                      />
                      <p className="w-[200px]">
                        <span className="text-4xl">260 + </span> <br />{" "}
                        <span className="text-base">
                          SKILLED & SEASONED <br /> STAFF
                        </span>
                      </p>
                    </div>
                    <div className="flex  ">
                      <img
                        src="/worker.png"
                        className="w-[100px] h-[100px]"
                        alt=""
                      />
                      <p className="w-[200px]">
                        <span className="text-4xl">1994</span> <br />{" "}
                        <span className="text-base">
                          A HISTORY OF <br /> EXPERTISE & WEALTH <br /> OF
                          KNOWLEDGE
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-16">
                    <img
                      src="/serv2.jpg"
                      className="h-96 w-full object-cover "
                      alt="Layout Image"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="flex bg-[#f2f2f2]  justify-center w-full">
            <FirstSectionSolving />
          </section>

          {/* <section className="py-14">
              <SuggestedCarousel />
            </section> */}

          <section className="flex flex-col  py-16 pb-24 justify-center w-full">
            <div className="flex justify-center relative w-full">
              {" "}
              <div className="w-full basis-[70%] font- text-sm pt-9 pb-">
                <div className=" w-full basis-[80%]  text-4xl font-medium  pb-28">
                  OUR SERVICES
                </div>
              </div>
              <div className="   w- -4 flex justify-center pt-8 ">
                {" "}
                <div className="flex  font-Montserrat">
                  <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                    <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="basis-[80%] px-16 flex container mx-auto">
              <BentoGridDemo />
            </div>
          </section>

          <section
            // style={{
            //   backgroundImage: `url(${"/blur.jpeg"})`,
            //   backgroundPosition: "center",
            //   backgroundSize: "",
            //   backgroundRepeat: "no-repeat",
            // }}
            className="flex  justify-center bg-[#f2f2f2]  w-full"
          >
            <SecondSectionCard />
          </section>

          {/* <section className="flex justify-center w-full">
                    <LayoutGridDemo />
              </section> */}

          {/* <section className="flex justify-center w-full">
              <HeroScrollDemo />
            </section> */}

          <section className="flex justify-center w-full">
            <ThirdSectionWhatWeBeilive />
          </section>

          <section
            style={{
              backgroundImage: `url("/slider/3.jpg")`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex py-32 justify-center  w-full"
          >
            <TypewriterEffectSmoothDemo />
          </section>
        </main>
      </main>
      {/*................................................ phone view without smooth scroll ..................................*/}
    </>
  );
}
