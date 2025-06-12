'use client'

import React, { useRef, useState, useEffect } from 'react'
import Button from '../Slum_Button'
import Image from 'next/image'
import { Section_Heading } from '../Section_Heading'
import { Section_Paragraph } from '../Section_Paragraph'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/navigation'

const animateFadeInUp = (
  ref: React.RefObject<HTMLElement>,
  start = 'top 85%',
  end = 'bottom 15%',
  yOffset = 50
) => {
  const { gsap, ScrollTrigger } = window
  if (!ref.current) return

  gsap.fromTo(
    ref.current,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        toggleActions: 'play none none reverse',
        scrub: 1,
      },
    }
  )
}

export const Who_We_Are = () => {
  const router = useRouter()

  // Framer Motion scroll animation for image
  const containerFramerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerFramerRef,
    offset: ['start start', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 28])

  // GSAP setup
  const [isGsapLoaded, setIsGsapLoaded] = useState(false)
  useEffect(() => {
    const checkGsapLoaded = () => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        setIsGsapLoaded(true)
      } else {
        setTimeout(checkGsapLoaded, 100)
      }
    }
    checkGsapLoaded()
  }, [])

  // Refs for section 1
  const section1Ref = useRef<HTMLDivElement>(null)
  const title1Ref = useRef<HTMLDivElement>(null)
  const desc1Ref = useRef<HTMLParagraphElement>(null)
  const btn1Ref = useRef<HTMLDivElement>(null)

  // Refs for section 2
  const section2Ref = useRef<HTMLDivElement>(null)
  const title2Ref = useRef<HTMLDivElement>(null)
  const desc2Ref = useRef<HTMLParagraphElement>(null)
  const btn2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isGsapLoaded) return
    const { gsap, ScrollTrigger } = window

    const ctx = gsap.context(() => {
      animateFadeInUp(title1Ref)
      animateFadeInUp(desc1Ref, 'top 90%', 'bottom 10%')
      animateFadeInUp(btn1Ref, 'top 95%', 'bottom 5%', 30)

      animateFadeInUp(title2Ref)
      animateFadeInUp(desc2Ref, 'top 90%', 'bottom 10%')
      animateFadeInUp(btn2Ref, 'top 95%', 'bottom 5%', 30)

      ScrollTrigger.refresh()
    }, section1Ref)


    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => trigger.kill())
    }
  }, [isGsapLoaded])

  return (
    <section className="min-h-screen bg-smoke_white w-full" ref={containerFramerRef}>
      <div className="flex flex-col md:flex-row relative px-4 max-w-7xl mx-auto gap-8 md:gap-12 mb-8 md:px-8 lg:px-16">
        {/* LEFT Content */}
        <div className="w-full md:w-1/2 space-y-8 py-8 relative overflow-hidden">
          {/* Section 1 */}
          <div className="space-y-6 py-16 lg:py-32" ref={section1Ref}>
            <Section_Heading title="Who we are" titleRef={title1Ref} />
            <Section_Paragraph
              descriptionRef={desc1Ref}
              size="lg"
              paragraph="Slum to Stage provides preliminary and intermediate dance training for children and young adults in developing areas in Abuja through performing and creative arts programs that enhance both their academic and artistic performance."
            />
            <div ref={btn1Ref}>
              <Button
                variant="circular-filled"
                text="Learn More"
                onClick={() => router.push('/about-us')}
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6" ref={section2Ref}>
            <Section_Heading title="What we do" titleRef={title2Ref} />
            <Section_Paragraph
              descriptionRef={desc2Ref}
              size="lg"
              paragraph="We are closing the gap between arts & academic education in classrooms, by campaigning for academic schools to imbibe creative and problem-solving skills into their curricula."
            />
            <div ref={btn2Ref}>
              <Button
                variant="circular-filled"
                text="Learn More"
                onClick={() => router.push('/about-us')}
              />
            </div>
          </div>

          <div className="h-[5vh]" />
        </div>

        {/* RIGHT Sticky Image */}
        <div className="hidden md:block md:w-1/2 h-screen sticky top-0 bottom-0 overflow-hidden">
          <motion.div className="h-full flex items-center justify-center" style={{ y }}>
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
      </div>
    </section>
  )
}
