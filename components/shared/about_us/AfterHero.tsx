'use client'

import React, { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export const AfterHero = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: '-100px' })

  return (
    <section ref={sectionRef} className='w-full bg-white py-16 lg:pb-10 lg:pt-28'>
      <div className="max-w-7xl mx-auto items-start justify-start lg:pb-20 lg:px-16 px-4">
        <AnimatePresence mode="wait">
          {isInView && (
            <motion.p
              key="fade-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className='text-primary font-serif text-[28px] lg:text-[38px] font-normal tracking-[1px]'
            >

              Slum to Stage We utilizes the power of dance

              <span className='block opacity-70 text-slum_gray_800'>
                to create safe creative communities, providing access <br />
                to artistic opportunities and life skills development.
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
