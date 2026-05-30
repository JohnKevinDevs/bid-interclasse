import { Container } from "@/components/layout/Container";
import { TeamCard } from "@/components/teams/TeamCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthleteNamesByIds,
  getSportNamesByIds,
  getTeamsByDivision,
} from "@/lib/data";

export default function EptTimesPage() {
  const divisionTeams = getTeamsByDivision("ept");

  return (
    <main>
      <PageHero
        eyebrow="BID EPT"
        title="Times"
        description="Catalogo das equipes da EPT com imagem, descricao, modalidades e elenco resumido."
      >
        <StatCard
          dark
          label="Times EPT"
          value={divisionTeams.length}
          description="Equipes cadastradas."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          {divisionTeams.length > 0 ? (
            divisionTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                divisionLabel="EPT"
                athleteNames={getAthleteNamesByIds(team.athleteIds)}
                sportNames={getSportNamesByIds(team.sportIds)}
              />
            ))
          ) : (
            <EmptyState
              title="Nenhum time listado"
              description="Quando a base da EPT receber equipes, esta pagina exibira imagem, modalidades e atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
