'use client'

import React from 'react'
import { Card, CardFooter, CardHeader, Image } from '@heroui/react'

export const Program_Card = ({
  title,
  image,
  bgColor = '#000',
  description,
}: {
  title: string
  image?: string
  bgColor?: string
  description?: string
}) => {
  return (
    <Card className={`relative h-[400px] overflow-hidden cursor-pointer group`}
      style={{ backgroundColor: bgColor }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Header */}
      <CardHeader className="absolute z-20 top-1 flex-col !items-start p-4">
        <p className="text-base lg:text-lg text-white uppercase font-bold font-sans rounded-md ">{title}</p>
      </CardHeader>

      {/* Background Image */}
      {image && (
        <Image
          removeWrapper
          loading="lazy"
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
      )}

      {/* Footer */}
      <CardFooter className="absolute bottom-0 z-20 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </CardFooter>
    </Card>
  )
}
