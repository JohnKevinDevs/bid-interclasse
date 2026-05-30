import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getSportNamesByIds, teams } from "@/lib/data";
import { filterTeamsByDivision } from "@/lib/filters";

export default function EciTimesPage() {
  const divisionTeams = filterTeamsByDivision(teams, "eci");

  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="ECI"
          title="Times"
          description="Equipes cadastradas para a divisao ECI."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionTeams.length > 0 ? (
            divisionTeams.map((team) => (
              <Card key={team.id}>
                <h2 className="text-xl font-semibold text-foreground">
                  {team.name}
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  {team.athleteIds.length} atleta(s)
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Modalidades: {getSportNamesByIds(team.sportIds).join(", ")}
                </p>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum time cadastrado"
              description="Os times da ECI aparecerao aqui quando forem adicionados ao JSON local."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
