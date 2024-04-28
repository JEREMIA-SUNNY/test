"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const TextGenerateEffectTwo = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        <motion.span className=" text-black  opacity-0">
          We believe in the power of energy to transform lives, <br /> enhance
          communities, advance human progress,<br />  and sustain our planet.
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4   text-end flex justify-end w-[100%]">
        <div className="w-[80%]  text-black text-xl text-end tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
