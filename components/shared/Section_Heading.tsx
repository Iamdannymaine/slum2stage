"use client";

import React, { useRef, useState, useEffect, } from 'react';

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

interface SectionHeadingProps {
  title: string;
  color?: string;
  lgSize?: '56px' | '72px';
  titleRef?: React.RefObject<HTMLDivElement>;
}


export const Section_Heading = ({
  title,
  color = "slum_gray_800",
  lgSize = "72px",
  titleRef = useRef<HTMLDivElement>(null),
}: SectionHeadingProps) => {

  const lgSizeClass = lgSize === "56px" ? "lg:text-[56px]" : "lg:text-[72px]";



  return (
    <div ref={titleRef}>
      <h2
        className={`font-serif font-bold text-${color} text-[28px] md:text-[32px] ${lgSizeClass}`}
      >
        {title}
      </h2>
    </div>
  );
};
