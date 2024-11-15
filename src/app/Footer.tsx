import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer font-Barlow p-10 bg-white text-base-content">
        <Link href={"/"} className="text-4xl font-bold pt-2">
          <img src="/footer.png" className="object-cover w- h-[60px]" alt="" />
        </Link>

        <div>
          {" "}
          <div className="text-base  text-black md:ml-4">
            <p className="font-semibold">
              Everest Mechanical Industries international Co
            </p>
            <p>EIDB7761, 3759 الدمام 1266, 7761</p>
            <p>Dammam 34324, Saudi Arabia</p>
            <p>Raju Vanka (Managing Director)</p>
            <p className=" ">
              {" "}
              <span className="font-semibold">Contact :</span> +966 50 494 7116
              / raju@emi-saudi.com
            </p>
          </div>
        </div>

        <nav>
          <a href="/about" className="text-black cursor-pointer">
            ABOUT US
          </a>
          <a href="/services" className="text-black cursor-pointer">
            SERVICES
          </a>
          <a href="/industries" className="text-black cursor-pointer">
            INDUSTRIES{" "}
          </a>
        </nav>
        <nav>
          {" "}
          <a href="/facility" className="text-black cursor-pointer">
            FACILITIES
          </a>
          <a href={"/quality"} className="text-black cursor-pointer">
            QUALITY
          </a>
          <a href="/contact-us" className=" text-black cursor-pointer">
            {" "}
            CONTACT
          </a>
        </nav>

        <nav>
          <h6 className="font-semibold">FIND US ON </h6>
          <div className="grid grid-flow-col gap-4">
            <img src="/link.png" className="w-[35px] h-[35px]" alt="" />
            <img src="/web.png" className="w-[35px] h-[35px]" alt="" />
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
