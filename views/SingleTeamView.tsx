'use client'

import { ChevronLeft } from "lucide-react"
import { TeamType } from "@/types"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CldImage } from "next-cloudinary"
import { getCloudinaryUrl, getCldImageUrl } from "@/utils"
import { useState } from "react"

interface BlogPostPageProps {
  team: TeamType
}



export function SingleTeamView({ team }: BlogPostPageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const cleanPublicId = team.image_public_id.replace('Slum2Stage_Website/', '');

  const placeholderUrl = getCldImageUrl({
    src: cleanPublicId,
    width: 200,
    quality: 10,
    blur: 1000,
    effect: 'colorize:50'
  })

  return (
    <section className="bg-white py-40 w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto items-start space-y-8 px-4 lg:px-16">
        <Link
          href="/team"
          className="flex space-x-2 text-primary items-center justify-start capitalize font-sans font-normal text-sm lg:text-lg"
        >
          <ChevronLeft className="w-6 h-6" />
          <span>Back to Team</span>
        </Link>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <Card className="lg:w-2/5 w-full h-full overflow-hidden rounded-[20px] border-b-5 border-r-5 border-r-secondary border-b-secondary"
            style={{ maxWidth: "100%" }}>
            <CldImage
              src={cleanPublicId}
              alt={team.name}
              width={535}
              height={500}
              className={`w-full h-[380px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
                object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0 bg-gray-200 animate-pulse'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              format="webp"
              quality="auto:best"
              crop="fill"
              loading="lazy"
              priority={false}
              placeholder="blur"
              blurDataURL={placeholderUrl}
              onLoad={() => setImageLoaded(true)}
            />
          </Card>

          <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:pt-2 pt-0">
            <h1 className="font-serif text-start text-slum_gray_800 text-xl w-full
             md:text-2xl lg:text-5xl font-bold mb-3 uppercase">
              {team.name}
            </h1>
            <div
              className="text-sm md:text-base leading-[40px]
               text-slum_gray_800 [&>p]:mb-6 max-w-[620px] font-sans text-justify"
              dangerouslySetInnerHTML={{ __html: team.content }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}