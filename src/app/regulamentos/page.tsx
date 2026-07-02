import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { RegulationCard } from "@/components/regulations/RegulationCard";
import { RegulationStatusBadge } from "@/components/regulations/RegulationStatusBadge";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { orderedRegulations } from "@/lib/data";
import type { Regulation, SharedDivision } from "@/types/interclasse";

export const metadata: Metadata = {
  title: "Regulamentos",
  description:
    "Regulamentos do Interclasse CEAP com descrições das modalidades e regras principais para consulta no BID.",
  alternates: {
    canonical: "/regulamentos",
  },
  openGraph: {
    title: "Regulamentos | BID Interclasse CEAP",
    description:
      "Consulte modalidades, aplicações e regras principais do Interclasse CEAP.",
    url: "/regulamentos",
  },
};

const regulationGroups: {
  division: SharedDivision;
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  accentClassName: string;
  codeClassName: string;
  sectionClassName: string;
}[] = [
  {
    division: "eci",
    code: "ECI",
    eyebrow: "Divisão ECI",
    title: "Regras ECI",
    description: "Aplicações específicas da divisão ECI.",
    accentClassName: "bg-primary",
    codeClassName: "bg-primary text-white",
    sectionClassName: "border-primary/25 bg-primary/[0.03]",
  },
  {
    division: "ept",
    code: "EPT",
    eyebrow: "Divisão EPT",
    title: "Regras EPT",
    description: "Aplicações específicas da divisão técnica.",
    accentClassName: "bg-accent",
    codeClassName: "bg-accent text-ink",
    sectionClassName: "border-accent/30 bg-accent/[0.05]",
  },
  {
    division: "ambos",
    code: "G",
    eyebrow: "Aplicação geral",
    title: "Regras gerais",
    description: "Modalidades e orientações válidas para ECI e EPT.",
    accentClassName: "bg-navy",
    codeClassName: "bg-navy text-white",
    sectionClassName: "border-line bg-white",
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
        eyebrow="Regulamentos"
        title="Regras do Interclasse CEAP"
        description="Consulte aqui o essencial sobre cada modalidade, sua aplicação e as regras principais da competição."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="bid-kicker text-accent">Consulta rápida</p>
          <p className="bid-display mt-3 text-3xl leading-none">
            Esporte, aplicação e regra no mesmo lugar.
          </p>
        </div>
      </PageHero>

      <Container className="py-8 sm:py-10">
        <section className="mb-6 flex flex-col gap-4 rounded-xl border border-line bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="bid-kicker text-primary">Consulta por aplicação</p>
            <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
              Modalidades e regras
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <RegulationStatusBadge status="disponivel" />
            <RegulationStatusBadge status="em_revisao" />
            <RegulationStatusBadge status="em_breve" />
          </div>
        </section>

        <div className="space-y-5">
          {regulationGroups.map((group) => {
            const groupRegulations = getRegulationsByDivision(group.division);

            return (
              <section
                key={group.division}
                className={`overflow-hidden rounded-xl border shadow-sm ${group.sectionClassName}`}
              >
                <div className={`h-1 ${group.accentClassName}`} />
                <div className="p-5 sm:p-6">
                  <div className="mb-5 flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className={`bid-display grid h-14 w-14 shrink-0 place-items-center rounded-lg text-2xl leading-none ${group.codeClassName}`}
                      >
                        {group.code}
                      </span>
                      <div>
                        <p className="bid-kicker text-primary">
                          {group.eyebrow}
                        </p>
                        <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
                          {group.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <span className="bid-kicker w-fit rounded-full border border-line bg-white px-3 py-1 text-slate-600">
                      {groupRegulations.length} regra
                      {groupRegulations.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-2">
                    {groupRegulations.length > 0 ? (
                      groupRegulations.map((regulation) => (
                        <RegulationCard
                          key={regulation.id}
                          regulation={regulation}
                          accentClassName={group.accentClassName}
                        />
                      ))
                    ) : (
                      <div className="xl:col-span-2">
                        <EmptyState
                          title="Nenhuma regra neste grupo"
                          description="Quando houver regra cadastrada para esta aplicação, ela aparecerá aqui."
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
