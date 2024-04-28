"use client";
import React, { useState } from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="text-2xl text-left md:text-[3rem] font-bold leading-none">
              OUR INDUSTRIAL VERTICALS <br />
              <div className="flex flex-col gap-8 pt-8">
                <div className="text-xl text-left flex gap-4  text-black">
                  <div>
                    <img src="/hand.svg" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div> Petrochemical Industry </div>
                </div>
                <div className="text-xl text-left flex gap-4  text-black">
                  <div>
                    <img src="/hand.svg" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div> Construction Industry </div>
                </div>
                <div className="text-xl text-left flex gap-4  text-black">
                  <div>
                    <img src="/hand.svg" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div> Original Equipment Manufacturers </div>
                </div>
                <div className="text-xl text-left flex gap-4  text-black">
                  <div>
                    <img src="/hand.svg" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div> Precision Engineering Industry</div>
                </div>
              </div>
            </div>
          </>
        }
      >
        <video
          src={`/walk.mp4`}
          
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          autoPlay // Add the autoPlay attribute to make the video autoplay
          loop // Add the loop attribute to make the video repeat
          muted // Add the muted attribute to ensure autoplay works on most browsers
        />
      </ContainerScroll>
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "/one.jpg",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "/one.jpg",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
