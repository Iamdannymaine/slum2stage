import React from 'react'
import Section_Heading from './Section_Heading'
import { image } from '@heroui/react'
import { Program_Card } from './Card'


type Program = {
  id: number
  image?: string
  title: string
  description?: string
  bgColor?: string
}

// Sample slides data
const programs: Program[] = [
  {
    id: 1,
    image: "/assets/images/dance.jpg",
    title: "Dance",
  },
  {
    id: 2,
    image: "/assets/images/after-school.png",
    title: "After School",
  },
  {
    id: 3,
    title: "Home Visits",
    description: "Our Visit programs help to establish strong, positive communications between our team members, coordinators and our sponsored children’s parents",
    bgColor: "#44B5D0"
  }
]

const Our_programs = () => {
  return (
    <section className="w-full bg-smoke_white py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-12">
        <Section_Heading title="Our Programs" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Program_Card key={program.id}
              image={program.image}
              title={program.title}
              bgColor={program.bgColor}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Our_programs
