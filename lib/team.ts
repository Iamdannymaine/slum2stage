import { TeamType } from "@/types";
import { TeamData } from "@/json";

const teamData = TeamData as TeamType[];

export function getAllTeamMembers(): TeamType[] {
  return teamData;
}

export function getTeamMemberBySlug(slug: string): TeamType | undefined {
  return teamData.find((post) => post.slug === slug);
}
