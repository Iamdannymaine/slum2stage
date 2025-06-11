'use client'

import { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { getCldImageUrl } from '@/utils'
import { motion } from 'framer-motion'

export const AboutHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  const cleanPublicIdDesktop = 'Slum2Stage_Website/about-hero_vawqjf'
  const cleanPublicIdMobile = 'Slum2Stage_Website/about-mobile-hero_cgyecu'

  const placeholderUrl = getCldImageUrl({
    src: cleanPublicIdDesktop,
    width: 200,
    quality: 10,
    blur: 1000,
    effect: 'colorize:50',
  })

  return (
    <section className="relative w-full items-center justify-center">
      <div className="relative w-full h-[380px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
        {/* Desktop Image */}
        {!imageFailed ? (
          <CldImage
            src={cleanPublicIdDesktop}
            alt="About Us Hero"
            width={1400}
            height={680}
            className={`w-full h-full object-cover transition-opacity duration-500 hidden md:block`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            format="webp"
            quality="auto:best"
            crop="fill"
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderUrl}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <Image
            src="/assets/images/about-us/about-hero.png"
            alt="Fallback About Us Hero"
            className="rounded-none hidden md:block w-full h-full object-cover"
            width={1400}
            height={680}
            loading="lazy"
          />
        )}

        {/* Mobile Image */}
        {!imageFailed ? (
          <CldImage
            src={cleanPublicIdMobile}
            alt="About Us Hero Mobile"
            width={400}
            height={400}
            className={`rounded-none block md:hidden w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0 bg-gray-200 animate-pulse'
              }`}
            sizes="100vw"
            format="webp"
            quality="auto:best"
            crop="fill"
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderUrl}
          //onLoad={() => setImageLoaded(true)}
          //onError={() => setImageFailed(true)}
          />
        ) : (
          <Image
            src="/assets/images/about-us/about-mobile-hero.png"
            alt="Fallback Mobile About Us Hero"
            className="rounded-none block md:hidden w-full h-full object-cover"
            width={400}
            height={400}
            loading="lazy"
          />
        )}


      </div>
    </section>
  )
}
