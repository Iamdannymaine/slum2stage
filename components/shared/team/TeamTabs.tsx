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


  return (

    <>
      <div className="mt-8 mb-4 ps-0 lg:ps-[8%] space-y-4">
        <Section_Heading title="Meet the team" />
        <Section_Paragraph paragraph="Get to know the passionate professionals behind our program" />
      </div>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="advisory"
          className="mt-14 space-y-8 flex flex-col items-center justify-center">
          <TabsList className="flex items-center justify-start
           rounded-[40px] bg-[#44B5D01A]/10 !p-8 !px-2 border border-gray-100">
            <TabsTrigger
              value="advisory"
              className="rounded-full text-xl font-medium transition-colors py-3 px-16 font-sans 
                 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Advisory
            </TabsTrigger>
            <TabsTrigger
              value="executive"
              className="rounded-full text-xl font-medium transition-colors font-sans py-3
               px-16 text-slum_gray_800 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Executive
            </TabsTrigger>
          </TabsList>
          <TabsContent value="advisory">
            <div className="hidden lg:grid lg:grid-cols-4 gap-8">
              {advisors.map(member =>
                <TeamCard
                  key={member.id}
                  team={member}

                />
              )}
            </div>
            <Carousel className="lg:hidden">
              <CarouselContent>
                {advisors.map((member, index) => (
                  <CarouselItem
                    key={`partner-slide-${index}`}
                    className="basis-10/12">
                    <TeamCard
                      key={member.id}
                      team={member}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
          <TabsContent value="executive">
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-3xl">
              {executives.map(member =>
                <TeamCard
                  key={member.id}
                  team={member}
                />
              )}
            </div>
            <Carousel className="lg:hidden">
              <CarouselContent>
                {executives.map((member, index) => (
                  <CarouselItem
                    key={`partner-slide-${index}`}
                    className="basis-10/12">
                    <TeamCard
                      key={member.id}
                      team={member}
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
