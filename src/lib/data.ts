import athletesData from "@/data/athletes.json";
import regulationsData from "@/data/regulations.json";
import sportsData from "@/data/sports.json";
import teamsData from "@/data/teams.json";
import type { Athlete, Regulation, Sport, Team } from "@/types/interclasse";

export const athletes = athletesData as Athlete[];

export const teams = teamsData as Team[];

export const sports = sportsData as Sport[];

export const regulations = regulationsData as Regulation[];

export function getSportNamesByIds(sportIds: string[]) {
  return sportIds
    .map((sportId) => sports.find((sport) => sport.id === sportId)?.name)
    .filter((sportName): sportName is string => Boolean(sportName));
}

export const orderedRegulations = [...regulations].sort(
  (current, next) => current.order - next.order,
);
