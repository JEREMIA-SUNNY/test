"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("interest") &&
    watch("info");

  const submit = handleSubmit(async (data) => {
    const { name, email, phone, interest, info } = data;
    try {
      const response = await fetch(
        "",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            phone,
            interest,
            info,
          }),
        }
      );
      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          interest: "",
          info: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  return (
    <>
      <Head>
        <title> Contact</title>
        <meta name="description" content="SFJ Business Solutions Contact Us" />
      </Head>
      <section className="pt-12 font-Barlow pb-12 text-zinc-900 bg-coustom1">
        <div className="md:container p-4 mx-auto">
          {/* <h1 className="text-4xl font-medium text-center font-Barlow">
            CONTACT US
          </h1> */}
          <div className="flex mb-8 pt-4  justify-center ">
            <div className="md:w-2/5 pt-8 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  ">
                {" "}
                Everest Mechanical Industries international Co
              </p>
              <div className="flex pt-8  gap-5 ">
                <nav>
                  <h6 className="footer-title">Find Us On</h6>
                  <div className="grid grid-flow-col gap-4">
                    <img src="/link.png" className="w-[35px] h-[35px]" alt="" />
                    <img src="/web.png" className="w-[35px] h-[35px]" alt="" />
                  </div>
                </nav>

                <div className="text-base  text-black md:ml-4">
                  <p className="font-semibold">
                    Everest Mechanical Industries international Co
                  </p>
                  <p>EIDB7761, 3759 الدمام 1266, 7761</p>
                  <p>Dammam 34324, </p>
                  <p>Saudi Arabia</p>
                  <p>Raju Vanka (Managing Director)</p>
                  <p className="pt-2 ">
                    {" "}
                    <span className="font-semibold">Phone :</span>{" "}
                    +966 50 494 7116
                  </p>

                  <p className="pt-2 ">
                    {" "}
                    <span className="font-semibold">Email :</span>{" "}
                    raju@emi-saudi.com
                  </p>
                </div>

                <div></div>
              </div>
            </div>
            <div className="flex   pt-8  justify-start w-1/2 ">
              <div className="mx-auto w-full max-w-lg">
                <form action="" className="mt">
                  <input
                    type="hidden"
                    name="access_key"
                    value="YOUR_ACCESS_KEY_HERE"
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="name"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-BlueTNF focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text- text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-BlueTNF border-BlueTNF ">
                        Your name
                      </label>
                    </div>
                    <div className="relative  z-0">
                      <input
                        type="text"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-BlueTNF focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text- text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-BlueTNF ">
                        Your email
                      </label>
                    </div>

                    <div className="relative pt-4 z-0">
                      <input
                        type="text"
                        name="name"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-BlueTNF focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text- text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-BlueTNF ">
                        Your organization
                      </label>
                    </div>
                    <div className="relative pt-4 z-0">
                      <input
                        type="text"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-BlueTNF focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text- text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-BlueTNF ">
                        Your contact number
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows="5"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-BlueTNF focus:outline-none focus:ring-0"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text- text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-BlueTNF border-BlueTNF ">
                        Your message
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center  pt-8 ">
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base font-semibold shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-greenTNF group-hover:text-white">
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7154.668938751763!2d49.9620689!3d26.2832551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d3a6940c867%3A0x875713b9c76b942e!2sEverest%20Mechanical%20Industries%20international%20Co!5e0!3m2!1sen!2sin!4v1715179789487!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
