"use client"

import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { Image } from '@heroui/image'


const company = [
  { label: "Team", href: "/team" },
  { label: "Program", href: "/program" },
  { label: "News", href: "/news" },
  { label: "Register", href: "/register" }
]


const mobileLink = [
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/team" },
  { label: "Program", href: "/program" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact-us" }
]


const contact = [
  { label: "info@slum2stage.org", href: "mailto:info@slum2stage.org" },
  { label: "Phone no", href: "tel: +234 (817 623 1834)" },
  { label: "Contact Us", href: "/contact-us" },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 md:py-12  w-full" >
      <div className="max-w-7xl mx-auto flex flex-col px-4">
        <div className="flex flex-col md:flex-row justify-between py-16">
          {/* Logo */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                loading="lazy"
                src="/assets/images/Logo.svg"
                alt="slum2stage logo" />
            </Link>
          </div>

          <div className="flex md:hidden pt-24">
            {/* Company links */}
            <ul className="flex flex-col space-y-4 uppercase">
              {mobileLink.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className='text-white font-sans font-normal text-sm'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            {/* Company links */}
            <div>
              <h3 className="text-sm font-sans font-normal mb-4">COMPANY</h3>
              <ul className="space-y-2">
                {company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-slum_gray_400 hover:text-white font-sans font-normal text-sm'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-sm font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2">
                {contact.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-slum_gray-400 hover:text-white font-sans font-normal text-sm'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <hr className="hidden md:block bg-slum_gray_800 h-[1px]" />
        <div className="hidden md:flex justify-between py-16">
          <div>
            <p className="font-sans text-sm font-normal text-slum_gray_200">© 2025 Slum2stage· All rights reserved</p>
          </div>
          <div className="flex gap-x-4 ">
            <Link href="" className="p-2 flex space-x-2 border border-slum_gray_800 text-slum_gray_200 font-sans text-sm font-normal rounded-full">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </Link>

            <Link href="#" className="p-2 flex space-x-2 border border-slum_gray_800 text-slum_gray_200 font-sans text-sm font-normal rounded-full">
              <FaYoutube size={20} />
              <span>Youtube</span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="block md:hidden bg-slum_gray_800 h-[1px]" />
    </footer >
  )
}

export default Footer
