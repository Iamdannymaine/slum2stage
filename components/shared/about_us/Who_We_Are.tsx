"use client"

import { Image } from "@heroui/react";
import NextImage from "next/image";
import React from 'react'
import Section_Heading from '../Section_Heading'
import { Section_Paragraph } from '../Section_Paragraph'
import Button from '../Slum_Button'

const About_Who_We_Are = () => {
  return (
    <section className='w-full bg-secondary'>
      <div className="flex flex-col lg:flex-row items-center justify-center relative">

        <div className="w-full lg:w-1/2 space-y-8 text-white py-10 px-4 lg:px-28 order-2 lg:order-1">
          <Section_Heading color='white' title="Who we are!" />
          <Section_Paragraph
            color='white'
            paragraph={`Slum to Stage creates preliminary and intermediate dance training for 
          children and young adults in developing areas in Abuja through performing and creative arts programs that enhance both their academic and artistic performance, in cooperation with the Local Education Authority and Universal Basic Education Board in Abuja.

          \nOur training program provide these students with the opportunity to explore their talents, 
          while improving their socio-behavioural skills in class and at home.`} />

          <div className='md:hidden block'>
            <Button variant='pill-ghost' text='Learn more' />
          </div>

        </div>

        <div className="w-full lg:w-1/2 h-full order-1 lg:order-2">
          <Image
            loading="lazy"
            as={NextImage}
            src="/assets/images/about-us/who-we-are.png"
            alt="Dancers in colorful traditional attire in an artistic pose"
            width={500}
            height={500}
            className="w-full h-[100px] md:h-[400px] lg:h-full object-cover rounded-none items-center justify-center"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>

    </section>
  )
}

export default About_Who_We_Are
