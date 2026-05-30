import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="ECI"
          title="Modalidades"
          description="Panorama das modalidades da ECI, com divisao, equipes inscritas e atletas vinculados."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionSports.length > 0 ? (
            divisionSports.map((sport) => (
              <Card key={sport.id} className="h-full">
                <h2 className="text-xl font-semibold text-foreground">
                  {sport.name}
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  Divisao: {formatDivisionLabel(sport.division)}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-slate-500">Times</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {getTeamCountForSport(sport.id, "eci")}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-slate-500">Atletas</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
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
