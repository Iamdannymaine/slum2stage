"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import Button from "./Slum_Button"
import { Menu, X } from "lucide-react"
import logo from "../../public/assets/images/Logo.svg"

const navigation = [
  { title: "About us", route: "/about-us" },
  { title: "Team", route: "/team" },
  { title: "Program", route: "/program" },
  { title: "News", route: "/news" },
  { title: "Contact Us", route: "/contact-us" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-center bg-transparent"
        }`}
    >
      <div className={`mx-auto fixed top-8 max-w-[80%] lg:max-w-4xl w-full px-4 py-2 flex items-center justify-between bg-white rounded-full 
         ${isScrolled ? "header_shadow" : ""}`}>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="slum2stage logo"
            className="w-20 sm:w-28"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center space-x-6">
            {navigation.map((item, index) => (
              <li key={index} className="uppercase text-sm text-slum_gray_800">
                <Link href={item.route}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <Button variant="circular-filled" text="DONATE" />
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow relative top-24 md:top-28 w-[80%] rounded-md">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navigation.map((item, index) => (
              <li key={index} className="uppercase text-sm text-slum_gray_800">
                <Link href={item.route} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
            <Button variant="circular-filled" text="DONATE" />
          </ul>
        </div>
      )}
    </header>
  )
}
