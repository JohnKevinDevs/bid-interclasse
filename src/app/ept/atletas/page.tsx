import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { StatCard } from "@/components/ui/StatCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
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
        description="Relacao publica dos atletas da EPT com turma, curso tecnico, modalidades e vinculo de equipe."
      >
        <StatCard
          dark
          label="Atletas EPT"
          value={divisionAthletes.length}
          description="Registros ativos na base local."
        />
      </PageHero>

      <Container className="py-10 sm:py-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Consulta publica
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Elenco cadastrado
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            Dados locais organizados por divisao e equipe.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {divisionAthletes.length > 0 ? (
            divisionAthletes.map((athlete) => (
              <Card key={athlete.id} className="h-full overflow-hidden">
                <div className="-mx-5 -mt-5 mb-5 bg-slate-900 p-5 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase text-accent">
                        Atleta EPT
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        {athlete.name}
                      </h2>
                    </div>
                    <StatusBadge status={athlete.status} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge tone="primary">{athlete.className}</Badge>
                  {athlete.course ? <Badge>{athlete.course}</Badge> : null}
                </div>

                <dl className="mt-5 space-y-4 text-sm text-slate-700">
                  <div>
                    <dt className="font-medium text-slate-900">Modalidades</dt>
                    <dd className="mt-1">
                      {getSportsForAthlete(athlete).join(", ")}
                    </dd>
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
              description="Quando a base da EPT receber atletas, esta pagina exibira nome, turma, modalidades e situacao de cada participante."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
