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
        <title>SFJ Business Solutions | Contact</title>
        <meta name="description" content="SFJ Business Solutions Contact Us" />
      </Head>
      <section className="pt-12 font-Anta pb-12 text-zinc-900 bg-coustom1">
        <div className="md:container p-4 mx-auto">
          {/* <h1 className="text-4xl font-medium text-center font-Anta">
            CONTACT US
          </h1> */}
          <div className="flex mb-8 pt-4  justify-center ">
            <div className="md:w-2/5 pt-8 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  "> TSeek</p>
              <div className="flex pt-8  gap-5 ">
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

                <div className="text-base  text-black md:ml-4">
                  <p className="font-semibold">CNC MILLING SERVICES</p>
                  <p>2055, limestone RD STE 200-C,</p>
                  <p>Wilmington,</p>
                  <p>DE 19808, USAs</p>
                </div>
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
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your name
                      </label>
                    </div>
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your email
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows="5"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your message
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center  pt-8 ">
                    <button className="group relative h-12 border-2 hover:border-0 border-black w- px-8 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">
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
