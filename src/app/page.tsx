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

          {/* <section className="flex justify-center w-full">
<LayoutGridDemo />
</section> */}

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
          <section className="flex justify-center w-full">
            <TypewriterEffectSmoothDemo />
          </section>
        </main>
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
    </>
  );
}
