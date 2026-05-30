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
          description="Consulta aos regulamentos cadastrados para orientar a participacao no Interclasse CEAP/FAC."
        />

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
              title="Nenhum regulamento cadastrado"
              description="Os regulamentos oficiais serao listados aqui quando forem adicionados aos dados locais."
            />
          )}
        </div>
      </Container>
    </main>
  );
}
