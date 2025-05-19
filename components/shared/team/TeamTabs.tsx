"use client"

import { useState } from "react";
import { TeamCard } from "./TeamCard";
import { getAllTeamMembers } from "@/lib"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import Section_Heading from "../Section_Heading";
import { Section_Paragraph } from "../Section_Paragraph";
import { TeamType } from "@/types";




export function TeamTabs() {
  const allMembers = getAllTeamMembers();
  const executives = allMembers.filter(member => member.role === "executive");
  const advisors = allMembers.filter(member => member.role === "advisor");

  const [hoveredTeam, setHoveredTeam] = useState<TeamType | null>(null)

  return (

    <>
      <div className="my-8">
        <Section_Heading size="96px" title="Meet the team" />

        {hoveredTeam ? (
          <div className="w-[55%]">
            <p className="font-sans font-normal text-slum_gray_900 text-sm lg:text-base leading-[36px] 
          lg:leading-[32px] transition-opacity duration-300">
              {hoveredTeam.hoverText}
            </p>
          </div>
        ) : (
          <Section_Paragraph paragraph="Get to know the passionate professionals behind our program" />
        )}
      </div>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="advisory" className="mt-14 space-y-8 flex flex-col items-center justify-center">
          <TabsList className="flex items-center justify-start rounded-full bg-gray-100 !p-4 !px-0">
            <TabsTrigger
              value="advisory"
              className="rounded-full text-lg font-medium transition-colors p-1 px-8 font-sans 
                 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Advisory
            </TabsTrigger>
            <TabsTrigger
              value="executive"
              className="rounded-full text-lg font-medium transition-colors font-sans p-1 px-8
                 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Executive
            </TabsTrigger>
          </TabsList>
          <TabsContent value="advisory">
            <div className="hidden lg:grid lg:grid-cols-4 gap-10">
              {advisors.map(member =>
                <TeamCard key={member.id}
                  team={member}
                  onHover={() => setHoveredTeam(member)}
                  onLeave={() => setHoveredTeam(null)}
                />
              )}
            </div>
            <Carousel className="lg:hidden">
              <CarouselContent>
                {advisors.map((member, index) => (
                  <CarouselItem
                    key={`partner-slide-${index}`}
                    className="basis-10/12">
                    <TeamCard key={member.id} team={member}
                      onHover={() => setHoveredTeam(member)}
                      onLeave={() => setHoveredTeam(null)} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
          <TabsContent value="executive">
            <div className="hidden lg:grid lg:grid-cols-3 gap-10 max-w-3xl">
              {executives.map(member =>
                <TeamCard key={member.id}
                  team={member}
                  onHover={() => setHoveredTeam(member)}
                  onLeave={() => setHoveredTeam(null)}
                />
              )}
            </div>
            <Carousel className="lg:hidden">
              <CarouselContent>
                {executives.map((member, index) => (
                  <CarouselItem
                    key={`partner-slide-${index}`}
                    className="basis-10/12">
                    <TeamCard key={member.id}
                      team={member}
                      onHover={() => setHoveredTeam(member)}
                      onLeave={() => setHoveredTeam(null)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

          </TabsContent>
        </Tabs>

      </div>
    </>

  )
}
