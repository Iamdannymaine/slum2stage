"use client"

import React from 'react'
import { Section_Heading } from '../Section_Heading'
import { Program_Card } from '../Card'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"



type Program = {
  id: number
  image?: string
  title: string
  description?: string
}

// Sample slides data
const programs: Program[] = [
  {
    id: 1,
    image: "/assets/images/dance.jpg",
    description: "Our Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents",
    title: "Dance",
  },
  {
    id: 2,
    image: "/assets/images/after-school.png",
    description: "Our Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents",
    title: "After School",
  },
  {
    id: 3,
    title: "Home Visits",
    image: "/assets/images/our-program/our-program-3.png",
    description: "Our Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents",
  }
]

const Our_programs = () => {


  return (
    <section className="w-full bg-[#FFEEE5] py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center 
      justify-center space-y-12 px-4 lg:px-0">
        <Section_Heading title="Our Programs" />

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Program_Card key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
        <Carousel className="lg:hidden mt-4">
          <CarouselContent>
            {programs.map((program, index) => (
              <CarouselItem
                key={`partner-slide-${index}`}
                className="basis-10/12">
                <Program_Card key={program.id}
                  image={program.image}
                  title={program.title}
                  description={program.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <div className='flex md:hidden w-full mt-4'>
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={10}
            className="mySwiper"
          >
            {programs.map((program, index) => (
              <SwiperSlide
                key={`partner-slide-${index}`}
                style={{ width: "100%" }}
                className="w-full">
                <Program_Card key={program.id}
                  image={program.image}
                  title={program.title}
                  bgColor={program.bgColor}
                  description={program.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  )
}

export default Our_programs
