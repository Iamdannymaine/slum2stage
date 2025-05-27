import React from 'react'

interface SectionHeadingProps {
  title: string
  color?: string
}

const Section_Heading = ({
  title,
  color = "slum_gray_800",
}: SectionHeadingProps) => {

  return (
    <div>
      <h2
        className={`font-serif font-bold text-${color} text-[28px] md:text-[32px] lg:text-6xl`}
      >
        {title}
      </h2>
    </div>
  )
}

export default Section_Heading
