'use client'

import Link from "next/link"
import { TeamType } from "@/types"
import { Image } from "@heroui/react"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NextImage from "next/image";

interface TeamCardProps {
  team: TeamType
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Card
      className="relative border-none max-w-[313px]h h-full overflow-hidden cursor-pointer group">
      <Link href={`/team/${team.slug}`} className="block">
        <div className="overflow-hidden">
          <Image
            loading="lazy"
            as={NextImage}
            src={team.image || "/placeholder.svg"}
            alt={team.name}
            width={400}
            height={300}
            className="w-full object-cover transition-transform duration-300 rounded-xl
            group-hover:scale-105 filter grayscale group-hover:grayscale-0 group-hover:filter-none"
          />
        </div>
      </Link>

      <CardFooter
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  
         absolute rounded-lg bottom-1 w-full z-10"
      >
        <Button className="font-sans bg-primary text-white flex flex-col w-full p-3 py-8">
          <span className="font-semibold text-lg">{team.name}</span>
          <span className="font-normal text-xs">{team.position}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
