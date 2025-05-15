"use client"

import React from 'react'
import Section_Heading from './Section_Heading'
import { Program_Card } from './Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



type Program = {
  id: number
  image?: string
  title: string
  description?: string
  bgColor?: string
}

// Sample slides data
const programs: Program[] = [
  {
    id: 1,
    image: "/assets/images/dance.jpg",
    title: "Dance",
  },
  {
    id: 2,
    image: "/assets/images/after-school.png",
    title: "After School",
  },
  {
    id: 3,
    title: "Home Visits",
    description: "Our Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents",
    bgColor: "#44B5D0"
  }
]

const Our_programs = () => {


  return (
    <section className="w-full bg-smoke_white py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12 px-4 lg:px-0">
        <Section_Heading size='48px' title="Our Programs" />

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Program_Card key={program.id}
              image={program.image}
              title={program.title}
              bgColor={program.bgColor}
              description={program.description}
            />
          ))}
        </div>

        <div className='flex md:hidden w-full mt-4'>
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
        </div>
      </div>
    </section>
  )
}

export default Our_programs
