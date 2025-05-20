import Image from "next/image"
import Register_Form from "./homepage/Register_Form"

export default function VolunteerRegistration() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Form section */}
        <Register_Form />

        {/* Image section */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <Image
            loading="lazy"
            src="/placeholder.svg?height=800&width=600"
            alt="Children at school"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>


    </div>
  )
}
