'use client'

import Image from 'next/image'


export const AboutHero = () => {


  return (
    <section className="relative w-full items-center justify-center">
      <div className="relative w-full h-[380px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
        {/* Desktop Image */}

        <Image
          src="/assets/images/about-us/about-hero.png"
          alt="Fallback About Us Hero"
          className="rounded-none hidden md:block w-full h-full object-cover"
          width={1400}
          height={680}
          loading="lazy"
        />


        {/* Mobile Image */}

        <Image
          src="/assets/images/about-us/about-mobile-hero.png"
          alt="Fallback Mobile About Us Hero"
          className="rounded-none block md:hidden w-full h-full object-cover"
          width={400}
          height={400}
          loading="lazy"
        />



      </div>
    </section>
  )
}
