"use client";

import React from 'react';
import Button from '../Slum_Button';
import Image from 'next/image';
import { Section_Heading } from '../Section_Heading';
import { Section_Paragraph } from '../Section_Paragraph';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const Who_We_Are = () => {
  const containerRef = React.useRef(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Adjust these values to control the speed and range of the image movement
  const y = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section className="min-h-screen bg-smoke_white w-full" ref={containerRef}>
      <div className="flex flex-col md:flex-row relative px-4 max-w-7xl mx-auto gap-8 md:gap-12 mb-8 md:px-8 lg:px-16">

        <div className="w-full md:w-1/2 space-y-8 lg:gap-16 py-8 ">

          <div className="space-y-6 py-16 lg:py-32 ">
            <Section_Heading title="Who we are" />
            <Section_Paragraph
              size='lg'
              paragraph={`Slum to Stage provides preliminary and intermediate dance training for children and young adults in developing areas in Abuja through performing and creative arts programs that enhance both their academic and artistic performance.`}
            />

            <Button variant="circular-filled" text="Learn More" onClick={() => router.push("/about-us")} />

          </div>


          <div className="space-y-6">
            <Section_Heading title="What we do" />
            <Section_Paragraph
              size='lg'
              paragraph={`We are closing the gap between arts & academic education in classrooms, by campaigning for academic schools to imbibe creative and problem-solving skills into their curricula.`}
            />
            <Button variant="circular-filled" text="Learn More" onClick={() => router.push("/about-us")} />
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
              loading="lazy"
              src="/assets/images/who-we-are.png"
              alt="Dancers in colorful traditional attire in an artistic pose"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div >
    </section >
  )
}