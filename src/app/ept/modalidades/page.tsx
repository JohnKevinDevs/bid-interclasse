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
        description="Catalogo esportivo das modalidades da EPT com imagem, categoria, divisao e indicadores de participacao."
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
          eyebrow="Mapa esportivo"
          title="Modalidades da divisao EPT"
          description="Resumo visual das modalidades disponiveis, com categoria, abrangencia e indicadores de participacao."
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
              description="Quando a EPT receber modalidades cadastradas, esta area mostrara divisao, equipes inscritas e atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
