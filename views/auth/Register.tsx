"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import FormField from "@/components/shared/form/Form_Field"
import Button from "@/components/shared/Slum_Button"
import { ImageGrid } from "@/components/shared"

export function DanceRegistrationForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen pt-40">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white pb-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tiny Feet, Big Moves</h1>
        <p className="text-gray-600 mb-6">
          Join our dance school and give your child the opportunity to learn, grow, and perform. Classes available for
          all ages and skill levels.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              label="Email (Parent's/Guardian's)"
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
            <div className="flex flex-wrap gap-4">
              {["adults", "kids"].map((style) => (
                <FormField
                  key={style}
                  label={style.charAt(0).toUpperCase() + style.slice(1)}
                  reqValue="*"
                  htmlFor={style}
                  type="radio"
                  id={style}
                  variant="bordered"
                  isInvalid={false}
                  errorMessage=""
                  size="sm"
                  onChange={() => setFormData({ ...formData, danceStyle: style })}
                  required
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Dance Style</Label>
            <div className="flex flex-wrap gap-4">
              {["ballet", "contemporary", "hipHop", "afroDance"].map((style) => (
                <FormField
                  key={style}
                  label={style.charAt(0).toUpperCase() + style.slice(1)}
                  reqValue="*"
                  htmlFor={style}
                  type="radio"
                  id={style}
                  variant="bordered"
                  isInvalid={false}
                  errorMessage=""
                  size="sm"
                  onChange={() => setFormData({ ...formData, danceStyle: style })}
                  required
                />
              ))}
            </div>
          </div>

          <div>
            <Button variant="circular-filled" text="REGISTER" />
          </div>
        </form>
      </div>

      {/* Image Grid Section */}
      <ImageGrid />
    </div>
  )
}
