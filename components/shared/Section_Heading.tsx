import React from 'react'

const Section_Heading = ({ title, size, color }: { title: string, size?: string | "72px", color?: string | "slum_gray_800" }) => {
  return (
    <div>
      <h2 className={`font-serif font-bold text-${color} text-[28px] md:text-[32px] lg:text-${size}`}>{title}</h2>
    </div>
  )
}

export default Section_Heading
