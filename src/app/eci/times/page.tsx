import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
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
        description="Equipes da divisao ECI com modalidades vinculadas e composicao inicial de atletas."
      >
        <StatCard
          dark
          label="Times ECI"
          value={divisionTeams.length}
          description="Equipes cadastradas."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-2">
          {divisionTeams.length > 0 ? (
            divisionTeams.map((team) => (
              <Card key={team.id} className="h-full overflow-hidden">
                <div className="-mx-5 -mt-5 mb-5 bg-slate-900 p-5 text-white">
                  <p className="text-xs font-semibold uppercase text-accent">
                    Equipe ECI
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {team.name}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {getSportNamesByIds(team.sportIds).map((sportName) => (
                    <Badge key={sportName} tone="primary">
                      {sportName}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {team.athleteIds.length} atleta(s) vinculado(s)
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {getAthleteNamesByIds(team.athleteIds).join(", ")}
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum time listado"
              description="Quando a base da ECI receber equipes, esta pagina exibira suas modalidades e os atletas vinculados."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
