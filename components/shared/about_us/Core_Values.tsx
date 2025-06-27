"use client";

import { Flag, Droplet, Diamond, CircleUser, Heart } from "lucide-react"
import { PiUsersThree } from "react-icons/pi";
import { TbBrush } from "react-icons/tb";
import { Section_Heading } from "../Section_Heading"
import Copy from "../navigation/Text_Reveal_Animation";



export function CoreValues() {
  const values = [
    { name: "Teamwork", icon: <PiUsersThree size={30} className="text-primary" /> },
    { name: "Creativity", icon: <TbBrush size={30} className="text-primary" /> },
    { name: "Perseverance", icon: <Flag size={30} className="text-primary" /> },
    { name: "Love", icon: <Heart size={30} className="text-primary" /> },
    { name: "Discipline", icon: <Droplet size={30} className="text-primary" /> },
    { name: "Integrity", icon: <Diamond size={30} className="text-primary" /> },
    { name: "Self-esteem", icon: <CircleUser size={30} className="text-primary" /> }
  ]

  // Split values into two groups for desktop layout
  const topRowValues = values.slice(0, 4);
  const bottomRowValues = values.slice(4);

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center space-y-8">
      <Section_Heading lgSize="56px" title='Our Values' />
      <div className="max-w-5xl mx-auto p-4 w-full">
        {/* Mobile view - 2 column grid with centered last item */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {values.map((value) => (
              <div
                key={value.name}
                className={`flex items-start gap-6 p-2 
                  ${values.length % 2 !== 0 && value === values[values.length - 1] ? 'col-span-2' : ''}`}
              >
<<<<<<< Updated upstream
                {value.icon}
                <span className="text-gray-800 font-medium font-sans text-base lg:text-[28px]">{value.name}</span>
=======
                <Copy>
                  {value.icon}
                  <span className="text-gray-800 font-medium font-sans text-[28px]">{value.name}</span>
                </Copy>
>>>>>>> Stashed changes
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - original layout with two rows */}
        <div className="hidden md:flex flex-col gap-12">
          <div className="flex flex-wrap justify-center gap-16">
            {topRowValues.map((value) => (
              <div key={value.name} className="flex items-center gap-2">
                {value.icon}
                <span className="text-gray-800 font-medium">{value.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            {bottomRowValues.map((value) => (
              <div key={value.name} className="flex items-center gap-2">
                {value.icon}
                <span className="text-gray-800 font-medium">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}