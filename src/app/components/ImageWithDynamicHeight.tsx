"use client";
// ImageWithDynamicHeight.tsx

"use client";
// ImageWithDynamicHeight.tsx

// ImageWithDynamicHeight.tsx

// ImageWithDynamicHeight.tsx

// ImageWithDynamicHeight.tsx

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageWithDynamicHeightProps {
  image: string;
  height: number; // Define the type of the height prop as number
}

const ImageWithDynamicHeight: React.FC<ImageWithDynamicHeightProps> = (
  props
) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = props.image;

    img.onload = () => {
      if (divRef.current) {
        const parentHeight = props.height;
        const imgHeight = parentHeight;

        // Adjust the width based on the calculated height to maintain the aspect ratio
        divRef.current.style.width = `${
          (img.width * imgHeight) / img.height
        }px`;
        divRef.current.style.height = `${imgHeight}px`;
      }
    };
  }, [props.image, props.height]);

  return (
    <div ref={divRef} className="relative overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="object-cover absolute inset-0"
        src={props.image}
        alt=""
      />
    </div>
  );
};

export default ImageWithDynamicHeight;
