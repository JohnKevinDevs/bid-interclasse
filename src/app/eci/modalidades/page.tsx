import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
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
        description="Panorama das modalidades da ECI com leitura rapida de divisao, equipes inscritas e atletas vinculados."
      >
        <StatCard
          dark
          label="Modalidades ECI"
          value={divisionSports.length}
          description="Disponiveis para consulta."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {divisionSports.length > 0 ? (
            divisionSports.map((sport) => (
              <Card key={sport.id} className="h-full">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary">
                      Modalidade
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {sport.name}
                    </h2>
                  </div>
                  <Badge tone="accent">{formatDivisionLabel(sport.division)}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Times
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">
                      {getTeamCountForSport(sport.id, "eci")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Atletas
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-foreground">
                      {getAthleteCountForSport(sport.id, "eci")}
                    </p>
                  </div>
                </div>
              </Card>
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
