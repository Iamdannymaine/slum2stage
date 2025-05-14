'use client'

import { Image } from '@heroui/image'
import React, { useState, useEffect, useRef } from 'react'
import Section_Heading from './Section_Heading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel"


const partners: { image: string }[] = [
  { image: "/assets/images/partners/twirl-africa.svg" },
  { image: "/assets/images/partners/cmf.svg" },
  { image: "/assets/images/partners/transcorp-hilton.svg" },
  { image: "/assets/images/partners/intitute-francias.svg" },

  { image: "/assets/images/partners/shushi.svg" },
  { image: "/assets/images/partners/asvol.svg" },
  { image: "/assets/images/partners/ambassador-de-france.svg" },
  { image: "/assets/images/partners/the-brooks-africa.svg" },
  { image: "/assets/images/partners/monoliza.svg" },
]

export const Partners = () => {
  const firstFour = partners.slice(0, 4)
  const lastFive = partners.slice(4)

  const [api, setApi] = useState<CarouselApi>();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) { return; }
  }, [api]);

  return (
    <section className='w-full py-10'>
      <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
        <Section_Heading title='Our Parters' />
        {/* Desktop Grids */}
        <div className='hidden sm:grid grid-cols-4 gap-4 mb-8 items-center justify-center mx-auto'>
          {firstFour.map((partner, index) => (
            <Image
              key={`partner-first-${index}`}
              src={partner.image}
              alt='partner-logo'
              className='object-contain w-full h-full'
            />
          ))}
        </div>

        <div className='hidden sm:grid grid-cols-5 gap-4 items-center justify-center mx-auto'>
          {lastFive.map((partner, index) => (
            <Image
              key={`partner-last-${index}`}
              src={partner.image}
              alt='partner-logo'
              className='object-contain w-full h-full'
            />
          ))}
        </div>

        <div className='flex md:hidden w-full mt-4'>
          <Carousel
            orientation='horizontal'
            setApi={setApi}
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
            }}
            autoplay
            className="w-full"
          >
            {/* Tab Content */}
            <CarouselContent className="w-full mx-auto gap-4">
              {partners.map((partner, index) => (
                <CarouselItem key={`partner-slide-${index}`} className="basis-1/3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={partner.image}
                      alt='partner-logo'
                      className='object-cover'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}


