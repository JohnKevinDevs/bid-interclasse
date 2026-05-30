import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { athletes } from "@/lib/data";
import { filterAthletesByDivision } from "@/lib/filters";

export default function EciAtletasPage() {
  const divisionAthletes = filterAthletesByDivision(athletes, "eci");

  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="ECI"
          title="Atletas"
          description="Lista inicial de atletas cadastrados na divisao ECI."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionAthletes.length > 0 ? (
            divisionAthletes.map((athlete) => (
              <Card key={athlete.id}>
                <h2 className="text-xl font-semibold text-foreground">
                  {athlete.name}
                </h2>
                <dl className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Turma</dt>
                    <dd>{athlete.className}</dd>
                  </div>
                  {athlete.course ? (
                    <div className="flex justify-between gap-4">
                      <dt className="font-medium">Curso</dt>
                      <dd>{athlete.course}</dd>
                    </div>
                  ) : null}
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Status</dt>
                    <dd className="capitalize">{athlete.status}</dd>
                  </div>
                </dl>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum atleta cadastrado"
              description="Os atletas da ECI aparecerao aqui quando forem adicionados ao JSON local."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
