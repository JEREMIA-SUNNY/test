import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const items = [0, 1, 2, 3, 4];
const height = 70;
const padding = 10;
const size = 150;

export function Example() {
  const scrollY = useMotionValue(0);
  const width = useMotionValue("calc(0% - 0px)");

  useEffect(() => {
    const updateProgressBar = () => {
      const progressBarWidth = `${(scrollY.get() / getHeight(items)) * 100}%`;
      width.set(progressBarWidth);
    };

    const unsubscribe = scrollY.onChange(updateProgressBar);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          transform: "translateZ(0)",
        }}
      >
        <motion.div
          style={{ width: 150, height: getHeight(items), y: scrollY }}
          drag="y"
          dragConstraints={{
            top: -getHeight(items) + size,
            bottom: 0,
          }}
        >
          {items.map((index) => {
            return (
              <motion.div
                style={{
                  width: 150,
                  height: height,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: (height + padding) * index,
                }}
                key={index}
              />
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          width: width,
          height: 6,
          borderRadius: 3,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      />
    </>
  );
}

function getHeight(items: number[]) {
  const totalHeight = items.length * height;
  const totalPadding = (items.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}
