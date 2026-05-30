import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  getAthleteNamesByIds,
  getSportNamesByIds,
  getTeamsByDivision,
} from "@/lib/data";

export default function EptTimesPage() {
  const divisionTeams = getTeamsByDivision("ept");

  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="EPT"
          title="Times"
          description="Equipes da EPT com suas modalidades vinculadas e composicao inicial de atletas."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionTeams.length > 0 ? (
            divisionTeams.map((team) => (
              <Card key={team.id} className="h-full">
                <h2 className="text-xl font-semibold text-foreground">
                  {team.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {getSportNamesByIds(team.sportIds).map((sportName) => (
                    <span
                      key={sportName}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700"
                    >
                      {sportName}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-slate-900">
                  {team.athleteIds.length} atleta(s) vinculado(s)
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {getAthleteNamesByIds(team.athleteIds).join(", ")}
                </p>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum time listado"
              description="Quando a base da EPT receber equipes, esta pagina exibira suas modalidades e os atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
