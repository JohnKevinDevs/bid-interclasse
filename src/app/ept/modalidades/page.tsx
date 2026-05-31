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

export default function EptModalidadesPage() {
  const divisionSports = getSportsByDivision("ept");

  return (
    <main>
      <PageHero
        eyebrow="BID EPT"
        title="Modalidades"
        description="Modalidades disponiveis para a divisao EPT."
      >
        <StatCard
          dark
          label="Modalidades EPT"
          value={divisionSports.length}
          description="Disponiveis para consulta."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Consulta"
          title="Modalidades EPT"
          description="Disputas, categoria e participacao."
          meta={`${divisionSports.length} modalidades`}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {divisionSports.length > 0 ? (
            divisionSports.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                divisionLabel={formatDivisionLabel(sport.division)}
                teamCount={getTeamCountForSport(sport.id, "ept")}
                athleteCount={getAthleteCountForSport(sport.id, "ept")}
              />
            ))
          ) : (
            <EmptyState
              title="Nenhuma modalidade listada"
              description="Quando houver cadastro, as modalidades aparecem aqui."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
