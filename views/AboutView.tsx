"use client"

import {
  Header,
  AboutHero,
  AfterHero,
  About_Who_We_Are,
  We_Do_This,
  Mission_Vision,
  Why_We_Do_It,
  CoreValues,
  Our_Story,
  Presently

} from '@/components/shared'
import React from 'react'

const AboutView = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className="relative">
          <Header />
          <AboutHero />
        </div>
        <AfterHero />
        <About_Who_We_Are />
        <We_Do_This />
        <Mission_Vision />
        <Why_We_Do_It />
        <CoreValues />
        <Our_Story />
        <Presently />
      </div>

    </>
  )
}

export default AboutView
