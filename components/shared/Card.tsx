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
    <Card className="relative h-[400px] rounded-md overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <CardHeader className="absolute z-20 top-1 flex-col !items-start p-4">
        <p className="text-tiny text-white uppercase font-bold">{title}</p>
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
      <CardFooter className="absolute bottom-0 z-20 text-white p-4">
        {description}
      </CardFooter>
    </Card>
  )
}
