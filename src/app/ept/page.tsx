import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function EptPage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="Divisao"
          title="Interclasse EPT"
          description="Area dedicada a consulta publica dos atletas, times e modalidades da divisao EPT."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card href="/ept/atletas">
            <h2 className="text-xl font-semibold text-foreground">Atletas</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Participantes cadastrados na divisao EPT.
            </p>
          </Card>
          <Card href="/ept/times">
            <h2 className="text-xl font-semibold text-foreground">Times</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Equipes vinculadas as modalidades da EPT.
            </p>
          </Card>
          <Card href="/ept/modalidades">
            <h2 className="text-xl font-semibold text-foreground">
              Modalidades
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Modalidades disponiveis para a divisao.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
