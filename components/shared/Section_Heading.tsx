import React from 'react'

const Section_Heading = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="font-serif font-bold text-slum_gray_800 text-[32px] md:text-[36px] lg:text-[72px]">{title}</h2>
    </div>
  )
}

export default Section_Heading
