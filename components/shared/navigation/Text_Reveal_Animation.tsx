"use client"

import React, { useRef, ReactNode } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText, ScrollTrigger)

interface CopyProps {
  children: ReactNode
  animateOnScroll?: boolean
  delay?: number
  duration?: number
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  duration = 1.5
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const split = useRef<SplitText | null>(null)

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    // Cleanup previous split
    split.current?.revert?.()

    split.current = SplitText.create(el, {
      type: "lines",
      linesClass: "line-split",
      reduceWhiteSpace: true
    })

    const lines = split.current.lines

    // Set initial opacity
    gsap.set(lines, { opacity: 0 })

    if (animateOnScroll) {
      gsap.to(lines, {
        opacity: 1,
        duration,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 30%",
          scrub: true, // enables reverse on scroll up
        }
      })
    } else {
      gsap.to(lines, {
        opacity: 1,
        duration,
        stagger: 0.08,
        ease: "power2.out",
        delay
      })
    }

    return () => {
      split.current?.revert?.()
    }
  }, {
    scope: containerRef,
    dependencies: [animateOnScroll, delay, duration]
  })

  return (
    <>
      {/* <style jsx global>{`
        .line-split {
          display: block;
          overflow: hidden;
        }
      `}</style> */}

      <div ref={containerRef}>
        {children}
      </div>
    </>
  )
}
