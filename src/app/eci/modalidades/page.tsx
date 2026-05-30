import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sports } from "@/lib/data";
import { filterSportsByDivision } from "@/lib/filters";
import { formatDivisionLabel } from "@/lib/formatters";

export default function EciModalidadesPage() {
  const divisionSports = filterSportsByDivision(sports, "eci");

  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="ECI"
          title="Modalidades"
          description="Modalidades disponiveis para consulta na divisao ECI."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionSports.length > 0 ? (
            divisionSports.map((sport) => (
              <Card key={sport.id}>
                <h2 className="text-xl font-semibold text-foreground">
                  {sport.name}
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  Divisao: {formatDivisionLabel(sport.division)}
                </p>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhuma modalidade cadastrada"
              description="As modalidades da ECI aparecerao aqui quando forem adicionadas ao JSON local."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
