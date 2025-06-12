"use client";

import React from "react";
import { useRef } from "react";


interface SectionParagraphProps {
  paragraph: string
  color?: string
  width?: string
  size?: string
  descriptionRef?: React.RefObject<HTMLParagraphElement>;
}


export const Section_Paragraph = ({
  paragraph,
  color = "slum_gray_900",
  width = "lg",
  size = "base",
  descriptionRef = useRef<HTMLParagraphElement>(null),
}: SectionParagraphProps) => {
  const ref = useRef(null);


  return (
    <div
      ref={descriptionRef}
      className={`w-full lg:max-w-[437px] text`}
    >
      <p className={`font-sans font-normal text-${color} text-sm lg:text-${size} leading-[36px] lg:leading-[32px]`}>
        {paragraph.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};


