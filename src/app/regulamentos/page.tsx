import type { Metadata } from "next";
import { RegulationCard } from "@/components/regulations/RegulationCard";
import { RegulationStatusBadge } from "@/components/regulations/RegulationStatusBadge";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { orderedRegulations } from "@/lib/data";
import type { Regulation, SharedDivision } from "@/types/interclasse";

export const metadata: Metadata = {
  title: "Regulamentos",
  description:
    "Regulamentos oficiais do Interclasse CEAP, organizados por ECI, EPT e documentos compartilhados.",
  alternates: {
    canonical: "/regulamentos",
  },
  openGraph: {
    title: "Regulamentos | BID Interclasse CEAP",
    description:
      "Consulte regras, criterios e documentos oficiais do Interclasse CEAP.",
    url: "/regulamentos",
  },
};

const regulationGroups: {
  division: SharedDivision;
  eyebrow: string;
  title: string;
  description: string;
  accentClassName: string;
  sectionClassName: string;
  badgeClassName: string;
}[] = [
  {
    division: "eci",
    eyebrow: "Divisao ECI",
    title: "Regulamentos ECI",
    description:
      "Regras da divisao ECI.",
    accentClassName: "bg-primary",
    sectionClassName: "border-primary/20 bg-primary/[0.03]",
    badgeClassName: "bg-primary/10 text-primary",
  },
  {
    division: "ept",
    eyebrow: "Divisao EPT",
    title: "Regulamentos EPT",
    description:
      "Regras da divisao EPT.",
    accentClassName: "bg-foreground",
    sectionClassName: "border-slate-300 bg-slate-50",
    badgeClassName: "bg-foreground text-white",
  },
  {
    division: "ambos",
    eyebrow: "Aplicacao geral",
    title: "Regulamentos para ECI e EPT",
    description:
      "Regras validas para ECI e EPT.",
    accentClassName: "bg-accent",
    sectionClassName: "border-accent/30 bg-accent/5",
    badgeClassName: "bg-accent/15 text-[#7a4f00]",
  },
];

function getRegulationsByDivision(division: SharedDivision): Regulation[] {
  return orderedRegulations.filter(
    (regulation) => regulation.division === division,
  );
}

export default function RegulamentosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Regulamentos oficiais"
        title="Regulamentos do Interclasse CEAP"
        description="Documentos oficiais para consultar regras por divisao e modalidade."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            Importante
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            O documento oficial sempre prevalece.
          </p>
        </div>
      </PageHero>

      <Container className="py-8 sm:py-10">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">
                Documentos
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                Consulta por divisao
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <RegulationStatusBadge status="disponivel" />
              <RegulationStatusBadge status="em_revisao" />
              <RegulationStatusBadge status="em_breve" />
            </div>
          </div>

          <div className="space-y-6">
            {regulationGroups.map((group) => {
              const groupRegulations = getRegulationsByDivision(group.division);

              return (
                <section
                  key={group.division}
                  className={`rounded-lg border p-4 sm:p-5 ${group.sectionClassName}`}
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase text-primary">
                        {group.eyebrow}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        {group.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-700">{group.description}</p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase ${group.badgeClassName}`}
                    >
                      {groupRegulations.length} documento
                      {groupRegulations.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {groupRegulations.length > 0 ? (
                      groupRegulations.map((regulation) => (
                        <RegulationCard
                          key={regulation.id}
                          regulation={regulation}
                          accentClassName={group.accentClassName}
                        />
                      ))
                    ) : (
                      <EmptyState
                        title="Nenhum regulamento nesta divisao"
                        description="Quando houver documento oficial para este grupo, ele aparecera nesta area."
                      />
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-5">
          <p className="text-xs font-semibold uppercase text-[#7a4f00]">
            Aviso institucional
          </p>
          <h2 className="mt-2 text-xl font-semibold text-foreground">
            O regulamento oficial prevalece sobre qualquer resumo do portal.
          </h2>
        </section>
      </Container>
    </main>
  );
}
