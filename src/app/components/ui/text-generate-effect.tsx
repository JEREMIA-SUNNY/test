"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimation } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const renderWords = () => {
    return (
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={controls}
        variants={{ visible: { opacity: 1 } }}
      >
        <motion.span
          className="text-black text-end opacity-0"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Our valued clientele belong to a wide spectrum of industries <br />{" "}
          such as oil & gas, medical, industrial construction, HVAC, <br />{" "}
          precision engineering, automotives, piping and valves, repair &
          overhaul, <br />
          electronics & automation, marine, tool & die, etc.
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4 w-[80%]">
        <div className="text-black text-tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
