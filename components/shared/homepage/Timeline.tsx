'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  {
    number: 960000,
    description: "People reached through mainstream and social media advocacy",
    position: "right",
  },
  {
    number: 9010,
    description: "Volunteers hours dedicated to the running of our programs",
    position: "left",
  },
  {
    number: 180,
    description: "Children and young adults trained through our dance program",
    position: "right",
  },
  {
    number: 25,
    description: "Volunteers actively participated in our programs",
    position: "left",
  },
]

const AnimatedNumber = ({ targetNumber, trigger }: { targetNumber: number; trigger: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let current = 0
    const duration = 1500
    const intervalTime = 20
    const increment = targetNumber / (duration / intervalTime)

    const interval = setInterval(() => {
      current += increment
      if (current >= targetNumber) {
        setCount(targetNumber)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [trigger, targetNumber])

  return <>{count.toLocaleString()}</>
}

const Timeline = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className='w-full bg-snow_white min-h-screen py-32'>
      <div className='flex flex-col items-center justify-center space-y-12'>
        <div>
          <h1 className='font-serif font-bold text-slum_gray_800 text-[28px] md:text-[32px] lg:text-[56px] flex flex-col leading-snug'>
            <span className='capitalize'>Our impact</span>
            <span className=''>in numbers</span>
          </h1>

        </div>

        <div className="grid grid-cols-1 gap-16 px-4 lg:hidden place-items-center mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-5xl font-bold mb-2 relative z-10 font-serif uppercase text-[#056980]">
                <AnimatedNumber targetNumber={stat.number} trigger={inView} />
              </h2>
              <p className="text-sm text-slum_gray-600 max-w-xs font-sans font-normal">
                {index === 3 ? (
                  <>
                    Actively participate
                    <br />
                    in our program
                  </>
                ) : (
                  stat.description
                )}
              </p>

            </div>
          ))}
        </div>


        <div className=" hidden lg:block relative w-full max-w-4xl mx-auto py-16 px-4">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-[8rem] bottom-[9.5rem] w-px border-l border-dashed border-secondary -translate-x-1/2" />

          <div className="relative space-y-32">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute left-1/2 top-[40%] w-3 h-3 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

                <div className={`group relative flex ${stat.position === "left" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="w-1/2" />
                  <div
                    className={`w-1/2 pt-7 ${stat.position === "left"
                      ? "pr-12 text-end flex flex-col items-end"
                      : "pl-12 text-start flex flex-col items-start"
                      }`}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold text-[#056980] mb-2 relative z-10 font-serif uppercase">
                      <AnimatedNumber targetNumber={stat.number} trigger={inView} />
                    </h2>
                    <p className="text-sm md:text-lg text-slum_gray-600 max-w-xs font-sans font-normal">
                      {index === 3 ? (
                        <>
                          Actively participate
                          <br />
                          in our program
                        </>
                      ) : (
                        stat.description
                      )}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Timeline
