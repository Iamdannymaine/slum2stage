import React from 'react'

interface SectionHeadingProps {
  title: string
  size?: string
  color?: string
}

const Section_Heading = ({
  title,
  size = "72px",
  color = "slum_gray_800",
}: SectionHeadingProps) => {
  return (
    <div>
      <h2
        className={`font-serif font-bold text-${color} text-[28px] md:text-[32px] lg:text-[${size}]`}
      >
        {title}
      </h2>
    </div>
  )
}

export default Section_Heading
