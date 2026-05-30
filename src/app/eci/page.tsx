import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function EciPage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="Divisao"
          title="Interclasse ECI"
          description="Espaco da divisao ECI para consulta objetiva de atletas, equipes e modalidades vinculadas ao nucleo."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card href="/eci/atletas">
            <h2 className="text-xl font-semibold text-foreground">Atletas</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Participantes da ECI com turma, curso, modalidades e situacao.
            </p>
          </Card>
          <Card href="/eci/times">
            <h2 className="text-xl font-semibold text-foreground">Times</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Equipes proprias da ECI com atletas e modalidades vinculadas.
            </p>
          </Card>
          <Card href="/eci/modalidades">
            <h2 className="text-xl font-semibold text-foreground">
              Modalidades
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Modalidades disponiveis para a ECI e seu panorama competitivo.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
