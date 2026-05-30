import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function SobrePage() {
  return (
    <main>
      <Container className="py-12 sm:py-16">
        <SectionTitle
          eyebrow="Institucional"
          title="Sobre o Interclasse"
          description="O Interclasse CEAP/FAC e uma competicao escolar voltada a integracao, organizacao esportiva e participacao dos estudantes."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              O que e o Interclasse CEAP
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Uma iniciativa esportiva que reune turmas, equipes e modalidades
              em um ambiente de competicao saudavel e institucional.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Papel da FAC
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              A FAC apoia a organizacao do evento, fortalecendo a comunicacao e
              a experiencia publica da competicao.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Objetivo do BID
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Centralizar informacoes sobre atletas, times, modalidades e
              regulamentos em um portal simples, confiavel e acessivel.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
