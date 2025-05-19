"use client"

import Link from "next/link"
import { TeamType } from "@/types"
import { Card, Image } from "@heroui/react"

interface TeamCardProps {
  team: TeamType
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden border-none">
      <Link href={`/team/${team.slug}`} className="group block">
        <div className="overflow-hidden">
          <Image
            loading="lazy"
            src={team.image || "/placeholder.svg"}
            alt={team.name}
            width={400}
            height={300}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale"
          />
        </div>
      </Link>
    </Card>
  )
}
