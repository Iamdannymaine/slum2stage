import { Users, Paintbrush, Flag, Droplet, Diamond, CircleUser, Heart } from "lucide-react"
import { PiUsersThree } from "react-icons/pi";
import { TbBrush } from "react-icons/tb";
import Section_Heading from "../Section_Heading"

export function CoreValues() {
  const values = [
    { name: "Teamwork", icon: <PiUsersThree className="h-5 w-5 text-primary" /> },
    { name: "Creativity", icon: <TbBrush className="h-5 w-5 text-primary" /> },
    { name: "Perseverance", icon: <Flag className="h-5 w-5 text-primary" /> },
    { name: "Love", icon: <Heart className="h-5 w-5 text-primary" /> },
    { name: "Discipline", icon: <Droplet className="h-5 w-5 text-primary" /> },
    { name: "Integrity", icon: <Diamond className="h-5 w-5 text-primary" /> },
    { name: "Self-esteem", icon: <CircleUser className="h-5 w-5 text-primary" /> },
    { name: "Growth", icon: <Heart className="h-5 w-5 text-primary" /> },
  ]

  // Split values into two groups for desktop layout
  const topRowValues = values.slice(0, 4);
  const bottomRowValues = values.slice(4);

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center space-y-8">
      <Section_Heading title='Our Values' />
      <div className="max-w-3xl mx-auto p-4 w-full">
        {/* Mobile view - 2 column grid with centered last item */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {values.map((value) => (
              <div
                key={value.name}
                className={`flex items-start gap-2 p-2 
                  ${values.length % 2 !== 0 && value === values[values.length - 1] ? 'col-span-2' : ''}`}
              >
                {value.icon}
                <span className="text-gray-800 font-medium">{value.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - original layout with two rows */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {topRowValues.map((value) => (
              <div key={value.name} className="flex items-center gap-2">
                {value.icon}
                <span className="text-gray-800 font-medium">{value.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
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