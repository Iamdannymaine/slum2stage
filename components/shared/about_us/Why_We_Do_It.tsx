"use client"

import React from 'react'
import { Section_Heading } from '../Section_Heading'
import { Avatar_Flex } from '../Avatar_Flex'
import { Section_Paragraph } from '../Section_Paragraph'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'



export const Why_We_Do_It = () => {
  return (
    <section className="w-full bg-black min-h-screen py-20 flex flex-col">
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <Section_Heading lgSize='56px' color='white' title='Why we do it' />

        <div
          className={`flex flex-col lg:flex-row w-full items-start justify-between gap-x-20 mt-8 lg:mt-16 `}
        >
          {/* blockquote */}
          <div className="w-full lg:w-1/2 items-start justify-start space-y-12 pt-12">
            <div className="relative mx-auto">
              <blockquote className="relative text-xl font-serif italic text-primary leading-relaxed flex">
                {/* Left quote (superscript) */}
                <sup className="mr-0 lg:mr-1">
                  <FaQuoteLeft className="w-2 h-2 lg:w-4 lg:h-4 text-primary opacity-70 flex-shrink-0" />
                </sup>

                {/* Quote text */}
                <span>
                  There must be a way to ensure inclusive and diverse education for all.
                  A shift must be taken to explore other non-conventional ways through which children
                  can achieve better academic success.
                  {/* Right quote (subscript) - appears immediately after the full stop */}
                  <sub className="-mb-1 ml-1 inline-block">
                    <FaQuoteRight className="w-2 h-2 lg:w-4 lg:h-4 text-primary opacity-70" />
                  </sub>
                </span>
              </blockquote>
            </div>

            <div className='hidden lg:block'> <Avatar_Flex avatar='/assets/images/about-us/avatar.png' name='Emmanuel C. Osahor' /></div>

          </div>
          {/* 
          description */}
          <div className="w-full lg:w-1/2 text-start pt-10">
            <Section_Paragraph
              color='white'
              width='100%'
              paragraph={`Nigeria records the world’s highest rate of out-of-school children according to UNICEF. While the absence of financial support is the major contributor of this issue, there are several other factors for children’s’ low attendance and poor performance in schools. 

                While the world aims to achieve quality education for early years, children living in underserved areas and at-risk youth although are the focus, have low interests in going to academic schools. In times when these children have access to education, some of them drop out of school because of low attention span or the pressures from the outside world. Without any sort of programmatic intervention or support, such children have little self-sufficiency, and no chance of creatively participating in their communities.
                
                Prompted by these challenges, Slum to Stage utilizes the power of dance to create safe creative communities, providing access to artistic opportunities and life-skills development while ensuring academic success.`} />

            <div className='block lg:hidden mt-4'>
              <Avatar_Flex avatar='/assets/images/about-us/avatar.png' name='Emmanuel C. Osahor' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
