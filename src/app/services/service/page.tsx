"use client";
import { motion } from "framer-motion";
import React from "react";

function Service() {
  return (
    <>
      <div
        className="h-[600px] pt-8 flex justify-center items-center bg-black"
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
          className="text-4xl font-Anta text-white"
        >
          CNC MILLING SERVICES
        </motion.div>
      </div>
      <section>
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
                  <h1 className="text-4xl font-medium mb-6">
                    SOLVING WITH PRECISION
                  </h1>
                  <p className="font-Montserrat mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Montserrat">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
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

      <section>
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
                  <h1 className="text-4xl font-medium mb-6">
                    SOLVING WITH PRECISION
                  </h1>
                  <p className="font-Montserrat mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Montserrat">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
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

      <section>
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
                  <h1 className="text-4xl font-medium mb-6">
                    SOLVING WITH PRECISION
                  </h1>
                  <p className="font-Montserrat mb-12">
                    Perfect Tools is your trusted & reliable manufacturing
                    solution provider, your one cnc machine shop – one stop for
                    all your machining & heat treatment requirements. We are an
                    API Q1, ISO 9001 QMS Certified Job Shop holding two Monogram
                    Licences (API 7-1 & API 5CT). Our state-of-the-art
                    manufacturing facilities located strategically in Dubai
                    offer comprehensive manufacturing support to various OEMs
                    around the world meeting their needs and specifications.
                  </p>
                  <div className="flex items-center font-Montserrat">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
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
    </>
  );
}

export default Service;
