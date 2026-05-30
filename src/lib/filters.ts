import type { Athlete, Division, Sport, Team } from "@/types/interclasse";

export function filterAthletesByDivision(
  athletes: Athlete[],
  division: Division,
) {
  return athletes.filter((athlete) => athlete.division === division);
}

export function filterTeamsByDivision(teams: Team[], division: Division) {
  return teams.filter((team) => team.division === division);
}

export function filterSportsByDivision(sports: Sport[], division: Division) {
  return sports.filter(
    (sport) => sport.division === division || sport.division === "ambos",
  );
}

export function filterAthletesByTeam(athletes: Athlete[], teamId: string) {
  return athletes.filter((athlete) => athlete.teamId === teamId);
}
