export type Division = "eci" | "ept";

export type SharedDivision = Division | "ambos";

export type AthleteStatus = "ativo" | "inativo";

export interface Athlete {
  id: string;
  name: string;
  division: Division;
  className: string;
  course?: string;
  teamId?: string;
  sports: string[];
  status: AthleteStatus;
}

export interface Team {
  id: string;
  name: string;
  division: Division;
  sportIds: string[];
  athleteIds: string[];
}

export interface Sport {
  id: string;
  name: string;
  division: SharedDivision;
}

export interface Regulation {
  id: string;
  title: string;
  division: SharedDivision;
  content: string;
  order: number;
}
