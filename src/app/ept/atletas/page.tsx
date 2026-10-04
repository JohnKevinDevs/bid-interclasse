import type { Metadata } from "next";
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
import { sharedOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Atletas EPT",
  description: "Atletas cadastrados na divisão EPT do Interclasse CEAP.",
  // Lista nomes de alunos: fica fora dos buscadores.
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/ept/atletas",
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Atletas EPT | BID Interclasse CEAP",
    description: "Atletas cadastrados na divisão EPT do Interclasse CEAP.",
    url: "/ept/atletas",
  },
};

export default function EptAtletasPage() {
  const divisionAthletes = getAthletesByDivision("ept");

  return (
    <main>
      <PageHero
        eyebrow="BID EPT"
        title="Atletas"
        description="Atletas cadastrados na divisão EPT."
      >
        <StatCard
          dark
          label="Atletas EPT"
          value={divisionAthletes.length}
          description="Registros no BID."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Consulta"
          title="Elenco EPT"
          description="Fichas públicas com nome, turma, divisão e modalidades."
          meta={`${divisionAthletes.length} atletas`}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {divisionAthletes.length > 0 ? (
            divisionAthletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                athlete={athlete}
                divisionLabel="EPT"
                sportNames={getSportsForAthlete(athlete)}
                teamName={getTeamById(athlete.teamId)?.name}
              />
            ))
          ) : (
            <div className="md:col-span-2 xl:col-span-3">
              <EmptyState
                title="Nenhum atleta listado"
                description="Quando houver cadastro real, as fichas dos atletas aparecem aqui."
              />
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
