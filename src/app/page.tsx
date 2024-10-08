"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BentoGridDemo } from "./Accenti";
import LineWithAnimation from "./LineWithAnimation";
import { TypewriterEffectSmoothDemo } from "./TypeWriteEffect";
import FirstSectionSolving from "./components/FirstSectionSolving";
import SecondSectionCard from "./components/SecondSectionCard";
import ThirdSectionWhatWeBeilive from "./components/ThirdSectionWhatWeBeilive";
import Link from "next/link";
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
        <main className="flex font-Barlow flex-col  justify-between ">
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
                  <div className=" flex justify-center font-Barlow">
                    <div className="flex flex-col basis-[80%] justify-center">
                      <div className="text-4xl font-Barlow  pt-8 pb-8 font-extrabold">
                        A Glorious Legacy of Experience
                        <br /> And Expertise
                      </div>
                      <div className="flex items-center">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-greenTNF group-hover:text-white">
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
                      <div className="text-4xl font-Barlow pt-8 pb-8 font-extrabold">
                        A Global Machine Shop <br /> For all your need
                      </div>
                      <div className="flex items-center font-Barlow">
                        <div className="flex ">
                          <div className="flex items-center">
                            <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                              <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                              <span className="relative text-greenTNF group-hover:text-white">
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
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        Credibility Rooted in <br /> Proven Reliability
                      </div>
                      <div className="flex items-center font-Barlow">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-greenTNF group-hover:text-white">
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

          {/* <section>
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
                      <p className="font-Barlow mb-12">
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
                      <div className="flex items-center font-Barlow">
                        <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                          <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative font-semibold text-greenTNF group-hover:text-white">
                            Learn More
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </section> */}
          <section className="flex flex-col bg-[#f2f2f2]  py-16 pb-24 justify-center w-full">
            <div className="flex justify-center relative w-full">
              {" "}
              <div className="w-full basis-[70%] font- text-sm pt-9 pb-">
                <div className=" w-full basis-[80%]  text-3xl font-medium  pb-16">
                  OUR SERVICES
                </div>
              </div>
              <div className="   w- -4 flex justify-center pt-8 ">
                {" "}
                <Link href={"/services"} className="flex  font-Barlow">
                  <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                    <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative font-semibold text-greenTNF group-hover:text-white">
                      Learn More
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-[80%] px-16 flex container mx-auto">
              <BentoGridDemo />
            </div>
          </section>
          <div className="flex flex-col justify-center  items-center">
            <div className="text-3xl font-medium mb-6 pt-8 pb-10">
              OUR CLIENTS
            </div>

            <section className="custom-scroll-section pb-24">
              <div className="custom-scroll-banner" id="customScrollBanner">
                <div className="custom-scroll-container">
                  <ul className="custom-scroll-list">
                    <li className="custom-scroll-item">
                      <img src="/one.png" alt="Client Logo 1" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/two.png" alt="Client Logo 2" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/three.png" alt="Client Logo 3" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/four.png" alt="Client Logo 4" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/five.png" alt="Client Logo 5" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/six.png" alt="Client Logo 6" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/seven.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/eight.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/nine.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/ten.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/11.png" alt="Client Logo 11" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/12.png" alt="Client Logo 7" />
                    </li>
                  </ul>
                </div>
                <div className="custom-scroll-container">
                  <ul className="custom-scroll-list">
                    <li className="custom-scroll-item">
                      <img src="/one.png" alt="Client Logo 1" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/two.png" alt="Client Logo 2" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/three.png" alt="Client Logo 3" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/four.png" alt="Client Logo 4" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/five.png" alt="Client Logo 5" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/six.png" alt="Client Logo 6" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/seven.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/eight.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/nine.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/ten.png" alt="Client Logo 7" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/11.png" alt="Client Logo 11" />
                    </li>
                    <li className="custom-scroll-item">
                      <img src="/12.png" alt="Client Logo 7" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section className="flex bg-[#f2f2f2]  justify-center w-full">
            <FirstSectionSolving />
          </section>

          <section className="flex  justify-center bg-white  w-full">
            <SecondSectionCard />
          </section>

          {/* <section className="flex justify-center w-full">
            <ThirdSectionWhatWeBeilive />
          </section> */}

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
