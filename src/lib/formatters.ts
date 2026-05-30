import type { SharedDivision } from "@/types/interclasse";

export function formatDivisionLabel(division: SharedDivision) {
  return division === "ambos" ? "ECI e EPT" : division.toUpperCase();
}
