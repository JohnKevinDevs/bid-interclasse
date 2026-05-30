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
          description="O Interclasse CEAP 2026 e o encontro entre competicao, identidade de turma e cultura esportiva, com organizacao da FAC e participacao dos nucleos ECI e EPT."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              O que e o Interclasse CEAP
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              O Interclasse e o campeonato interno da escola, criado para reunir
              turmas em modalidades esportivas, fortalecer o senso de
              pertencimento e valorizar talentos dentro e fora da quadra.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Papel da FAC
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              A Federacao Atletica CEAP organiza a experiencia do evento e da
              cultura estudantil, conectando clubes, turmas, modalidades,
              identidade visual e comunicacao institucional.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-foreground">
              Objetivo do BID
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              O BID Interclasse CEAP centraliza atletas, equipes, modalidades e
              regulamentos em um portal publico simples, confiavel e pronto para
              consulta rapida durante a competicao.
            </p>
          </Card>
        </div>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">
            Esporte, identidade e memoria escolar
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            O Interclasse CEAP 2026 nasce com uma proposta clara: fazer o
            esporte ocupar um lugar central na vida estudantil. Mais do que
            jogos, o evento organiza rivalidades saudaveis, incentiva fair play
            e da visibilidade ao envolvimento das turmas com seus clubes,
            cores e representacoes.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Com apoio da FAC, o portal amplia essa experiencia ao reunir o
            conteudo publico da competicao em um unico ambiente. Assim, alunos,
            organizacao e comunidade conseguem consultar informacoes essenciais
            com mais clareza e consistencia.
          </p>
        </section>
      </Container>
    </main>
  );
}
