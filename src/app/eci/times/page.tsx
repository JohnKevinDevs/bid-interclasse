import { Container } from "@/components/layout/Container";
import { TeamCard } from "@/components/teams/TeamCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ListHeader } from "@/components/ui/ListHeader";
import { PageHero } from "@/components/ui/PageHero";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthleteNamesByIds,
  getSportNamesByIds,
  getTeamsByDivision,
} from "@/lib/data";

export default function EciTimesPage() {
  const divisionTeams = getTeamsByDivision("eci");

  return (
    <main>
      <PageHero
        eyebrow="BID ECI"
        title="Times"
        description="Catalogo das equipes da ECI com imagem, descricao, modalidades e elenco resumido."
      >
        <StatCard
          dark
          label="Times ECI"
          value={divisionTeams.length}
          description="Equipes cadastradas."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Equipes cadastradas"
          title="Times da divisao ECI"
          description="Cada card resume identidade, modalidades vinculadas e elenco para leitura direta do BID."
          meta={`${divisionTeams.length} times`}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {divisionTeams.length > 0 ? (
            divisionTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                divisionLabel="ECI"
                athleteNames={getAthleteNamesByIds(team.athleteIds)}
                sportNames={getSportNamesByIds(team.sportIds)}
              />
            ))
          ) : (
            <EmptyState
              title="Nenhum time listado"
              description="Quando a base da ECI receber equipes, esta pagina exibira imagem, modalidades e atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
