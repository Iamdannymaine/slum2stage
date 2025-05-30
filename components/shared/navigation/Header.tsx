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
  const headerRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent any default behavior
    setIsMenuOpen(prev => !prev)
  }

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDonate = () => {
    router.push("/donate")
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        ref={headerRef}
        className={`mx-auto max-w-[80%] lg:max-w-4xl w-full px-4 py-2 flex items-center justify-between bg-white rounded-[40px] border border-gray-100 mt-8 ${isScrolled ? "header_shadow" : ""}`}
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

      {/* Mobile menu - positioned relative to viewport */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-36 left-1/2 transform -translate-x-1/2 w-[80%] bg-white border border-gray-200 shadow-lg rounded-md z-50"
          style={{
            // Calculate position based on header height + margin
            top: `calc(${(headerRef.current?.offsetHeight || 0) + 32}px)`
          }}
        >
          <ul className="flex flex-col items-start gap-4 p-4">
            {navigation.map((item, index) => (
              <li key={index} className="uppercase text-sm text-slum_gray_800 font-sans font-normal w-full">
                <Link
                  href={item.route}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <Button variant="circular-filled" text="DONATE" onClick={handleDonate} />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}