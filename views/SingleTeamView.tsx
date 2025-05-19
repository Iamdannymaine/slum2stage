"use client"

import { Image } from "@heroui/react";
import NextImage from "next/image";
import { ChevronLeft } from "lucide-react"
import { TeamType } from "@/types"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BlogPostPageProps {
  team: TeamType
}

export function SingleTeamView({ team }: BlogPostPageProps) {


  return (
    <section className="bg-white py-40 w-full flex flex-col items-center justify-center ">
      <div className="max-w-7xl mx-auto items-start space-y-8 px-4 lg:px-0">
        <Link href="/team" className="flex space-x-2 text-primary items-center justify-start capitalize font-sans font-normal text-sm lg:text-lg">
          <ChevronLeft className="w-6 h-6" />
          <span> Back to Team</span>
        </Link>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <Card className="w-full h-full overflow-hidden rounded-[20px] border-b-5 border-r-5 border-r-secondary border-b-secondary"
            style={{ maxWidth: "100%" }}>
            <Image
              loading="lazy"
              as={NextImage}
              src={team.image || "/placeholder.svg"}
              alt={team.name}
              width={535}
              height={400}
              className="w-full h-[380px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"

            />
          </Card>
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-start text-slum_gray_800 text-xl md:text-2xl lg:text-5xl font-bold mb-3 uppercase leading-snug">
              {team.name}
            </h1>
            <div
              className="leading-[40px] text-slum_gray_800 [&>p]:mb-6"
              dangerouslySetInnerHTML={{ __html: team.content }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

