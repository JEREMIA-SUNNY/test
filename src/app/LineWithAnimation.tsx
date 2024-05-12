"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./globals.css";

interface Props {
  loaded: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  div1Loaded: boolean;
  setDiv1Loaded: React.Dispatch<React.SetStateAction<boolean>>;
  div2Loaded: boolean;
  setDiv2Loaded: React.Dispatch<React.SetStateAction<boolean>>;
  div3Loaded: boolean;
  setDiv3Loaded: React.Dispatch<React.SetStateAction<boolean>>;
  div4Loaded: boolean;
  setDiv4Loaded: React.Dispatch<React.SetStateAction<boolean>>;
}
const LineWithAnimation: React.FC<Props> = ({
  loaded,
  setLoaded,
  div1Loaded,
  setDiv1Loaded,
  div2Loaded,
  setDiv2Loaded,
  div3Loaded,
  setDiv3Loaded,
  div4Loaded,
  setDiv4Loaded,
}) => {
  const controls = useAnimation();
  // const [loaded, setLoaded] = useState(false);

  // const [div1Loaded, setDiv1Loaded] = useState(false);
  // const [div2Loaded, setDiv2Loaded] = useState(false);
  // const [div3Loaded, setDiv3Loaded] = useState(false);
  // const [div4Loaded, setDiv4Loaded] = useState(false);

  return (
    <div className="line-container basis-[90%]  flex gap-[10px]  ">
      <motion.div
        className="line border b border-black rounded-xl h-[10px] flex-1"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
        initial={{ width: 0 }}
        animate={{ width: div1Loaded ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="line   rounded-xl h-[8px] flex-1"
          style={{
            backgroundColor: div1Loaded ? "#005d83" : "",
          }}
          initial={{ width: 0 }}
          animate={{ width: div1Loaded ? "100%" : 0 }}
          transition={{ duration: 8, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="line border border-black rounded-xl h-[px] flex-1"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
        initial={{ width: 0 }}
        animate={{ width: div2Loaded ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="line  rounded-xl h-[8px] flex-1"
          style={{
            backgroundColor: div2Loaded ? "#005d83" : "",
          }}
          initial={{ width: 0 }}
          animate={{ width: div2Loaded ? "100%" : 0 }}
          transition={{ duration: 8, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="line border border-black rounded-xl h-[10px] flex-1"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
        initial={{ width: 0 }}
        animate={{ width: div3Loaded ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="line  rounded-xl h-[8px] flex-1"
          style={{
            backgroundColor: div3Loaded ? "#005d83" : "",
          }}
          initial={{ width: 0 }}
          animate={{ width: div3Loaded ? "100%" : 0 }}
          transition={{ duration: 8, ease: "easeOut" }}
        ></motion.div>
      </motion.div>
      {/* <motion.div
        className="line border border-black rounded-xl h-[10px] flex-1"
        style={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
        initial={{ width: 0 }}
        animate={{ width: div4Loaded ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="line  rounded-xl h-[8px] flex-1"
          style={{
            background: div4Loaded ? "#005d83" : "",
          }}
          initial={{ width: 0 }}
          animate={{ width: div4Loaded ? "100%" : 0 }}
          transition={{ duration: 8, ease: "easeOut" }}
        ></motion.div>
      </motion.div> */}
    </div>
  );
};

export default LineWithAnimation;
