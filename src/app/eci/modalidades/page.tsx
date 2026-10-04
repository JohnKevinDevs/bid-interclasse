import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SportCard } from "@/components/sports/SportCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ListHeader } from "@/components/ui/ListHeader";
import { PageHero } from "@/components/ui/PageHero";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthleteCountForSport,
  getSportsByDivision,
  getTeamCountForSport,
} from "@/lib/data";
import { formatDivisionLabel } from "@/lib/formatters";
import { sharedOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Modalidades ECI",
  description: "Modalidades disputadas pela divisão ECI no Interclasse CEAP.",
  alternates: {
    canonical: "/eci/modalidades",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Modalidades ECI | BID Interclasse CEAP",
    description: "Modalidades disputadas pela divisão ECI no Interclasse CEAP.",
    url: "/eci/modalidades",
  },
};

export default function EciModalidadesPage() {
  const divisionSports = getSportsByDivision("eci");

  return (
    <main>
      <PageHero
        eyebrow="BID ECI"
        title="Modalidades"
        description="Modalidades disponíveis para a divisão ECI."
      >
        <StatCard
          dark
          label="Modalidades ECI"
          value={divisionSports.length}
          description="Disponiveis para consulta."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Consulta"
          title="Modalidades ECI"
          description="Modalidades, divisão e registros de participação."
          meta={`${divisionSports.length} modalidades`}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {divisionSports.length > 0 ? (
            divisionSports.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                divisionLabel={formatDivisionLabel(sport.division)}
                teamCount={getTeamCountForSport(sport.id, "eci")}
                athleteCount={getAthleteCountForSport(sport.id, "eci")}
              />
            ))
          ) : (
            <div className="md:col-span-2 xl:col-span-3">
              <EmptyState
                title="Nenhuma modalidade listada"
                description="Quando houver cadastro real, as modalidades aparecem aqui."
              />
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
