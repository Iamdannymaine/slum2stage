'use client'

import Link from "next/link"
import { TeamType } from "@/types"
import { Card, Image, CardFooter } from "@heroui/react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image";
interface TeamCardProps {
  team: TeamType
  onHover?: (team: TeamType) => void
  onLeave?: () => void
}

export function TeamCard({ team, onHover, onLeave }: TeamCardProps) {
  return (
    <Card
      className="relative rounded-lg overflow-hidden border-none max-h-[400px] group"
      onMouseEnter={() => onHover?.(team)}
      onMouseLeave={onLeave}
    >
      <Link href={`/team/${team.slug}`} className="block">
        <div className="overflow-hidden">
          <Image
            loading="lazy"
            as={NextImage}
            src={team.image || "/placeholder.svg"}
            alt={team.name}
            width={400}
            height={300}
            className="w-full object-cover transition-transform duration-300 
            group-hover:scale-105 filter grayscale group-hover:grayscale-0 group-hover:filter-none"
          />
        </div>
      </Link>

      <CardFooter
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  
        overflow-hidden absolute rounded-lg bottom-1 w-full z-10"
      >
        <Button className="font-sans bg-primary text-white flex flex-col w-full p-3 py-8">
          <span className="font-semibold text-lg">{team.name}</span>
          <span className="font-normal text-xs">{team.position}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
