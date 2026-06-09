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

export default function EciModalidadesPage() {
  const divisionSports = getSportsByDivision("eci");

  return (
    <main>
      <PageHero
        eyebrow="BID ECI"
        title="Modalidades"
        description="Modalidades disponiveis para a divisao ECI."
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
          description="Modalidades, divisao e registros de participacao."
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
