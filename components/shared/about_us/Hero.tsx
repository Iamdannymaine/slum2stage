import Image from 'next/image'
import React from 'react'

export const AboutHero = () => {
  return (
    <section className='w-full items-center justify-center'>
      <div className='h-auto lg:h-[80vh] w-full lg:mb-28'>
        <Image
          loading="lazy"
          src="/assets/images/about-us/about-hero.png"
          alt='about-us hero image'
          className='rounded-none hidden md:block w-full'
          width={1400}
          height={680}
        />

        <Image
          loading="lazy"
          src="/assets/images/about-us/about-mobile-hero.png"
          alt='about-us hero image'
          className='rounded-none block md:hidden'
          width={400}
          height={400}
        />
      </div>



    </section>
  )
}


