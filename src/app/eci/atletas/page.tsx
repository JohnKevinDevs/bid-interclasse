import { AthleteCard } from "@/components/athletes/AthleteCard";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { ListHeader } from "@/components/ui/ListHeader";
import { PageHero } from "@/components/ui/PageHero";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthletesByDivision,
  getSportsForAthlete,
  getTeamById,
} from "@/lib/data";

export default function EciAtletasPage() {
  const divisionAthletes = getAthletesByDivision("eci");

  return (
    <main>
      <PageHero
        eyebrow="BID ECI"
        title="Atletas"
        description="Atletas cadastrados na divisao ECI."
      >
        <StatCard
          dark
          label="Atletas ECI"
          value={divisionAthletes.length}
          description="Registros no BID."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Consulta"
          title="Elenco ECI"
          description="Nome, turma, time, modalidades e status."
          meta={`${divisionAthletes.length} atletas`}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {divisionAthletes.length > 0 ? (
            divisionAthletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                athlete={athlete}
                divisionLabel="ECI"
                sportNames={getSportsForAthlete(athlete)}
                teamName={getTeamById(athlete.teamId)?.name}
              />
            ))
          ) : (
            <EmptyState
              title="Nenhum atleta listado"
              description="Quando houver cadastro, os atletas aparecem aqui."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
