"use client"


import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    // Add event listener safely
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`absolute top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "fixed top-4 shadow-md" : ""
        }`}
    >
      <div className="bg-white rounded-full py-3 px-6 flex items-center justify-between w-[800px] max-w-[90vw]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/images/Logo.svg" alt="slum2stage logo" width={100} height={100} />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link href="/about-us" className="text-slate-700 hover:text-sky-600 transition-colors text-sm">
            ABOUT US
          </Link>
          <Link href="/team" className="text-slate-700 hover:text-sky-600 transition-colors text-sm">
            TEAM
          </Link>
          <Link href="/program" className="text-slate-700 hover:text-sky-600 transition-colors text-sm">
            PROGRAM
          </Link>
          <Link href="/news" className="text-slate-700 hover:text-sky-600 transition-colors text-sm">
            NEWS
          </Link>
          <Link href="/contact-us" className="text-slate-700 hover:text-sky-600 transition-colors text-sm">
            CONTACT US
          </Link>
        </nav>

        <Link
          href="/donate"
          className="px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition-colors text-sm"
        >
          DONATE
        </Link>
      </div>
    </header>
  )
}
