import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  getAthletesByDivision,
  getSportsForAthlete,
  getTeamById,
} from "@/lib/data";

export default function EciAtletasPage() {
  const divisionAthletes = getAthletesByDivision("eci");

  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="ECI"
          title="Atletas"
          description="Relacao publica de atletas da ECI, com identificacao academica, modalidades e status de participacao."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionAthletes.length > 0 ? (
            divisionAthletes.map((athlete) => (
              <Card key={athlete.id} className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {athlete.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{athlete.className}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
                    {athlete.status}
                  </span>
                </div>

                <dl className="mt-4 space-y-3 text-sm text-slate-700">
                  {athlete.course ? (
                    <div>
                      <dt className="font-medium text-slate-900">Curso</dt>
                      <dd className="mt-1">{athlete.course}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-medium text-slate-900">Modalidades</dt>
                    <dd className="mt-1">{getSportsForAthlete(athlete).join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Time</dt>
                    <dd className="mt-1">
                      {getTeamById(athlete.teamId)?.name ?? "Nao vinculado"}
                    </dd>
                  </div>
                </dl>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum atleta listado"
              description="Quando a base da ECI receber atletas, esta pagina exibira nome, turma, modalidades e situacao de cada participante."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
