import React from "react";

import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className="text-white pt-8 bg-[#f2f2f2]">
      <div
        className="h-[300px] pt-8 flex justify-center items-center bg-black"
        style={{
          backgroundImage: `url(${"/slider/3.jpg"})`,
          backgroundSize: "120%",
          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-3xl font-Barlow text-white">CONTACT US</div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactUs;
