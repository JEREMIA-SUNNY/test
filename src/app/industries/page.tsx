  "use client";
  import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

function Service() {
  const industriesData = [
    {
      id: "OILGAS",
      name: "OIL AND GAS",
      description: `The oil and gas industry is crucial for global energy needs, providing fuel and raw materials for various sectors. Our services in this field focus on delivering cutting-edge solutions for exploration, extraction, and transportation.`,
      image: "/oil.jpg",
    },
    {
      id: "DEFENSEANDAEROSPACE",
      name: "DEFENSE AND AEROSPACE",
      description: `We offer specialized services in defense and aerospace, ensuring precision, safety, and innovation in all our projects. From military equipment to aircraft components, we ensure top-notch quality.`,
      image: "/def.jpg",
    },
    {
      id: "PETROCHEMICAL",
      name: "PETROCHEMICAL INDUSTRY",
      description: `The petrochemical industry is essential for producing chemicals and materials used in everyday products. Our expertise ensures efficient and sustainable processes that meet industry standards.`,
      image: "/petros.jpg",
    },
    {
      id: "CONSTRUCTION",
      name: "CONSTRUCTION INDUSTRY",
      description: `We support the construction industry with advanced solutions for building materials, structural components, and engineering services, ensuring durability and compliance with regulations.`,
      image: "/cons.jpg",
    },
    {
      id: "ORIGINAL",
      name: "ORIGINAL EQUIPMENT MANUFACTURERS",
      description: `We collaborate with Original Equipment Manufacturers (OEMs) to provide high-quality components and systems. Our services include design, manufacturing, and testing to ensure reliable and long-lasting products.`,
      image: "/serv.jpg",
    },
    {
      id: "PRECISION",
      name: "PRECISION ENGINEERING INDUSTRY",
      description: `Precision engineering is at the heart of innovation. We offer services that include the design and manufacturing of highly accurate and complex parts for various industries, ensuring exceptional performance and reliability.`,
      image: "/serv.jpg",
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
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

    setTimeout(scrollToSection, 100);
  }, []);

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
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          viewport={{ once: true }}
          className="text-3xl pt-8 font-Barlow text-white"
        >
          INDUSTRIES
        </motion.div>
      </div>

      {industriesData.map((industry, index) => (
        <section id={industry.id} key={industry.id}>
          <div className="bg-gray-50 flex justify-center items-center">
            <section className="bg-cover basis-[80%] bg-center py-12 w-full">
              <div className="text-left text-black">
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2">
                    <img
                      src={industry.image}
                      className="h-96 w-full object-cover rounded-xl"
                      alt={industry.name}
                    />
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-3xl font-medium mb-6">
                      {industry.name}
                    </h1>
                    <p className="font-Barlow mb-12">{industry.description}</p>
                    <Link
                      href={"/contact-us"}
                      className="flex items-center font-Barlow"
                    >
                      <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                        <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className=" relative group-hover:text-white font-semibold text-greenTNF">
                          Contact Us
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      ))}
    </>
  );
}

export default Service;
