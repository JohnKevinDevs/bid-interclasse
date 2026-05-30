export type Division = "eci" | "ept";

export type SharedDivision = Division | "ambos";

export type AthleteStatus = "ativo" | "inativo";

export type RegulationStatus = "disponivel" | "em_revisao" | "em_breve";

export interface Athlete {
  id: string;
  name: string;
  division: Division;
  className: string;
  course?: string;
  teamId?: string;
  sports: string[];
  status: AthleteStatus;
  photoUrl?: string;
  shortBio?: string;
  position?: string;
}

export interface Team {
  id: string;
  name: string;
  division: Division;
  sportIds: string[];
  athleteIds: string[];
  description?: string;
  imageUrl?: string;
  color?: string;
}

export interface Sport {
  id: string;
  name: string;
  division: SharedDivision;
  description?: string;
  imageUrl?: string;
  category?: string;
}

export interface Regulation {
  id: string;
  title: string;
  division: SharedDivision;
  content: string;
  order: number;
  description?: string;
  status?: RegulationStatus;
}
