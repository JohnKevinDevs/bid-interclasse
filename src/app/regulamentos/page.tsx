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
    "Regulamentos oficiais do Interclasse CEAP, organizados por ECI, EPT e documentos compartilhados.",
  alternates: {
    canonical: "/regulamentos",
  },
  openGraph: {
    title: "Regulamentos | BID Interclasse CEAP",
    description:
      "Consulte regras, critérios e documentos oficiais do Interclasse CEAP.",
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
    title: "Regulamentos ECI",
    description: "Documentos exclusivos da divisão ECI.",
    accentClassName: "bg-primary",
    codeClassName: "bg-primary text-white",
    sectionClassName: "border-primary/25 bg-primary/[0.03]",
  },
  {
    division: "ept",
    code: "EPT",
    eyebrow: "Divisão EPT",
    title: "Regulamentos EPT",
    description: "Documentos exclusivos da divisão técnica.",
    accentClassName: "bg-accent",
    codeClassName: "bg-accent text-ink",
    sectionClassName: "border-accent/30 bg-accent/[0.05]",
  },
  {
    division: "ambos",
    code: "G",
    eyebrow: "Aplicação geral",
    title: "Regulamentos gerais",
    description: "Documentos válidos para ECI e EPT.",
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
        eyebrow="Regulamentos oficiais"
        title="Documentos do Interclasse CEAP"
        description="Regras oficiais por divisão e modalidade. Consulte sempre o documento correspondente antes de participar."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="bid-kicker text-accent">Importante</p>
          <p className="bid-display mt-3 text-3xl leading-none">
            O documento oficial sempre prevalece.
          </p>
        </div>
      </PageHero>

      <Container className="py-8 sm:py-10">
        <section className="mb-6 flex flex-col gap-4 rounded-lg border border-line bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="bid-kicker text-primary">Consulta por aplicação</p>
            <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
              Regulamentos
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
                className={`overflow-hidden rounded-lg border shadow-sm ${group.sectionClassName}`}
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
                      {groupRegulations.length} doc
                      {groupRegulations.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {groupRegulations.length > 0 ? (
                      groupRegulations.map((regulation) => (
                        <RegulationCard
                          key={regulation.id}
                          regulation={regulation}
                          accentClassName={group.accentClassName}
                        />
                      ))
                    ) : (
                      <div className="md:col-span-2 xl:col-span-3">
                        <EmptyState
                          title="Nenhum documento neste grupo"
                          description="Quando houver regulamento oficial para esta aplicação, ele aparecerá aqui."
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-5 shadow-sm">
          <p className="bid-kicker text-[#7a4f00]">Aviso institucional</p>
          <h2 className="bid-display mt-2 text-2xl leading-none text-ink">
            O regulamento oficial prevalece sobre qualquer resumo do portal.
          </h2>
        </section>
      </Container>
    </main>
  );
}
