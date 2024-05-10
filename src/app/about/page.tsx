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
          className=" text-3xl font-Anta text-white"
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
        <div className="p-4 md:container flex  gap-10 mx-auto">
          <div className="w-auto font-Montserrat lg:min-w-[700px] flex-1 pb-10">
            <h1 className=" text-3xl  tracking-wide font-medium font-Anta text-left  text-black">
              WHO WE ARE 
            </h1>
            <p className="prose pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptatibus eos, molestiae soluta reiciendis hic saepe impedit
              maiores labore? Eveniet sed atque laborum aut! Id, maxime libero.
              Ex est a natus neque animi blanditiis fugit voluptates nulla atque
              accusamus asperiores alias itaque velit officia, soluta, sapiente
              distinctio, officiis minima enim provident. Veniam excepturi quam,
              fugit soluta sunt architecto id placeat!
            </p>
            <p className="pt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              veritatis in perferendis ullam temporibus vitae expedita neque
              accusantium rerum voluptates voluptatibus quia, iusto facere nisi?
              Alias ipsa illum tempora quia ab labore, dicta laborum eos rerum
              necessitatibus similique possimus facilis qui illo minima fugit
              odit quas voluptas. Sequi nesciunt eos mollitia laborum tenetur
              repellendus quos, laudantium veniam iusto, dignissimos maxime.
            </p>
            <p className="pt-8 font-Montserrat">
              Our Motto: <b className="text-lg">S</b>olve business challenges.{" "}
              <b className="text-lg">F</b>oster agility and growth.{" "}
              <b className="text-lg">J</b>ubilate customer success.
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

      {/* MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET THTTTTTTTTTTTTTTTTTTTTTTTTTTTEEEE TEEEEEEEEEEEAMMMMMMMMMMMMMMMMMMMMM */}
      <section>
        <div className="w-full bg-[#f2f2f2]">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
              <h1 className=" text-3xl  tracking-wide font-medium font-Anta text-left  text-black">
                OUR TEAM
              </h1>
            </div>
            <div className="grid grid-cols-1 font-Anta sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>
    </>
  );
}
export default About;
