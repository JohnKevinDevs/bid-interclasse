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
          description="Espaco da divisao EPT para consulta objetiva de atletas, equipes e modalidades vinculadas ao nucleo."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card href="/ept/atletas">
            <h2 className="text-xl font-semibold text-foreground">Atletas</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Participantes da EPT com turma, curso, modalidades e situacao.
            </p>
          </Card>
          <Card href="/ept/times">
            <h2 className="text-xl font-semibold text-foreground">Times</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Equipes proprias da EPT com atletas e modalidades vinculadas.
            </p>
          </Card>
          <Card href="/ept/modalidades">
            <h2 className="text-xl font-semibold text-foreground">
              Modalidades
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Modalidades disponiveis para a EPT e seu panorama competitivo.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
