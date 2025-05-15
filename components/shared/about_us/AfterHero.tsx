"use client"

import React from 'react'
import { motion } from 'framer-motion'


export const AfterHero = () => {
  return (
    <section className='w-full bg-white py-16 lg:pb-10 lg:pt-28'>
      <div className="max-w-7xl mx-auto items-start justify-start lg:pb-20 lg:px-10 px-4">
        <p className='font-serif text-[28px] lg:text-[38px] font-normal tracking-[1px]'>
          <span className='text-primary'>We utilize the power of dance</span>
          <motion.span
            className='text-gray-400'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            &nbsp;to create safe <br /> creative communities, providing access to artistic opportunities and life skills development.
          </motion.span>
        </p>

      </div>
    </section>
  )
}

