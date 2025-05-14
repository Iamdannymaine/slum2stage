"use client";

import React from 'react';
import Button from './Slum_Button';
import Image from 'next/image';
import Section_Heading from './Section_Heading';
import { Section_Paragraph } from './Section_Paragraph';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Who_We_Are = () => {
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Adjust these values to control the speed and range of the image movement
  const y = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section className="min-h-screen bg-smoke_white w-full" ref={containerRef}>

      <div className="flex flex-col md:flex-row relative ps-[12%]">

        <div className="w-full md:w-1/2 space-y-8 lg:space-y-16 md:space-y-24 py-8 md:py-24">

          <div className="space-y-6 py-16 lg:py-32 ">
            <Section_Heading title="Who we are" />
            <Section_Paragraph
              paragraph={`Slum to Stage provides preliminary and intermediate dance training for children and young adults in developing areas in Abuja.
          \nThrough performing and creative arts programs that enhance both their academic and artistic performance.`} />
            <div>
              <Button variant="circular-filled" text="Learn More" />
            </div>
          </div>

          <div className="space-y-6">
            <Section_Heading title="What we do" />
            <Section_Paragraph
              paragraph={`Slum to Stage provides preliminary and intermediate dance training for children and young adults in developing areas in Abuja.
            \nThrough performing and creative arts programs that enhance both their academic and artistic performance.`} />

            <div className="flex items-center justify-between">
              <Button variant="circular-filled" text="Learn More" />
            </div>
          </div>
          <div className="h-[5vh]"></div>
        </div>

        {/* right */}

        <div className="hidden md:block md:w-1/2 h-screen sticky top-0 bottom-0 overflow-hidden">
          <motion.div
            className="h-full flex items-center justify-center"
            style={{ y }}
          >
            <Image
              src="/assets/images/who-we-are.png"
              alt="Dancers in colorful traditional attire in an artistic pose"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}