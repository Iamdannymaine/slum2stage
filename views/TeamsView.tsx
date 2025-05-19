
import Section_Heading from "@/components/shared/Section_Heading"
import { getAllTeamMembers } from "@/lib"
import { TeamCard } from "@/components/shared/team/TeamCard"
import { Section_Paragraph } from "@/components/shared/Section_Paragraph"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export function TeamsView() {
  const teamDatas = getAllTeamMembers()

  return (
    <section className="w-full mx-auto py-40">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="my-8">
          <Section_Heading title="Meet the team" />
          <Section_Paragraph paragraph="Get to know the passionate professionals behind our program" />
        </div>
        <div className="flex items-center justify-center">
          <Tabs defaultValue="advisory" className="mt-14 space-y-8 flex flex-col items-center justify-center">
            <TabsList className="flex items-center justify-start w-[35%] rounded-full bg-gray-100 !p-4 !px-0">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamDatas.slice(0, 3).map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="executive">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamDatas.slice(4, 6).map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  )
}
