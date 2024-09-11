import { cn } from "../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="basic-[20%] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          url={item.url}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 ">
    {" "}
    <img src="" alt="" />
  </div>
);
const items = [
  {
    title: "CNC MILLING",
    description: "Dive into the transformative power of technology.",
    header: "/service/CNCMILLINGSERVICES.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=CNC",
  },
  {
    title: "CNC TURNING",
    description: "Dive into the transformative power of technology.",
    header: "/mech2.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=TURNING",
  },
  {
    title: " EDM Services",
    description:
      "Spark Erosion, also known as electrical discharge machining(EDM),",
    header: "/service/emd.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=EDM",
  },

  {
    title: " GRINDING",
    description:
      "Spark Erosion, also known as electrical discharge machining(EDM),",
    header: "/service/grinding.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=GRINDING",
  },
  {
    title: "PHOSPHATING SERVICES",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "/service/PHOSPHATINGSERVICES.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=PHOSPHATING",
  },
  {
    title: "CMM",
    description: "Join the quest for understanding and enlightenment.",
    header: "/service/cmm.jpg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=CMM",
  },
  {
    title: "CYLINDRICAL & SURFACE GRINDING",
    description: "Join the quest for understanding and enlightenment.",
    header: "/service/grindi.jpg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    url: "/services?name=CYLINDRICAL",
  },
  // {
  //   title: "ELECTRIC DISCHARGE MACHINING",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: "/mech5.jpg",
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //   url: "/services?name=ELECTRIC",
  // },
  // {
  //   title: "DESIGN, MANUFACTURE & REPAIR SERVICES",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: "/mech5.jpg",
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //   url: "/services?name=DESIGN",
  // },
  // {
  //   title: "INSPECTION SERVICES",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: "/auto.jpg",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   url: "/services?name=INSPECTION",
  // },
];
