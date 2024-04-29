"use client";
import { BentoGridDemo } from "./Accenti";
import { LayoutGridDemo } from "./GridLayout";
import { HeroScrollDemo } from "./HeroScoreDemo";
import { TypewriterEffectSmoothDemo } from "./TypeWriteEffect";
import FirstSectionSolving from "./components/FirstSectionSolving";
import SecondSectionCard from "./components/SecondSectionCard";
import ThirdSectionWhatWeBeilive from "./components/ThirdSectionWhatWeBeilive";
import LineWithAnimationApps from "./LineWithAnimation";
import LineWithAnimation from "./LineWithAnimation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageWithDynamicHeight from "./components/ImageWithDynamicHeight";
import NavBar from "./components/NavBar";
import ScrollProgressBar from "./ScrollProgressBar";
import SmoothScroll from "./Smoothscroll.component";
import SuggestedCarousel from "./Slider";
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

      const timer4 = setTimeout(() => {
        setDiv4Loaded(true);
      }, 24000);
      setTimeout(() => {
        clearTimeout(timer4);
        setDiv4Loaded(false);
        animateBackground(); // Restart the animation cycle
      }, 32000);
    };

    animateBackground();
  }, []);

  return (
    <>
      {" "}
      <main className="md:flex hidden">
        <ScrollProgressBar />
        <SmoothScroll>
          {" "}
          <main className="flex font-Anta flex-col  justify-between ">
            <section className=" text-white font-semibold font-Saira bg-black relative">
              <div className="absolute z-[1000] top-0  h-[100px] w-full">
                {" "}
                <div className="w-full">
                  <NavBar />
                </div>
              </div>

              <motion.div
                key={`${div1Loaded}${div2Loaded}${div3Loaded}${div4Loaded}`}
                className="h-screen bg-black"
                style={{
                  backgroundImage: `url(${
                    div1Loaded
                      ? "/slider/one.jpg"
                      : div2Loaded
                      ? "/slider/2.jpg"
                      : div3Loaded
                      ? "/slider/3.jpg"
                      : "/slider/4.jpg"
                  })`,
                  backgroundSize:
                    div1Loaded || div2Loaded || div3Loaded || div4Loaded
                      ? "105%"
                      : "105%",
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
                    <div className=" flex justify-center">
                      <div className="flex flex-col basis-[80%] justify-center">
                        <div className="text-4xl pt-8 pb-8 font-extrabold">
                          A Glorious Legacy of Experience
                          <br /> And Expertise
                        </div>
                        <div className="flex items-center">
                          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-white group-hover:text-white">
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
                        <div className="flex items-center">
                          <div className="flex ">
                            <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                              <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                              <span className="relative text-white group-hover:text-white">
                                Learn More
                              </span>
                            </button>
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
                        <div className="flex items-center">
                          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-white group-hover:text-white">
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
                      <div className="w-1/2">
                        <p className="text-xs text-slate-600">
                          A RICH HISTORY OF EXPERTISE
                        </p>
                        <h1 className="text-5xl font-medium mb-6">
                          SOLVING WITH PRECISION
                        </h1>
                        <p className="font-Roboto mb-12">
                          Perfect Tools is your trusted & reliable manufacturing
                          solution provider, your one cnc machine shop – one
                          stop for all your machining & heat treatment
                          requirements. We are an API Q1, ISO 9001 QMS Certified
                          Job Shop holding two Monogram Licences (API 7-1 & API
                          5CT). Our state-of-the-art manufacturing facilities
                          located strategically in Dubai offer comprehensive
                          manufacturing support to various OEMs around the world
                          meeting their needs and specifications.
                        </p>
                        <div className="flex items-center">
                          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-white">
                              Learn More
                            </span>
                          </button>
                        </div>
                      </div>
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

            <section className="flex bg-[#f2f2f2] pb-12 justify-center w-full">
              <FirstSectionSolving />
            </section>

            {/* <section className="py-14">
              <SuggestedCarousel />
            </section> */}

            <section className="flex flex-col  py-16 pb-24 justify-center w-full">
              <div className="flex justify-center relative w-full">
                {" "}
                <div className="w-full basis-[70%] font- text-sm pt-9 pb-">
                  <div>OUR SOLUTIONS</div>
                  <div>
                    <img src="/nut.png" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div className=" w-full basis-[80%] font-bold text-4xl pt- pb-28">
                    OUR SERVICES
                  </div>
                </div>
                <div className="   w- -4 flex justify-center pt-8 ">
                  {" "}
                  <div className="flex ">
                    <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white  border-black text-lg shadow">
                      <div className="absolute inset-0 w-3 bg-black transition-all duration-[500ms] ease-out group-hover:w-full"></div>
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
              className="flex  justify-center bg-[#f2f2f2] ] w-full"
            >
              <SecondSectionCard />
            </section>

            {/* <section className="flex justify-center w-full">
                    <LayoutGridDemo />
              </section> */}

            <section className="flex justify-center w-full">
              <HeroScrollDemo />
            </section>

            <section className="flex justify-center w-full">
              <ThirdSectionWhatWeBeilive />
            </section>

            <section className="flex py-32 justify-center bg-[#f2f2f2] w-full">
              <TypewriterEffectSmoothDemo />
            </section>
          </main>
          <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </SmoothScroll>
        {/* {div1Loaded && <ImageWithDynamicHeight image="/two.jpg" height={1200} />}

{div2Loaded && (
<div>
  <ImageWithDynamicHeight image="/one.jpg" height={1200} />
</div>
)}
{div3Loaded && (
<div>
  <ImageWithDynamicHeight image="/three.jpg" height={1200} />
</div>
)}

{div4Loaded && (
<div>
  <ImageWithDynamicHeight image="/four.jpg" height={1200} />
</div>
)} */}
        {/* <section className="mobile text-white font-semibold font-Saira bg-white">
<div
  className="h-screen "
  style={{
    backgroundImage: `url(${"/three.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="h-screen flex flex-col justify-evenly">
    <div>sadsadd</div>

    <div className="flex justify-center flex-col items-center">
      <img className="w-1/2" src="/wysbryx_v.png" alt="logo" />
    </div>

    <div className="flex justify-center w-full">
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
</div>
</section> */}
      </main>
      {/*................................................ phone view without smooth scroll ..................................*/}
      <main className="md:hidden flex">
        {" "}
        <ScrollProgressBar />{" "}
        <main className="flex font-Anta flex-col  justify-between ">
          <section className=" text-white font-semibold font-Saira bg-black relative">
            <div className="absolute z-[1000] top-0  h-[100px] w-full">
              {" "}
              <div className="w-full">
                <NavBar />
              </div>
            </div>
            <motion.div
              key={`${div1Loaded}${div2Loaded}${div3Loaded}${div4Loaded}`}
              className="h-screen bg-black"
              style={{
                backgroundImage: `url(${
                  div1Loaded
                    ? "/one.jpg"
                    : div2Loaded
                    ? "/two.jpg"
                    : div3Loaded
                    ? "/three.jpg"
                    : "/four.jpg"
                })`,
                backgroundSize:
                  div1Loaded || div2Loaded || div3Loaded || div4Loaded
                    ? "100%"
                    : "100%",
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
                  <div className=" flex justify-center">
                    <div className="flex flex-col basis-[80%] justify-center">
                      <div>Titles one and two</div>
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        A glorious Legacy of Experience
                      </div>
                      <div className="flex items-center">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                          <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-white group-hover:text-white">
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
                      <div>Titles one and two</div>
                      <div className="text-4xl pt-8 pb-8 font-extrabold">
                        A global machine shop For all your need
                      </div>
                      <div className="flex items-center">
                        <div className="flex ">
                          <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                            <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-white group-hover:text-white">
                              Learn More
                            </span>
                          </button>
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
                        Credibility Rooted in Proven Reliability
                      </div>
                      <div className="flex items-center">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                          <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-white group-hover:text-white">
                            Learn More
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {div4Loaded && (
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
                        CREDIB L!TY OOTEDJN ÉIRE JABILITY PROV big title <br />{" "}
                        CREDIB L!TY OOTEDJN ÉIRE JABILITY PROV big title
                      </div>
                      <div className="flex items-center">
                        <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-slate-600 text-lg shadow">
                          <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-white group-hover:text-white">
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

          <section className="flex bg-[#f2f2f2] pb-12 justify-center w-full">
            <FirstSectionSolving />
          </section>

          <section className="py-14">
            <SuggestedCarousel />
          </section>
          <section className="flex bg-[#f2f2f2] justify-center pb-12 w-full">
            <SecondSectionCard />
          </section>

          <section className="flex flex-col bg-[#f2f2f2] py-16 pb-24 justify-center w-full">
            <div className="flex justify-center relative w-full">
              {" "}
              <div className="w-full basis-[80%] font- text-sm pt-9 pb-">
                <div>FACTORY & MACHINERY</div>
                <div className=" w-full basis-[80%] font-bold text-4xl pt- pb-28">
                  OUR FACILITIES
                </div>
              </div>
              <div className="   w- -4 flex justify-center pt-8 ">
                {" "}
                <div className="flex ">
                  <button className="group relative h-12 w- px-8 overflow-hidden rounded-lg bg-white  border-black text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-black transition-all duration-[500ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="basis-[80%] px-28 flex container mx-auto">
              <BentoGridDemo />
            </div>
          </section>

          <section className="flex justify-center w-full">
            <ThirdSectionWhatWeBeilive />
          </section>
          <section className="flex justify-center w-full">
            <HeroScrollDemo />
          </section>
          <section className="flex py-8 justify-center w-full">
            <TypewriterEffectSmoothDemo />
          </section>

          <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </main>
      </main>
    </>
  );
}
