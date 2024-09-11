"use client";

import React from "react";
import { motion } from "framer-motion";
const Gallery = () => {
  const images = [
    {
      src: "/mec1.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },
    {
      src: "/mech2.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },
    {
      src: "/mech3.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },
    {
      src: "/mech4.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },
    {
      src: "/mech5.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },
    {
      src: "/service/band.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },

    {
      src: "/service/WaterjetCutting.jpg",
      alt: "Portrait by Jessica Felicio",
      caption: "Portrait by Jessica Felicio",
      link: "https://unsplash.com/@jeka_fe",
    },

    // Add other images similarly
  ];

  return (
    <>
      {" "}
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
          className="text-3xl font-Barlow text-white"
        >
          FACILITIES
        </motion.div>
      </div>
      <section className="mx-auto container py-24">
        <div className="grid grid-cols-1 gap-2 p-2 transition duration-300 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative  rounded-md overflow-hidden h-[400px] group"
            >
              <figure className="w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 group-hover:filter-none"
                />
                <figcaption className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
