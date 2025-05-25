"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Button from '../Slum_Button'
import Image from 'next/image'

const Register_Form = () => {
  return (
    <section className="relative bg-black text-white">
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 z-0 h-[100dvh]">
        <div className="absolute inset-0 bg-black/10"></div>
        <Image
          loading="lazy"
          src="/assets/images/volunteer.png"
          alt="Children at school"
          className="object-cover w-full h-full rounded-none"
          width={100}
          height={100}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row pt-12 lg:pt-0">
        {/* Form section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 lg:p-6">
          <div className="w-full max-w-md bg-white text-black rounded-lg p-8 md:bg-opacity-100 bg-opacity-90">
            <h1 className="flex flex-col lg:hidden text-3xl font-serif mb-8 text-slum_gray-800">
              Become a
              <span className='font-semibold'>Dancer | Teacher</span>
            </h1>

            <div className='mb-4'>
              <h1 className="hidden lg:flex text-5xl font-serif mb-8 text-slum_gray-800">Become a Volunteer</h1>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="guardian" className="block text-sm text-slum_gray_700 font-normal font-sans">
                  Name of guardian/parent
                </label>
                <Input
                  id="guardian"
                  type="text"
                  placeholder="olivia@untitledui.com"
                  className="w-full border border-slum_gray_300 font-sans text-sm font-normal text-slum_gray_400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email"
                  className="block text-sm text-slum_gray_700 font-normal font-sans">
                  Email
                </label>
                <Input id="email" type="email" placeholder="olivia@untitledui.com"
                  className="w-full border border-slum_gray_300 font-sans text-sm font-normal text-slum_gray_400" />
              </div>

              <div className="space-y-2">
                <label htmlFor="kids" className="block text-sm text-slum_gray_700 font-normal font-sans">
                  No. of kids
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-slum_gray_300 font-sans text-sm font-normal text-slum_gray_400">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 flex justify-center">
                <Button text='REGISTER' />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image section */}
        <div className="hidden md:flex w-full md:w-1/2 relative h-full">
          <Image
            src="/assets/images/volunteer.png"
            alt="Children at school"
            className="object-cover w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  )
}

export default Register_Form