import { Container } from "@/components/layout/Container";
import { SportCard } from "@/components/sports/SportCard";
import { EmptyState } from "@/components/ui/EmptyState";
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
        description="Catalogo esportivo das modalidades da ECI com imagem, categoria, divisao e indicadores de participacao."
      >
        <StatCard
          dark
          label="Modalidades ECI"
          value={divisionSports.length}
          description="Disponiveis para consulta."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
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
            <EmptyState
              title="Nenhuma modalidade listada"
              description="Quando a ECI receber modalidades cadastradas, esta area mostrara divisao, equipes inscritas e atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
