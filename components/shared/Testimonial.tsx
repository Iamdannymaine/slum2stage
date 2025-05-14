"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useRef, useEffect, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"

import { EffectCoverflow } from "swiper/modules"

export const Testimonial_Carousel = () => {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper

      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex)
      }

      swiper.on("slideChange", handleSlideChange)
      swiper.on("init", handleSlideChange)

      return () => {
        swiper.off("slideChange", handleSlideChange)
        swiper.off("init", handleSlideChange)
      }
    }
  }, [])

  // Function to determine slide position
  const getSlidePosition = (index: any) => {
    if (index === activeIndex) {
      return "center"
    } else if (index === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)) {
      return "left"
    } else if (index === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)) {
      return "right"
    } else {
      return "hidden"
    }
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900">Testimonials</h2>
        </div>
        <Swiper
          ref={swiperRef}
          loop={true}
          speed={800}
          effect="coverflow"
          grabCursor={true}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: -20,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => {
            const position = getSlidePosition(index)

            return (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="p-4">
                  <div className={`testimonial-card ${position}-position`}>
                    <div className="testimonial-content">
                      {testimonial.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="testimonial-author">{testimonial.author}</div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

// Testimonial data with paragraphs separated by double line breaks
const testimonials = [
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous, has earned you a great deal of respect from them.",
    author: "Ada's Mum",
  },
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous, has earned you a great deal of respect from them.",
    author: "John's Parent",
  },
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous, has earned you a great deal of respect from them.",
    author: "Sarah's Guardian",
  },
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous.",
    author: "Michael's Dad",
  },
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous.",
    author: "Emma's Mother",
  },
  {
    content:
      "Here is a huge thank you for the positive impact you have had on my daughter, Alice. I have been meaning to let you know that in the last year, she has grown in confidence, grace, determination, and strength.\n\nHer growth extends beyond ballet and even unto her academics. Alice came 1st position in her class. I am super proud of her especially when I see how much fun she has dancing and how much she has grown in the last year.\n\nShe has a great deal of regard for you. Your approach with your students while professional and courteous, has earned you a great deal of respect from them.",
    author: "David's Parent",
  },
]
