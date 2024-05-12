"use client";
import { motion } from "framer-motion";

import { Suspense } from "react";

import React, { useEffect } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

function Service() {
  const path = useParams();
  // const searchParams = useSearchParams();
  // const search = searchParams.get("name");
  // console.log(search);
  // is the numb
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    console.log(name);
    const scrollToSection = () => {
      const section = document.getElementById(name ?? "");
      if (section) {
        const topOffset = section.offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    };

    // Scroll to the CNC section after a short delay to ensure page has rendered
    setTimeout(scrollToSection, 100);
  }, [path]);
  return (
    <>
      <div
        className="h-[350px] pt-8 flex justify-center items-center bg-black"
        style={{
          backgroundImage: `url(${"/slider/3.jpg"})`,
          backgroundSize: "120%",
          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="text-3xl pt-8 font-Barlow text-white"
        >
          INDUSTRIES
        </motion.div>
      </div>
      <section id="PETROCHEMICAL">
        <div className=" bg-gray-50 flex justify-center items-center">
          <section className="bg-cover basis-[80%] bg-center pt-24 py-12 w-full">
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
                  <h1 className="text-3xl font-medium mb-6 font-Barlow">
                    PETROCHEMICAL INDUSTRY
                  </h1>
                  <p className="font-Barlow mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Barlow">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className=" relative  group-hover:text-white font-semibold text-greenTNF">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="CONSTRUCTION">
        <div className=" bg-gray-50 flex justify-center items-center">
          <section className="bg-cover basis-[80%] bg-center py-12 w-full">
            <div className=" text-left text-black">
              <div className="flex flex-row-reverse items-center gap-8">
                <div className="w-1/2">
                  <img
                    src="/serv.jpg"
                    className="h-96 w-full object-cover rounded-xl"
                    alt="Layout Image"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="text-3xl font-medium mb-6 font-Barlow">
                    CONSTRUCTION INDUSTRY
                  </h1>
                  <p className="font-Barlow mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Barlow">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className=" relative  group-hover:text-white font-semibold text-greenTNF">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="ORIGINAL">
        <div className=" bg-gray-50 flex justify-center items-center">
          <section className="bg-cover basis-[80%] bg-center py-12 w-full">
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
                  <h1 className="text-3xl font-medium mb-6 font-Barlow">
                    ORIGINAL EQUIPMENT MANUFACTURERS
                  </h1>
                  <p className="font-Barlow mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Barlow">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className=" relative  group-hover:text-white font-semibold text-greenTNF">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="PRECISION">
        <div className=" bg-gray-50 flex justify-center items-center">
          <section className="bg-cover basis-[80%] bg-center py-12 w-full">
            <div className=" text-left text-black">
              <div className="flex items-center gap-8">
                <div className="w-1/2">
                  <h1 className="text-3xl font-medium mb-6 font-Barlow">
                    PRECISION ENGINEERING INDUSTRY
                  </h1>
                  <p className="font-Barlow mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Barlow">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className=" relative  group-hover:text-white font-semibold text-greenTNF">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>

                <div className="w-1/2">
                  <img
                    src="/serv.jpg"
                    className="h-96 w-full object-cover rounded-xl"
                    alt="Layout Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Service;
