'use client'

import React, { useEffect, useRef } from 'react'
import { Image } from '@heroui/image'
import { Chidinma_Paragraph } from './Chidinma_Paragraph'
import Button from '../Slum_Button'
import { useRouter } from 'next/navigation'

declare const gsap: any;
declare const ScrollTrigger: any;

const Chidinma_Story2 = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainTitleRef = useRef<HTMLParagraphElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const descRef1 = useRef<HTMLDivElement>(null);
  const descRef2 = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        start: 'top 80%',
      },
    });

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      })
      .from(mainTitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(subTitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(descRef1.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(btnRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.4');

    return () => {
      ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => trigger.kill());
    };
  }, []);

  const handleFullStory = () => {
    router.push("/news");
  }

  return (
    <section className="w-full bg-secondary grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 overflow-hidden -mt-8">
      <div className="block lg:hidden relative w-full aspect-square -top-2">
        <Image
          loading="lazy"
          src="/assets/images/chidinma-mobile.png"
          className="object-cover"
          alt="chidinma-mobile"
        />
      </div>

      <div className="hidden lg:flex relative w-full overflow-hidden -mt-4 -ml-4 -mb-20">
        <Image
          src="/assets/images/chidinma.png"
          radius="lg"
          alt="chidinma"
          width={1000}
          height={900}
          className="object-cover w-full max-w-[800px] h-auto"
        />
      </div>

      <div className="flex flex-col col-span-2 px-4 lg:p-8 pt-0 lg:py-32 items-start justify-start">
        <div className="flex flex-col space-y-2 lg:space-y-8 text" ref={containerRef1}>
          <h3 ref={titleRef} className="font-sans font-bold text-sm lg:text-xl text-white">
            Why we do it?
          </h3>
          <p ref={mainTitleRef} className="font-serif font-bold text-3xl lg:text-[56px] text-white capitalize">
            Read Chidinma&apos;s Story
          </p>
          <p ref={subTitleRef} className="font-sans font-normal text-sm lg:text-xl text-white">
            - a student in the program
          </p>
        </div>

        <div className="block lg:hidden mt-4 mb-8 lg:mt-8 space-y-4" ref={containerRef2}>
          <div ref={descRef1}>
            <Chidinma_Paragraph
              paragraph={`Chidimma is a seven-year-old girl living in a small community in Abuja. She attends an affordable government school in Gwarimpa. Before Chidimma leaves for school on most days,
                her parents are usually engaged in heated arguments. Although she is seated in class...`} />
          </div>

          <div ref={btnRef}>
            <Button
              variant='pill-filled'
              text='Read full story'
              onClick={handleFullStory}
            />
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row gap-12 mt-4 lg:mt-8">
          <div ref={descRef1}>
            <Chidinma_Paragraph
              paragraph={`Chidimma is a seven-year-old girl living in a small community in Abuja...`}
            />
          </div>
          <div ref={descRef2}>
            <Chidinma_Paragraph
              paragraph={`This is often followed by a question asked for the sole purpose of humiliating her...`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chidinma_Story2