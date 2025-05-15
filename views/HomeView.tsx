"use client"

import {
  Chidinma_Story,
  Header,
  HeroCarousel,
  Offerings,
  Our_programs,
  Register_Form,
  Timeline,
  Testimonial_Carousel,
  Who_We_Are,
  Partners
} from '@/components/shared'
import React from 'react'

const HomeView = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HeroCarousel />
      </div>
      <Who_We_Are />
      <Chidinma_Story />
      <Offerings />
      <Our_programs />
      <Timeline />
      <Testimonial_Carousel />
      <Partners />
      <Register_Form />
    </>
  )
}

export default HomeView
