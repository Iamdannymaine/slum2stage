import { Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6" >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex justify-between py-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/images/Logo.svg" alt="slum2stage logo" width={200} height={100} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Company links */}
            <div>
              <h3 className="text-sm font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-sm font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@slum2stage.org" className="text-gray-400 hover:text-white">
                    info@slum2stage.org
                  </a>
                </li>
                <li>
                  <a href="tel:+2348176231834" className="text-gray-400 hover:text-white">
                    +234 (817 623 1834)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <hr />
        <div className="flex justify-between py-16">
          <div>
            <p>© 2025 Slum2stage · All rights reserved</p>
          </div>
          <div className="flex gap-x-4 ">
            <Link href="" className="flex space-x-2">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </Link>

            <Link href="" className="flex space-x-2">
              <FaYoutube size={20} />
              <span>Youtube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
