import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'



const Register_Form = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Form section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white text-black rounded-lg p-8">
            <h1 className="text-4xl font-serif mb-8 text-[#1a3b5d]">Become a Voluteer</h1>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="guardian" className="block text-sm text-gray-700">
                  Name of guardian/parent
                </label>
                <Input
                  id="guardian"
                  type="text"
                  placeholder="olivia@untitledui.com"
                  className="w-full border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="olivia@untitledui.com" className="w-full border-gray-300" />
              </div>

              <div className="space-y-2">
                <label htmlFor="kids" className="block text-sm text-gray-700">
                  No. of kids
                </label>
                <Select>
                  <SelectTrigger className="w-full border-gray-300">
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

              <div className="pt-4 flex justify-end">
                <Button className="bg-[#4ABED3] hover:bg-[#3a9eb0] text-white rounded-full px-8">REGISTER</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full flex md:w-1/2 relative min-h-[200px] md:min-h-0 justify-self-end">
          <Image
            src="/assets/images/volunteer.png"
            alt="Children at school"

            className="object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Register_Form
