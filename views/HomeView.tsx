"use client"

import {
  Chidinma_Story,
  Header,
  HeroCarousel,
  Offerings,
  Our_programs,
  Register_Form, Testimonial_Carousel, Who_We_Are, Partners
} from '@/components/shared'
import React from 'react'

const HomeView = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className="relative">
          <Header />
          <HeroCarousel />
        </div>
      </div>
      <Who_We_Are />
      <Chidinma_Story />
      <Offerings />
      <Our_programs />
      <Testimonial_Carousel />
      <Partners />
      <Register_Form />
    </>
  )
}

export default HomeView
