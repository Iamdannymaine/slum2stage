"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../Slum_Button"
import { Menu, X } from "lucide-react"
import logo from "../../../public/assets/images/Logo.svg"
import { useRouter } from "next/navigation"

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

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isAnimating) return

    setIsAnimating(true)
    setIsMenuOpen(prev => !prev)
  }

  const router = useRouter();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle animation end
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return

    const menuElement = menuRef.current
    const overlayElement = overlayRef.current

    const handleAnimationEnd = () => {
      setIsAnimating(false)
    }

    menuElement.addEventListener('transitionend', handleAnimationEnd)
    overlayElement.addEventListener('transitionend', handleAnimationEnd)

    return () => {
      menuElement.removeEventListener('transitionend', handleAnimationEnd)
      overlayElement.removeEventListener('transitionend', handleAnimationEnd)
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
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${isMenuOpen
          ? 'opacity-50 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleMenu}
      />

      <div
        ref={headerRef}
        className={`mx-auto max-w-[80%] lg:max-w-4xl w-full px-4 py-2 flex items-center justify-between bg-white rounded-[40px] border border-gray-100 mt-8 transition-all duration-300 ${isScrolled ? "header_shadow" : ""}`}
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

      {/* Mobile menu - with animations */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'opacity-100 translate-y-0 mt-4'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{
          top: `calc(${(headerRef.current?.offsetHeight || 0) + 32 + 16}px)`, // Added 16px for spacing
        }}
      >
        <ul className="flex flex-col items-start gap-4 p-6">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="uppercase text-sm text-slum_gray_800 font-sans font-normal w-full transition-all duration-200 hover:bg-gray-50 rounded-md"
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
          <li className="w-full mt-2 px-4">
            <Button variant="circular-filled" text="DONATE" onClick={handleDonate} />
          </li>
        </ul>
      </div>
    </header>
  )
}