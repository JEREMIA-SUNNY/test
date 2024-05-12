import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop = window.scrollY;
      const maxScrollTop = documentHeight - windowHeight;
      const progress = (scrollTop / maxScrollTop) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <motion.div
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 100,
        restDelta: 0.001,
      }}
      animate={{
        transformOrigin: "left",
        scaleX: scrollProgress / 100,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 6,
        backgroundColor: "#005d83",
        zIndex: 9999,

        // Scale the bar based on scroll progress
        transformOrigin: "left",
      }}
    />
  );
}
export default ScrollProgressBar;
