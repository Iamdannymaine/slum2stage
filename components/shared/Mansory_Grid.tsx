"use client";

import React, { useEffect, useRef } from "react";
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
import NextImage from "next/image";
import { imageGridData } from "@/json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Image } from "@heroui/image";
import type { EmblaCarouselType } from "embla-carousel";

interface ImageData {
  src: string;
  alt?: string;
}

interface ParallaxImageColumnProps {
  images: ImageData[];
  baseVelocity: number;
}

function ParallaxImageColumn({ images, baseVelocity = 100 }: ParallaxImageColumnProps) {
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

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseY.set(baseY.get() + moveBy);
  });

  return (
    <div
      className="w-64 overflow-hidden"
      style={{ height: imageHeight * visibleCount }}
    >
      <motion.div className="hidden lg:flex flex-col gap-4 ml-4" style={{ y }}>
        {Array(3).fill(0).map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {images.map((image, index) => (
              <div key={index} className="w-64 overflow-hidden rounded-none">
                <Image
                  src={image.src}
                  alt={image.alt || "gallery-image"}
                  width={512}
                  height={300}
                  loading="lazy"
                  className="w-64 h-[300px] object-cover rounded-none"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function MobileCarousel({ direction = "forward" }: { direction?: "forward" | "backward" }) {
  const typedImageData = imageGridData as {
    column1Images: ImageData[];
    column2Images: ImageData[];
  };
  const allImages = [...typedImageData.column1Images, ...typedImageData.column2Images];
  const carouselRef = useRef<EmblaCarouselType | null>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      if (direction === "forward") {
        if (!carouselRef.current.canScrollNext()) {
          carouselRef.current.scrollTo(0);
        } else {
          carouselRef.current.scrollNext();
        }
      } else {
        if (!carouselRef.current.canScrollPrev()) {
          carouselRef.current.scrollTo(allImages.length - 1);
        } else {
          carouselRef.current.scrollPrev();
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, allImages.length]);

  return (

    <Carousel
      setApi={(api) => {
        if (api) carouselRef.current = api;
      }}
      className="lg:hidden w-full max-w-md mx-auto"
    >
      <CarouselContent className="-ml-0">
        {allImages.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 gap-0 pl-2">
            <div className="overflow-hidden">
              <Image
                src={image.src}
                as={NextImage}
                alt={image.alt || "gallery-image"}
                width={600}
                height={400}
                quality={90}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel >
  );
}

interface ImageGridData {
  column1Images: ImageData[];
  column2Images: ImageData[];
}

export const PinterestMasonry = () => {
  const typedImageData = imageGridData as ImageGridData;
  const { column1Images, column2Images } = typedImageData;

  return (
    <div className="bg-[#FFEEE5] lg:min-h-screen flex items-end justify-end">
      {/* Desktop View */}
      <div className="hidden lg:flex">
        <div className="flex flex-col lg:flex-row">
          <ParallaxImageColumn images={column1Images} baseVelocity={-5} />
          <ParallaxImageColumn images={column2Images} baseVelocity={5} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full py-8 space-y-2">
        <MobileCarousel />
        <MobileCarousel />
      </div>
    </div>
  );
};
