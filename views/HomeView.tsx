
import { Header, HeroCarousel, Register_Form } from '@/components/shared'
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

      <Register_Form />
    </>
  )
}

export default HomeView
