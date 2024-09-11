"use client";
import { motion } from "framer-motion";

function About() {
  const team = [
    {
      name: "Nisha Menon",
      image: "/about/nisha.png",
      role: "Delivery Manager",
      description: "https://www.linkedin.com/in/nisha-menon-2a328924/",
    },
    {
      name: "Swati Sharma",
      image: "/about/swathi.jpg",
      role: "Manager(Talent Acquisition)",

      description: "https://www.linkedin.com/in/swati-sharma-aa944113/",
    },
    {
      name: "Rakhi Dujrayan",
      image: "/about/rakhi.png",
      role: "Senior Business Development Manager",
      description: "https://www.linkedin.com/in/rakhi-dujrayan-69192273/",
    },
    {
      name: "Yatin Anand",
      image: "/about/yatin.jpg",
      role: "Manager – Key Accounts",
      description: "https://www.linkedin.com/in/peter-tc",
    },
  ];

  return (
    <section className="bg-[#f2f2f2]">
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
          className=" text-3xl  tracking-wide font-medium font-Barlow text-left text-white"
        >
          ABOUT US
        </motion.div>
      </div>
      <motion.section
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          ease: "linear",
        }}
        viewport={{ once: true }}
        className="md:pt-16 text-black  bg-blue "
        id="WhoWe-Are"
      >
        <div className="p-4 md:container  flex  gap-10 mx-auto">
          <div className="w-auto font-Barlow lg:min-w-[700px] flex-1 pb-10">
            <h1 className=" text-3xl  tracking-wide font-medium font-Barlow text-left  text-black">
              WHO WE ARE
            </h1>
            <p className="prose pt-8">
              EMI is a state-of-the-art, one stop shop for all mechanical
              manufacturing, CNC precision machining and Fabrication needs,
              started by visionary Leader Mr. Raju Vanka (Managing Director) in
              the year 2014 in the Oasis of Middle East, Kingdom of Bahrain. EMI
              has evolved over the years supporting the manufacturing needs of
              OEM within and outside Bahrain. Kingdom of Saudi Arabia has always
              been an important source of business over the years and with the
              country’s vision 2030 and Aramco’s IKTVA goals, EMI had
              established “EVEREST MECHANICAL INDUSTRIES INTERNATIONAL CO.” a
              new company in 2nd Industrial City, Modon, Dammam in the year 2022
              to cater the in-kingdom manufacturing needs. EMI has a combined
              work force of 50-100 employees, over 50 equipment/machinery for
              machining and fabrication, CMMs and other quality measuring
              instruments to ensure manufacturing high precision components with
              a tolerance of 0.005mm (5 microns). EMI stocks over 100 tons of
              stainless steel, alloy steel and carbon steel materials.
            </p>
          </div>

          <div className=" flex w-1/2  items-center  ">
            <div className="">
              <img
                src="/serv.jpg"
                className="h-96 w-full object-cover rounded-xl"
                alt="Layout Image"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <section>
        <section className=" bg-[#005d83]ray-50">
          <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
            <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max- lg:px-8">
              <div className=" absolute  top-0 -right-1/4 z-0  opacity-10 ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  className="w-96 z-0  h-full    object-fill fill-g text-g"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
                  />
                </svg>
              </div>

              <div className=" absolute -bottom-0 -left-1/4 z-0  opacity-10 "></div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                  <a
                    href=""
                    className="transition-all  duration-1000 bg-white hover:bg-[#005d83]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                  >
                    <div className=" absolute  bg-[#005d83] top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-[#f2f2f2] group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        VISION
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        To be the Versatile world leader in machining products,
                        providing our customers with high precision and quality
                        products and solutions that will allow their companies
                        to prosper while contributing to the local economy. We
                        will support our customers to provide optimal products
                        to meet their company goals and needs. We feel our
                        passion for our products is shared by our customers
                        because of the innovation, quality and design support.
                      </p>
                    </div>
                  </a>

                  <a
                    href=""
                    className="transition-all  duration-1000 bg-white hover:bg-[#005d83]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                  >
                    <div className=" absolute  bg-[#005d83] top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-[#f2f2f2] group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        MISSION
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        EVEREST MECHANICAL INDUSTRIES INTERNATIONAL CO is
                        committed to supplying superior quality products and
                        exceptional customer service. Our Business will always
                        be conducted in an ethical manner while creating a
                        positive working environment for our valued employees.
                      </p>
                    </div>
                  </a>

                  <a
                    href=""
                    className="transition-all  duration-1000 bg-white hover:bg-[#005d83]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                  >
                    <div className=" absolute  bg-[#005d83] top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-[#f2f2f2] group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        VALUES
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        EVEREST MECHANICAL INDUSTRIES INTERNATIONAL CO Combines
                        keen entrepreneurial instinct with a rigorous approach
                        to safety, risk and responsibility. Courageous with
                        opportunity, conservative with risk.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET THTTTTTTTTTTTTTTTTTTTTTTTTTTTEEEE TEEEEEEEEEEEAMMMMMMMMMMMMMMMMMMMMM */}
      {/* <section>
        <div className="w-full bg-[#f2f2f2]">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
              <h1 className=" text-3xl  tracking-wide font-medium font-Barlow text-left  text-black">
                OUR TEAM
              </h1>
            </div>
            <div className="grid grid-cols-1 font-Barlow sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Dany Bailey
                  </p>
                  <p className="text-base text-black font-normal">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Lucy Carter
                  </p>
                  <p className="text-base text-black font-normal">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Jade Bradley
                  </p>
                  <p className="text-base text-black font-normal">Dev Ops</p>
                </div>
              </div>
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Dany Bailey
                  </p>
                  <p className="text-base text-black font-normal">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Lucy Carter
                  </p>
                  <p className="text-base text-black font-normal">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div className="w-full  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                    alt="photo"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-BLACK font-medium mb-2">
                    Jade Bradley
                  </p>
                  <p className="text-base text-black font-normal">Dev Ops</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section> */}
    </section>
  );
}
export default About;
