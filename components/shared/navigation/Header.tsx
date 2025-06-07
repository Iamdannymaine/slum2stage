"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../Slum_Button"
import { Menu, X } from "lucide-react"
import logo from "../../../public/assets/images/Logo.svg"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import clsx from "clsx"

const navigation = [
  { title: "About us", route: "/about-us" },
  { title: "Team", route: "/team" },
  { title: "Program", route: "/our-program" },
  { title: "News", route: "/news" },
  { title: "Contact Us", route: "/contact-us" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isAnimating) return
    setIsAnimating(true)
    setIsMenuOpen(prev => !prev)
  }


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return

    const menuElement = menuRef.current
    const overlayElement = overlayRef.current

    const handleAnimationEnd = () => {
      setIsAnimating(false)
    }

    menuElement.addEventListener("transitionend", handleAnimationEnd)
    overlayElement.addEventListener("transitionend", handleAnimationEnd)

    return () => {
      menuElement.removeEventListener("transitionend", handleAnimationEnd)
      overlayElement.removeEventListener("transitionend", handleAnimationEnd)
    }
  }, [])


  const handleDonate = () => {
    router.push("/donate")
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={clsx(
          "fixed inset-0 bg-black z-40 transition-opacity duration-300",
          isMenuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <div
        ref={headerRef}
        className={clsx(
          "mx-auto max-w-[80%] lg:max-w-4xl w-full px-4 py-2 flex items-center justify-between bg-white rounded-[40px] border border-gray-100 mt-8 transition-all duration-300",
          isScrolled && "header_shadow"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            loading="lazy"
            src={logo}
            alt="slum2stage logo"
            className="w-20 sm:w-28"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center space-x-6">
            {navigation.map((item, index) => (
              <li key={index} className="uppercase text-sm text-slum_gray_800 font-sans font-normal">
                <Link href={item.route}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <Button variant="circular-filled" text="DONATE" onClick={handleDonate} />
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ translateY: -20, opacity: 0 }}
        animate={{
          translateY: isMenuOpen ? 0 : -20,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={clsx(
          "fixed inset-0 z-50 bg-white w-full h-screen overflow-y-auto transition-all duration-300",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Top Bar: Logo & Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <Image
              loading="lazy"
              src={logo}
              alt="slum2stage logo"
              className="w-20 sm:w-24"
            />
          </Link>
          <button onClick={toggleMenu}>
            <X size={28} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-4 px-6 pt-6">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="uppercase text-sm text-slum_gray_800 font-sans font-normal w-full transition-all duration-200 hover:bg-gray-100 rounded-md"
            >
              <Link
                href={item.route}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 px-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="w-full mt-4 px-4">
            <Button variant="circular-filled" text="DONATE" onClick={handleDonate} />
          </li>
        </ul>
      </motion.div>

    </header>
  )
}
