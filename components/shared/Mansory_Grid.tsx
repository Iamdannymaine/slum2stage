"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { imageGridData } from "@/json"

interface ImageData {
  src: string;
  alt?: string;
}

interface ParallaxImageColumnProps {
  images: ImageData[];
  baseVelocity: number;
}

function ParallaxImageColumn({
  images,
  baseVelocity = 100,
}: ParallaxImageColumnProps) {
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });


  const imageHeight = 350;


  const visibleCount = 4;

  const desktopTotalHeight = images.length * 2 * imageHeight;


  const y = useTransform(baseY, (v) => `${wrap(-desktopTotalHeight, 0, v)}px`);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);


  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseY.set(baseY.get() + moveBy);

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <>
      <div
        className="w-64 overflow-hidden rounded-md"
        style={{ height: imageHeight * visibleCount }}
      >
        <motion.div className="hidden lg:flex flex-col gap-4 ml-4" style={{ y }}>
          {Array(3)
            .fill(0)
            .map((_, repeatIndex) => (
              <React.Fragment key={repeatIndex}>
                {images.map((image, index) => (
                  <div key={index} className="w-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt="gallery-image"
                      width={700}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
        </motion.div>
      </div>

      <div
        className="w-full h-1/2 overflow-hidden rounded-md lg:hidden flex mt-12"
      >
        <motion.div className="flex flex-row gap-4 mb-4" style={{ x }}>
          {Array(3)
            .fill(0)
            .map((_, repeatIndex) => (
              <React.Fragment key={repeatIndex}>
                {images.map((image, index) => (
                  <div key={index} className="w-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt || `Image ${index}`}
                      width={700}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
        </motion.div>

      </div>
    </>
  );
}


interface ImageGridData {
  column1Images: ImageData[];
  column2Images: ImageData[];
}

const typedImageData = imageGridData as ImageGridData;

export const PinterestMasonry = () => {

  const column1Images = typedImageData.column1Images;
  const column2Images = typedImageData.column2Images;

  return (
    <div className="flex lg:justify-center bg-[#FFEEE5] lg:min-h-screen items-center">
      <div className="flex flex-col lg:flex-row ">

        <ParallaxImageColumn images={column1Images} baseVelocity={-5} />

        <ParallaxImageColumn images={column2Images} baseVelocity={5} />

        <ParallaxImageColumn images={column1Images} baseVelocity={-5} />
      </div>
    </div>
  );
};
