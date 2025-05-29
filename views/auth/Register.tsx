"use client"

import { useState, useEffect } from "react"
import FormField from "@/components/shared/form/Form_Field"
import Button from "@/components/shared/Slum_Button"
import { Label } from "@/components/ui/label"
import { PinterestMasonry } from "@/components/shared/Mansory_Grid"
import { Section_Heading, Section_Paragraph } from "@/components/shared"


export function DanceRegistrationForm() {
  const [shuffledColumns, setShuffledColumns] = useState<[any[], any[]]>([[], []]);

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    age: "",
    parentName: "",
    email: "",
    address: "",
    category: "",
    danceStyle: "",
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value })
  }


  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }


  const categoryOptions = [
    { id: "adult", value: "Adult", label: "Adult" },
    { id: "kids", value: "Kids and Teens", label: "Kids and Teens" },
  ]


  // Dance style options
  const danceStyleOptions = [
    { id: "ballet", value: "Ballet", label: "Ballet" },
    { id: "contemporary", value: "Contemporary", label: "Contemporary" },
    { id: "hiphop", value: "Hip-Hop", label: "Hip-Hop" },
    { id: "afro", value: "Afro dance", label: "Afro dance" },
  ]

  return (
    <div className="flex flex-col lg:flex-row w-full pt-24 justify-between">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 px-4 pt-20 bg-white pb-4 lg:px-12">
        <div className="space-y-4 mb-10">
          <Section_Heading lgSize="56px" title="Tiny Feet, Big Moves" />
          <p className={`font-sans font-normal text-slum_gray_900 text-sm lg:text-lg leading-[36px] lg:leading-[32px]`}>
            Join our dance school and give your child the opportunity to learn, grow, and perform. Classes available for
            all ages and skill levels."
          </p>

        </div>
        <form onSubmit={handleSubmit}
          className="space-y-6">
          <div className="space-y-2">

            <FormField
              label="Full Name (Surname first)"
              reqValue="*"
              htmlFor="fullName"
              type="text"
              id="fullName"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="Ogunjobi Michelle"
              //onChange={handleChange("fullName")}
              required
            />
          </div>
          <div className="space-y-2">
            <FormField
              label="Date of Birth"
              reqValue="*"
              htmlFor="dateOfBirth"
              type="text"
              id="dateOfBirth"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="18 Nov, 2012"
              // onChange={handleChange("dateOdBirth")}
              required
            />
          </div>

          <div className="space-y-2">
            <FormField
              label="Age"
              reqValue="*"
              htmlFor="age"
              type="text"
              id="age"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="10"
              // onChange={handleChange("age")}
              required
            />
          </div>

          <div className="space-y-2">
            <FormField
              label="Parent's/Guardian's name"
              reqValue="*"
              htmlFor="parentName"
              type="text"
              id="parentName"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="Mr Ogunjobi Israel"
              //onChange={handleChange("parentName")}
              required
            />
          </div>
          <div className="space-y-2">
            <FormField
              label="Address"
              reqValue="*"
              htmlFor="address"
              type="text"
              id="address"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="Fari Street Garki"
              //onChange={handleChange("address")}
              required
            />
          </div>
          <div className="space-y-2">
            <FormField
              label="Email (Personal/Parent/Guardian)"
              reqValue="*"
              htmlFor="email"
              type="email"
              id="email"
              variant="bordered"
              isInvalid={false}
              errorMessage=""
              size="sm"
              placeholder="olinicjunti@edu.com"
              //onChange={handleChange("email")}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <div className="flex gap-4">
              {categoryOptions.map((category) => (
                <button key={category.id} className="border border-gray-200 p-3 px-6 rounded-full">
                  {category.label}
                </button>
              ))}
            </div>

          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {danceStyleOptions.map((category) => (
                <button key={category.id} className=" border border-gray-200 p-3 rounded-full">
                  {category.label}
                </button>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-center lg:items-start lg:justify-start">
            <Button variant="circular-filled" text="REGISTER" />
          </div>
        </form>
      </div>

      <PinterestMasonry />
      {/* <ImageGrid /> */}
    </div>
  )
}
