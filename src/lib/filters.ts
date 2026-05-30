import type { Athlete, Division, Team } from "@/types/interclasse";

export function filterAthletesByDivision(
  athletes: Athlete[],
  division: Division,
) {
  return athletes.filter((athlete) => athlete.division === division);
}

export function filterTeamsByDivision(teams: Team[], division: Division) {
  return teams.filter((team) => team.division === division);
}
