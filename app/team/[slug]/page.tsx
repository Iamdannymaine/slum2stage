import { notFound } from "next/navigation"
import { getTeamMemberBySlug } from "@/lib"
import { SingleTeamView } from "@/views"

export default function SingleTeamPage({ params }: { params: { slug: string } }) {
  const team = getTeamMemberBySlug(params.slug)
  if (!team) notFound()

  return <SingleTeamView team={team} />
}
