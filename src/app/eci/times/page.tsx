import type { Metadata } from "next";
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
import { sharedOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Times ECI",
  description: "Times cadastrados na divisão ECI do Interclasse CEAP, com modalidades de cada equipe.",
  alternates: {
    canonical: "/eci/times",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Times ECI | BID Interclasse CEAP",
    description: "Times cadastrados na divisão ECI do Interclasse CEAP, com modalidades de cada equipe.",
    url: "/eci/times",
  },
};

export default function EciTimesPage() {
  const divisionTeams = getTeamsByDivision("eci");

  return (
    <main>
      <PageHero
        eyebrow="BID ECI"
        title="Times"
        description="Times cadastrados na divisão ECI."
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
          eyebrow="Consulta"
          title="Times ECI"
          description="Equipes por turma, modalidades e elenco vinculado."
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
            <div className="lg:col-span-2">
              <EmptyState
                title="Nenhum time listado"
                description="Quando houver cadastro real, os times aparecem aqui."
              />
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
