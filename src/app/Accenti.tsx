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
    title: "BTA DRILLING, GUNDRILLING & HONING",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: "/service/brp.jpg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CNC TURNING",
    description: "Dive into the transformative power of technology.",
    header: "/mech2.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HEAT TREATMENT & CASE HARDENING",
    description: "Discover the beauty of thoughtful and functional design.",
    header: "/mech3.jpg",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CYLINDRICAL & SURFACE GRINDING",
    description:
      "Understand the impact of effective communication in our lives.",
    header: "/mec1.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Repair and  overhaul",
    description: "Join the quest for understanding and enlightenment.",
    header: "/mech4.jpg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Oem",
    description: "Experience the thrill of bringing ideas to life.",
    header: "/mech5.jpg",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automotive",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: "/auto.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
