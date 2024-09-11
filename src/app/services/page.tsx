"use client";
import { Suspense } from "react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";

function Service() {
  const path = useParams();
  // const searchParams = useSearchParams();
  // const search = searchParams.get("name");
  // console.log(search);
  // is the numb
  const serviceData = [
    {
      id: "CNC",
      name: "CNC MILLING SERVICES",
      description: `CNC Milling is a subtractive manufacturing process that uses
        computer-controlled machines to remove material from a block
        (known as a blank or workpiece) and shape it into a finished
        part. The process begins with a CAD model, which is then
        converted into a CNC program and set up in the CNC machine.
        At EMI we have machines up to 5 Axis and ranges up to
        X-3,000mm, Y-1,000mm x Z-1,000mm capacity and supported with
        Conventional Milling Machines as well which are NC
        controlled or Manually Operated. We are experienced in
        machining various grades of materials, metals, non-metals,
        alloys including Carbon Steel, Alloy Steel, Tool Steel,
        Stainless Steel, Inconel, Monel, Super Duplex, Titanium,
        Copper, Brass, Bronze, Aluminium, Nylon, Teflon, Plastic,
        Rubber, PTFE, etc.`,
      image: "/service/CNCMILLINGSERVICES.jpg",
    },
    {
      id: "TURNING",
      name: "CNC TURNING SERVICES",
      description: `CNC Turning is a manufacturing process in which bars of
        material are held in a chuck and rotated while a tool is fed
        to the piece to remove material to create the desired shape.
        This process ensures the creation of complex external and
        internal geometries, including tapers, threads, and grooves.
        At EMI we have machines ranges up to 15” Hollow Spindle x
        3,000mm between centres, capacity and supported with
        Conventional Lathe Machines as well which are NC controlled
        or Manually Operated. We are experienced in machining
        various grades of materials, metals, non-metals, alloys
        including Carbon Steel, Alloy Steel, Tool Steel, Stainless
        Steel, Inconel, Monel, Super Duplex, Titanium, Copper,
        Brass, Bronze, Aluminium, Nylon, Teflon, Plastic, Rubber,
        PTFE, etc.`,
      image: "/serv.jpg",
    },
    {
      id: "EDM",
      name: "EDM Services",
      description: `Spark Erosion, also known as electrical discharge machining
        (EDM), is a manufacturing process which creates a specific
        shape using electrical discharges (sparks). Spark erosion
        removes material from a piece with current discharges
        between two electrodes that are separated by a dielectric
        liquid that is subject to voltage. Wire EDM machining is an
        electrothermal production process that uses electric
        discharges to remove material from a workpiece.`,
      image: "/service/emd.jpg",
    },
    {
      id: "GRINDING",
      name: "GRINDING",
      description: `Surface grinding is a finishing process that uses a rotating
        abrasive wheel to smooth the flat surface of metallic or
        non-metallic materials. Cylindrical grinding is a precise and
        intricate process used in various industries to achieve high
        levels of accuracy and precision.`,
      image: "/service/grinding.jpg",
    },
    {
      id: "PHOSPHATING",
      name: "PHOSPHATING SERVICES",
      description: `Phosphating is a process whereby an insoluble adherent
        phosphate coating is formed on a surface (normally of iron,
        steel, galvanized steel or aluminium) by immersion in an
        acidic solution of iron, zinc or manganese phosphate.`,
      image: "/service/PHOSPHATINGSERVICES.jpg",
    },
    {
      id: "CMM",
      name: "CMM",
      description: `A coordinate-measuring machine (CMM) is a device that
        measures the geometry of physical objects by sensing
        discrete points on the surface of the object with a probe.
        Various types of probes are used in CMMs, the most common
        being mechanical and laser sensors.`,
      image: "/service/cmm.jpg",
    },
    {
      id: "CYLINDRICAL",
      name: "CYLINDRICAL & SURFACE GRINDING SERVICES",
      description: `Cylindrical grinding is a precise and intricate process used
        in various industries to achieve high levels of accuracy and
        precision in the production of cylindrical components.`,
      image: "/service/grindi.jpg",
    },
    {
      id: "ELECTRIC",
      name: "ELECTRIC DISCHARGE MACHINING SERVICES",
      description: `EDM, or electric discharge machining, is a process used to
        remove material from a workpiece through electrical
        discharges.`,
      image: "/service/ELECTRICDISCHARGEMACHININGSERVICES.jpg",
    },
    {
      id: "DESIGN",
      name: "DESIGN, MANUFACTURE & REPAIR SERVICES",
      description: `Our design, manufacturing, and repair services ensure that
        your products are built and restored to the highest standards
        of precision and durability.`,
      image: "/service/DESIGNMANUFACTUREREPAIRSERVICES.jpg",
    },
    {
      id: "INSPECTION",
      name: "INSPECTION SERVICES",
      description: `At EMI we ensure that a manufactured product or performed
        service adheres to a defined set of quality criteria or meets
        the requirements of the client or end user.`,
      image: "/service/INSPECTIONSERVICES.jpg",
    },
    {
      id: "TURRET",
      name: "Turret Punching",
      description: `Turret punching is a manufacturing process that uses a
        turret equipped with various punch tools to shape and form
        sheet metal into the desired dimensions and features.`,
      image: "/service/TurretPunching.jpg",
    },
    {
      id: "BENDING",
      name: "Bending",
      description: `Bending is a metalworking process that produces V-shaped,
        U-shaped, or channel-shaped bends in metal sheets.`,
      image: "/service/Bending.jpg",
    },
    {
      id: "ROLLING",
      name: "Rolling",
      description: `Rolling is a process used to deform metals into a desired
        shape by passing them through a series of rolling mills.`,
      image: "/service/Rolling.jpg",
    },
    {
      id: "WELDING",
      name: "Welding",
      description: `Welding is a fabrication process that joins materials,
        usually metals or thermoplastics, by causing coalescence.`,
      image: "/service/Welding.jpg",
    },
    {
      id: "CNC_PLASMA",
      name: "CNC Plasma Cutting",
      description: `CNC Plasma Cutting is a process that uses a high-velocity jet
        of ionized gas to cut through electrically conductive
        materials such as steel, aluminum, brass, and copper.`,
      image: "/service/CNCPlasmaCutting.jpg",
    },
    {
      id: "WATERJET",
      name: "Waterjet Cutting",
      description: `Waterjet cutting is an industrial cutting process that uses a
        high-pressure jet of water, or a mixture of water and an
        abrasive substance, to cut through materials.`,
      image: "/service/WaterjetCutting.jpg",
    },
    {
      id: "BANDSAW",
      name: "Bandsaw Cutting",
      description: `Bandsaw cutting is a versatile process used to cut materials
        into a variety of shapes and sizes. The process uses a
        continuous blade that moves in a loop to make clean, straight
        cuts.`,
      image: "/service/band.jpg",
    },
    {
      id: "RADIAL",
      name: "Radial Drilling",
      description: `Radial drilling is a process in which a radial drill machine
        is used to drill holes in large or heavy workpieces, allowing
        the machine's arm to rotate around the workpiece for
        precision.`,
      image: "/service/RadialDrilling.jpg",
    },
  ];

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
    <Suspense>
      <div
        className="h-[360px] pt-8 flex justify-center items-center bg-black"
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
          SERVICES
        </motion.div>
      </div>

      {serviceData.map((service, index) => (
        <section id={service.id} key={service.id}>
          <div className=" bg-gray-50 flex justify-center items-center">
            <section className="bg-cover basis-[80%] bg-center py-12 w-full">
              <div className=" text-left text-black">
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2">
                    <img
                      src={service.image}
                      className="h-96 w-full object-cover rounded-xl"
                      alt={service.name}
                    />
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-3xl font-medium mb-6">
                      {service.name}
                    </h1>
                    <p className="font-Barlow mb-12">{service.description}</p>
                    <div className="flex items-center font-Barlow">
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
      ))}
    </Suspense>
  );
}

export default Service;
