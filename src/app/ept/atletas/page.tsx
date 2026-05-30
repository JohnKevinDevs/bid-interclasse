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

export default function EptAtletasPage() {
  const divisionAthletes = getAthletesByDivision("ept");

  return (
    <main>
      <PageHero
        eyebrow="BID EPT"
        title="Atletas"
        description="Catalogo visual dos atletas da EPT com foto, turma, curso, posicao, modalidades e equipe vinculada."
      >
        <StatCard
          dark
          label="Atletas EPT"
          value={divisionAthletes.length}
          description="Registros ativos na base local."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <ListHeader
          eyebrow="Catalogo publico"
          title="Elenco cadastrado"
          description="Cards enriquecidos com dados locais do BID, organizados para consulta rapida em mobile e desktop."
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
            <EmptyState
              title="Nenhum atleta listado"
              description="Quando a base da EPT receber atletas, esta pagina exibira foto, turma, modalidades e situacao de cada participante."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
