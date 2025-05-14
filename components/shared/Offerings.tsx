import React from 'react'
import Section_Heading from './Section_Heading'
import { JigsawPuzzle } from './Jigsaw_Puzzle'

export const Offerings = () => {
  return (
    <section className="w-full bg-white min-h-screen">
      <div className='flex flex-col items-center justify-center'>
        <Section_Heading title="Our Offerings" />

        <JigsawPuzzle />
      </div>

    </section>
  )
}

