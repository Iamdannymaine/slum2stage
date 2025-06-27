"use client"

import React, { useEffect, useRef, useState } from "react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import Button from "../Slum_Button"
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { useRouter } from "next/navigation"

interface SlideData {
  id: number
  imageSrc: string
  altText: string
  mobileTitle: string
  desktopTitle: React.ReactNode
  description: string
  underlineWidth?: string
}


const slides: SlideData[] = [
  {
    id: 1,
    imageSrc: "/assets/images/slide-7.jpg",
    altText: "Every child deserves to be happy!",
    mobileTitle: "Every child deserves to be happy!",
    desktopTitle: (
      <>
        Every child <br />
        deserves <br /> to be happy!
      </>
    ),
    description: "Slum to Stage Uses Dance to Retain the Interest of 290 Children in Schools.",
    underlineWidth: "w-[21rem]"
  },
  {
    id: 2,
    imageSrc: "/assets/images/happy-school.jpg",
    altText: "Bring dance & joy to government school",
    mobileTitle: "Bring dance & joy to government school",
    desktopTitle: (
      <>
        Bring{" "}
        <span className="relative inline-block">
          <span className="relative z-10">dance & joy</span>
          <span className="absolute left-0 bottom-1 w-full h-4 bg-primary_border z-0"></span>
        </span>
        <br />
        to government <br /> school.
      </>
    ),
    description: "Inspiring Students Through Movement and in line with the UNESCO Happy Schools Program."
  },
  {
    id: 3,
    imageSrc: "/assets/images/french-embassy.png",
    altText: "Partnership with French Embassy",
    mobileTitle: "Partnership with \nFrench Embassy.",
    desktopTitle: (
      <>
        Partnership with <br />
        French Embassy.
      </>
    ),
    description: "Slum to Stage Partners with the French Embassy in Nigeria in Activism Against Sexual Gender-Based Violence(sGGB).",
    underlineWidth: "w-[30rem]"
  },
  {
    id: 4,
    imageSrc: "/assets/images/slide-4.jpg",
    altText: "Slum 2 Stage dance production",
    mobileTitle: "Slum 2 Stage dance production",
    desktopTitle: (
      <>
        Slum 2 Stage <br />
        dance production!
      </>
    ),
    description: "Reimagines Chinua Achebe's 'THINGS FALL APART' in a Dance Production in Partnership with Transcorp Hilton Abuja",
    underlineWidth: "w-[30rem]"
  }
]
export const HeroSlider = () => {
  const router = useRouter()
  const swiperRef = useRef<SwiperClass | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)


  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    // Pause auto-play when user manually changes slide
    setIsPlaying(false)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Pause auto-play when user manually navigates
    setIsPlaying(false)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    // Pause auto-play when user manually navigates
    setIsPlaying(false)
  }

  const handleDonation = () => {
    router.push("/donate")
  }


  return (
    <section className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.on("slideChange", () => setCurrentSlide(swiper.realIndex))
        }}
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
          el: ".hero-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 h-2 mx-1 rounded-full bg-white opacity-70 transition-all duration-300"></span>`
          },
        }}
        modules={[Autoplay, Pagination]}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={`swiper-slide${slide.id} group`}>
            <div className="sliderImage w-full relative">
              <Image
                loading="lazy"
                src={slide.imageSrc}
                alt={slide.altText}
                width={1280}
                height={600}
                className="object-cover w-full h-[60vh] md:h-[80vh] rounded-none border-none"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
                <GlassPlayButton onClick={handlePlayPause} isPlaying={isPlaying} />
                <GlassPagination totalSlides={slides.length} currentSlide={currentSlide} onSlideChange={handleSlideChange} />
              </div>
            </div>

            <div className="flex items-start justify-start">
              <div className="max-w-7xl mx-auto py-12 md:py-10 flex flex-col md:flex-row gap-8 md:gap-16 mb-8 px-4 md:px-8 lg:px-16">
                <div className="w-full lg:w-1/2">
                  <h1 className="block lg:hidden text-[32px] font-sf-display font-medium leading-tight whitespace-pre-line text-start text-slum_gray_800">
                    {slide.mobileTitle}
                    {slide.underlineWidth && (
                      <span className={`hidden lg:block h-4 ${slide.underlineWidth} bg-primary_border -mt-4 ml-1`}></span>
                    )}
                  </h1>

                  <h1 className="hidden lg:block text-6xl font-sf-display font-medium leading-tight whitespace-pre-line text-start text-slum_gray_800">
                    {slide.desktopTitle}
                    {slide.underlineWidth && (
                      <span className={`hidden lg:block h-4 ${slide.underlineWidth} bg-primary_border -mt-4 ml-1`}></span>
                    )}
                  </h1>
                </div>
                <div className="md:w-1/2">
                  <p className="text-[16px] md:text-lg lg:text-xl font-normal mb-6 text-start font-sf-text">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="circular-filled" text="Donate" onClick={handleDonation} />
                    <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

interface GlassPaginationProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
}

function GlassPagination({ totalSlides, currentSlide, onSlideChange }: GlassPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
      {Array.from({ length: totalSlides }).map((_, index) => (

        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-cyan-400 w-8" : "bg-white/60 hover:bg-white/80"
            }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

function GlassPlayButton({ onClick, isPlaying = false }: { onClick?: () => void; isPlaying?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        // Pause icon
        <div className="flex gap-1">
          <div className="w-1 h-4 bg-white rounded-sm" />
          <div className="w-1 h-4 bg-white rounded-sm" />
        </div>
      ) : (
        // Play icon
        <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
      )}

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-0 group-hover:opacity-100" />
    </button>
  )
}