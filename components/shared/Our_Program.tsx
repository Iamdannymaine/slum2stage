"use client"

import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

interface ProgrmProps {
  heading: string
  spanText: string
  description: string
  image: string
  quote: string
  quoteColor?: string
  author?: string
  bgColor: string
  borderColor?: string
}

export const Our_Program: React.FC<ProgrmProps> = ({
  heading,
  spanText,
  description,
  image,
  quote,
  author,
  quoteColor = "#662200",
  bgColor,
  borderColor

}) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:space-x-28 pb-8 lg:py-24`}>

        <div className='pt-6 lg:-mt-4 w-full lg:w-1/2 order-2 lg:order-1'>
          <div>
            <h2 className={`font-sans font-bold text-slum_gray_800 text-xl md:text-[32px] lg:text-72 uppercase mb-6`}>
              {heading}&nbsp;<span className='font-thin text-gray-400'>{spanText}</span>
            </h2>
          </div>

          <p className={`font-sans font-normal text-slum_gray_800 text-sm lg:text-base leading-[36px] lg:leading-[32px]`}>
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Image and Quote */}
        <div className='w-full lg:w-1/2 flex flex-col space-y-6 order-1 lg:order-2'>
          {/* Image */}
          <div className='mb-6'>
            <Image
              loading='lazy'
              src={image}
              alt={heading}
              className={`object-cover z-0 w-full`}
              width={1000}
              height={1000}
            />
          </div>

          {/* Quote */}
          <div
            className="relative flex flex-col space-y-2 mx-auto text-start"
            style={{ color: quoteColor }}
          >

            <div className="flex relative text-lg font-sans italic leading-relaxed">
              {/* <FaQuoteLeft className="w-4 h-4 opacity-70 flex-shrink-0 mt-1 mr-2" /> */}
              <q >
                {quote.split("\n").map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}

                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </q>
            </div>
            {/* <FaQuoteRight className="w-4 h-4 opacity-70 ml-auto mt-2" /> */}

            {author && (
              <p className='font-sans font-semibold pl-6'>&mdash;{author}</p>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}