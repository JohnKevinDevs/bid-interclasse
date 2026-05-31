import type { Metadata } from "next";
import { RegulationCard } from "@/components/regulations/RegulationCard";
import { RegulationStatusBadge } from "@/components/regulations/RegulationStatusBadge";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
      "Documentos especificos da divisao ECI, com regras proprias quando a modalidade exigir separacao operacional.",
    accentClassName: "bg-primary",
    sectionClassName: "border-primary/20 bg-primary/[0.03]",
    badgeClassName: "bg-primary/10 text-primary",
  },
  {
    division: "ept",
    eyebrow: "Divisao EPT",
    title: "Regulamentos EPT",
    description:
      "Documentos especificos da divisao EPT, organizados para orientar equipes, atletas e responsaveis pela divisao.",
    accentClassName: "bg-foreground",
    sectionClassName: "border-slate-300 bg-slate-50",
    badgeClassName: "bg-foreground text-white",
  },
  {
    division: "ambos",
    eyebrow: "Aplicacao geral",
    title: "Regulamentos para ECI e EPT",
    description:
      "Documentos gerais ou compartilhados, validos para as duas divisoes do Interclasse CEAP.",
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
        title="Regras que orientam o Interclasse CEAP"
        description="Os regulamentos reunem criterios de participacao, organizacao das modalidades e diretrizes que ajudam atletas, equipes e comunidade escolar a consultar o Interclasse CEAP com clareza."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            Consulta publica
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Documento oficial sempre prevalece.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            O BID apresenta resumos e organizacao de acesso. Em caso de
            divergencia, vale o texto oficial divulgado pela organizacao.
          </p>
        </div>
      </PageHero>

      <Container className="py-12">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-slate-800 bg-foreground p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase text-accent">
              Como consultar os regulamentos
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Leia primeiro a divisao, depois a modalidade.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Comece pelo regulamento geral do Interclasse CEAP, identifique se
              a regra se aplica a ECI, EPT ou ambos, e consulte o documento da
              modalidade antes de orientar atletas ou confirmar equipes.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/10 p-3">
                <p className="text-xs font-semibold uppercase text-white/65">01</p>
                <p className="mt-1 text-sm font-semibold">Geral</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-3">
                <p className="text-xs font-semibold uppercase text-white/65">02</p>
                <p className="mt-1 text-sm font-semibold">Divisao</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-3">
                <p className="text-xs font-semibold uppercase text-white/65">03</p>
                <p className="mt-1 text-sm font-semibold">Modalidade</p>
              </div>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase text-primary">
              Status dos documentos
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <RegulationStatusBadge status="disponivel" />
              <RegulationStatusBadge status="em_revisao" />
              <RegulationStatusBadge status="em_breve" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              O status indica se o conteudo ja pode ser usado como referencia,
              se esta passando por revisao ou se ainda sera publicado.
            </p>
          </article>
        </div>

        <section className="mt-10">
          <SectionTitle
            eyebrow="Documentos por divisao"
            title="Regulamentos organizados para consulta oficial"
            description="A lista abaixo separa documentos exclusivos de ECI, exclusivos de EPT e documentos compartilhados pelas duas divisoes."
          />

          <div className="mt-8 space-y-8">
            {regulationGroups.map((group) => {
              const groupRegulations = getRegulationsByDivision(group.division);

              return (
                <section
                  key={group.division}
                  className={`rounded-lg border p-5 sm:p-6 ${group.sectionClassName}`}
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase text-primary">
                        {group.eyebrow}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">
                        {group.title}
                      </h2>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
                        {group.description}
                      </p>
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

        <section className="mt-10 rounded-lg border border-accent/30 bg-accent/10 p-6">
          <p className="text-xs font-semibold uppercase text-[#7a4f00]">
            Aviso institucional
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            O regulamento oficial prevalece sobre qualquer resumo do portal.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-800">
            O BID Interclasse CEAP facilita a consulta publica, mas nao substitui
            documentos completos, comunicados da organizacao ou orientacoes
            formais emitidas pela FAC. Sempre confirme a versao oficial antes de
            tomar decisoes competitivas.
          </p>
        </section>
      </Container>
    </main>
  );
}
