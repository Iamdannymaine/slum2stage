"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import Button from "../Slum_Button"
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { useRouter } from "next/navigation"


declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export const HeroSlider = () => {
  const router = useRouter()
  const swiperRef = useRef<SwiperClass | null>(null)

  // Refs for GSAP animations
  const slide1HeadingRef = useRef<HTMLHeadingElement>(null)
  const slide1DescRef = useRef<HTMLParagraphElement>(null)
  const slide1ButtonsRef = useRef<HTMLDivElement>(null)

  const slide2HeadingRef = useRef<HTMLHeadingElement>(null)
  const slide2DescRef = useRef<HTMLParagraphElement>(null)
  const slide2ButtonsRef = useRef<HTMLDivElement>(null)

  const slide3HeadingRef = useRef<HTMLHeadingElement>(null)
  const slide3DescRef = useRef<HTMLParagraphElement>(null)
  const slide3ButtonsRef = useRef<HTMLDivElement>(null)

  const slide4HeadingRef = useRef<HTMLHeadingElement>(null)
  const slide4DescRef = useRef<HTMLParagraphElement>(null)
  const slide4ButtonsRef = useRef<HTMLDivElement>(null)

  // Track if GSAP is loaded
  const [isGsapLoaded, setIsGsapLoaded] = useState(false)

  useEffect(() => {
    // Check if GSAP and ScrollTrigger are available
    const checkGsapLoaded = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        // Register ScrollTrigger plugin if not already registered
        if (!window.ScrollTrigger.isRegistered) {
          window.gsap.registerPlugin(window.ScrollTrigger)
          window.ScrollTrigger.isRegistered = true
        }
        setIsGsapLoaded(true)
      } else {
        // If not loaded yet, check again in 100ms
        setTimeout(checkGsapLoaded, 100)
      }
    }

    checkGsapLoaded()
  }, [])

  useEffect(() => {
    // Only run animations if GSAP is loaded
    if (!isGsapLoaded) return

    const { gsap, ScrollTrigger } = window

    // Animation function for each slide
    const animateSlideElements = (
      headingRef: React.RefObject<HTMLElement>,
      descRef: React.RefObject<HTMLElement>,
      buttonsRef: React.RefObject<HTMLElement>,
      delay = 0,
    ) => {
      if (!headingRef.current || !descRef.current || !buttonsRef.current) return

      // Set initial states
      gsap.set([headingRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      })

      // Create timeline for this slide
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current.closest(".swiper-slide"),
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      })

      // Animate heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
        // Then description
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7",
        )
        // Finally buttons
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        )
    }

    // Apply animations to all slides
    animateSlideElements(slide1HeadingRef, slide1DescRef, slide1ButtonsRef)
    animateSlideElements(slide2HeadingRef, slide2DescRef, slide2ButtonsRef)
    animateSlideElements(slide3HeadingRef, slide3DescRef, slide3ButtonsRef)
    animateSlideElements(slide4HeadingRef, slide4DescRef, slide4ButtonsRef)

    // Refresh ScrollTrigger
    ScrollTrigger.refresh()

    return () => {
      // Clean up all ScrollTrigger instances
      if (ScrollTrigger && ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [isGsapLoaded])

  const handleDonation = () => {
    router.push("/donate")
  }

  return (
    <section>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="heroBg"
      >
        <SwiperSlide className="swiper-slide1 group">
          <div className="sliderImage w-full">
            <Image
              loading="lazy"
              src="/assets/images/slide-7.jpg"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[60vh] md:h-[80vh] rounded-none border-none"
            />
          </div>

          <div className="flex items-start justify-start">
            <div
              className="max-w-7xl mx-auto py-12 md:py-10 flex flex-col 
            md:flex-row gap-8 md:gap-16 mb-8 px-4 md:px-8 lg:px-16"
            >
              <div className="w-full lg:w-1/2">
                <h1
                  ref={slide1HeadingRef}
                  className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Every child deserves to be happy!
                  <span className="hidden lg:block h-4 w-[24rem] bg-primary_border -mt-4 ml-1"></span>
                </h1>

                <h1
                  ref={slide1HeadingRef}
                  className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Every child <br />
                  deserves <br /> to be happy!
                  <span className="hidden lg:block h-4 w-[21rem] bg-primary_border -mt-4 ml-1"></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p
                  ref={slide1DescRef}
                  className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans"
                >
                  Slum to Stage Uses Dance to Retain the Interest of 290 Children in Schools.
                </p>
                <div ref={slide1ButtonsRef} className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide2">
          <div className="sliderImage w-full">
            <Image
              loading="lazy"
              src="/assets/images/happy-school.jpg"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[60vh] md:h-[80vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div
              className="max-w-7xl mx-auto py-12 md:py-10 flex flex-col
             md:flex-row gap-8 md:gap-16 mb-8 px-6 lg:px-16"
            >
              <div className="w-full lg:w-1/2">
                <h1
                  ref={slide2HeadingRef}
                  className="block lg:hidden text-[32px] font-serif font-normal leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Bring dance & joy to government school
                </h1>

                <h1
                  ref={slide2HeadingRef}
                  className="hidden lg:block text-6xl font-serif font-normal leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Bring{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">dance & joy</span>
                    <span className="absolute left-0 bottom-1 w-full h-4 bg-primary_border z-0"></span>
                  </span>
                  <br />
                  to government <br /> school.
                </h1>
              </div>
              <div className="md:w-1/2">
                <p
                  ref={slide2DescRef}
                  className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans"
                >
                  Inspiring Students Through Movement and in line with the UNESCO Happy Schools Program.
                </p>
                <div ref={slide2ButtonsRef} className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide3">
          <div className="sliderImage w-full">
            <Image
              loading="lazy"
              src="/assets/images/french-embassy.png"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[60vh] md:h-[80vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div
              className="max-w-7xl mx-auto py-12 md:py-10 flex flex-col 
            md:flex-row gap-8 md:gap-16 mb-8 px-4 md:px-8 lg:px-16"
            >
              <div className="w-full lg:w-1/2">
                <h1
                  ref={slide3HeadingRef}
                  className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Partnership with <br />
                  French Embassy.
                </h1>

                <h1
                  ref={slide3HeadingRef}
                  className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Partnership with <br />
                  French Embassy.
                  <span className={`hidden lg:block h-4 w-[30rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p
                  ref={slide3DescRef}
                  className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans"
                >
                  Slum to Stage Partners with the French Embassy in Nigeria in Activism Against Sexual Gender-Based
                  Violence(sGGB).
                </p>
                <div ref={slide3ButtonsRef} className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide4">
          <div className="sliderImage w-full">
            <Image
              loading="lazy"
              src="/assets/images/slide-4.jpg"
              alt="Every child deserves to be happy!"
              width={1280}
              height={600}
              className="object-cover w-full h-[60vh] md:h-[80vh] rounded-none border-none"
            />
          </div>
          <div className="flex items-start justify-start">
            <div
              className="container max-w-7xl mx-auto py-12 md:py-10 flex flex-col
             md:flex-row gap-8 md:gap-16 mb-8 px-4 md:px-8 lg:px-16"
            >
              <div className="w-full lg:w-1/2">
                <h1
                  ref={slide4HeadingRef}
                  className="block lg:hidden text-[32px] font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Slum 2 Stage dance production
                  <span className={`hidden lg:block h-4 w-[34rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>

                <h1
                  ref={slide4HeadingRef}
                  className="hidden lg:block text-6xl font-serif font-normal
                   leading-tight whitespace-pre-line text-start text-slum_gray_800"
                >
                  Slum 2 Stage <br />
                  dance production!
                  <span className={`hidden lg:block h-4 w-[30rem] bg-primary_border -mt-4 ml-1`}></span>
                </h1>
              </div>
              <div className="md:w-1/2">
                <p
                  ref={slide4DescRef}
                  className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sans"
                >
                  Reimagines Chinua Achebe&apos;s &ldquo;THINGS FALL APART&rdquo; in a Dance Production in Partnership
                  with Transcorp Hilton Abuja
                </p>
                <div ref={slide4ButtonsRef} className="flex gap-4">
                  <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                  <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
