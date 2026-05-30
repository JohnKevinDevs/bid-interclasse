import athletesData from "@/data/athletes.json";
import regulationsData from "@/data/regulations.json";
import sportsData from "@/data/sports.json";
import teamsData from "@/data/teams.json";
import type {
  Athlete,
  Division,
  Regulation,
  Sport,
  Team,
} from "@/types/interclasse";

export const athletes = athletesData as Athlete[];

export const teams = teamsData as Team[];

export const sports = sportsData as Sport[];

export const regulations = regulationsData as Regulation[];

export function getAthletesByDivision(division: Division) {
  return athletes.filter((athlete) => athlete.division === division);
}

export function getTeamsByDivision(division: Division) {
  return teams.filter((team) => team.division === division);
}

export function getSportsByDivision(division: Division) {
  return sports.filter(
    (sport) => sport.division === division || sport.division === "ambos",
  );
}

export function getTeamById(teamId?: string) {
  if (!teamId) {
    return undefined;
  }

  return teams.find((team) => team.id === teamId);
}

export function getAthletesByIds(athleteIds: string[]) {
  return athleteIds
    .map((athleteId) => athletes.find((athlete) => athlete.id === athleteId))
    .filter((athlete): athlete is Athlete => Boolean(athlete));
}

export function getAthleteNamesByIds(athleteIds: string[]) {
  return getAthletesByIds(athleteIds).map((athlete) => athlete.name);
}

export function getSportNamesByIds(sportIds: string[]) {
  return sportIds
    .map((sportId) => sports.find((sport) => sport.id === sportId)?.name)
    .filter((sportName): sportName is string => Boolean(sportName));
}

export function getSportsForAthlete(athlete: Athlete) {
  return getSportNamesByIds(athlete.sports);
}

export function getTeamCountForSport(sportId: string, division: Division) {
  return getTeamsByDivision(division).filter((team) =>
    team.sportIds.includes(sportId),
  ).length;
}

export function getAthleteCountForSport(sportId: string, division: Division) {
  return getAthletesByDivision(division).filter((athlete) =>
    athlete.sports.includes(sportId),
  ).length;
}

export const orderedRegulations = [...regulations].sort(
  (current, next) => current.order - next.order,
);
