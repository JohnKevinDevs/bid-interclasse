import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { orderedRegulations } from "@/lib/data";
import { formatDivisionLabel } from "@/lib/formatters";

export default function RegulamentosPage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="Documentos"
          title="Regulamentos"
          description="Consulta oficial aos documentos do Interclasse CEAP 2026, com orientacoes por modalidade e referencia institucional para atletas, equipes e organizacao."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Como usar esta pagina
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Os regulamentos listados aqui servem como base de consulta publica
              para entender formato de disputa, inscricoes, tempo de jogo e
              regras gerais de cada modalidade. Em caso de duvida operacional,
              a orientacao oficial da organizacao deve prevalecer.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Abrangencia
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              O portal reune documentos gerais do evento e regulamentos
              especificos para ECI, EPT e modalidades compartilhadas.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4">
          {orderedRegulations.length > 0 ? (
            orderedRegulations.map((regulation) => (
              <Card key={regulation.id}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {regulation.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {regulation.content}
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
                    {formatDivisionLabel(regulation.division)}
                  </span>
                </div>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Nenhum regulamento disponivel"
              description="Quando os documentos oficiais forem adicionados ao portal, esta area exibira os regulamentos por modalidade e por divisao."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
