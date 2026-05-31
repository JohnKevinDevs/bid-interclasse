import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InstitutionalBlock } from "@/components/ui/InstitutionalBlock";
import { PageHero } from "@/components/ui/PageHero";
import { ValueCard } from "@/components/ui/ValueCard";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheca o Interclasse CEAP, a FAC e o papel do BID como portal publico de consulta e transparencia.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre | BID Interclasse CEAP",
    description:
      "Entenda o projeto BID Interclasse CEAP, sua relacao com a FAC e seu papel institucional.",
    url: "/sobre",
  },
};

const values = [
  {
    title: "Transparencia",
    description:
      "Informacoes publicas, organizadas e faceis de consultar durante todo o ciclo do Interclasse.",
  },
  {
    title: "Organizacao",
    description:
      "Dados de atletas, times, modalidades e regulamentos reunidos em um ambiente unico.",
  },
  {
    title: "Espirito esportivo",
    description:
      "Competicao saudavel, respeito entre turmas e valorizacao de quem representa o CEAP.",
  },
  {
    title: "Pertencimento",
    description:
      "Identidade de turma, energia de torcida e cultura escolar transformadas em experiencia esportiva.",
  },
  {
    title: "Legado",
    description:
      "Registro institucional para preservar memoria, crescimento e protagonismo estudantil.",
  },
];

const institutionalHighlights = [
  "Consulta publica organizada por ECI e EPT.",
  "Dados de atletas, times, modalidades e regulamentos em um so lugar.",
  "Referencia institucional para alunos, organizacao e comunidade escolar.",
];

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre o projeto"
        title="O BID que organiza a memoria esportiva do Interclasse CEAP"
        description="O BID Interclasse CEAP e o portal publico da competicao: um ponto de consulta para entender quem participa, como as divisoes se organizam e quais documentos orientam o evento."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            FAC e comunidade escolar
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Esporte como identidade, organizacao e legado.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            A proposta e dar visibilidade ao Interclasse com linguagem oficial,
            leitura rapida e informacoes confiaveis para alunos, equipes e
            organizacao.
          </p>
        </div>
      </PageHero>

      <Container className="py-12">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-lg border border-slate-800 bg-foreground p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase text-accent">
              Interclasse CEAP
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              Competicao escolar com identidade, organizacao e memoria.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
              O Interclasse aproxima esporte, convivencia e representatividade.
              O BID transforma essa energia em uma base publica para consulta
              rapida, confiavel e institucional.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {institutionalHighlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="rounded-lg border border-white/10 bg-white/10 p-3"
                >
                  <p className="text-xs font-semibold uppercase text-white/60">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-5">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase text-primary">FAC</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Federacao Atletica CEAP
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                A FAC fortalece cultura esportiva, identidade das turmas e
                comunicacao institucional do evento.
              </p>
            </article>
            <article className="rounded-lg border border-primary/20 bg-primary/[0.03] p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase text-primary">BID</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Consulta publica e transparente
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Um ponto unico para reduzir duvidas e orientar alunos, equipes,
                organizacao e comunidade escolar.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Institucional
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Uma competicao escolar com linguagem de portal oficial
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              A pagina Sobre precisa explicar a proposta sem virar documento
              longo. Por isso, a leitura abaixo separa evento, FAC e BID em
              blocos diretos.
            </p>
            <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-5">
              <p className="text-xs font-semibold uppercase text-[#7a4f00]">
                Sintese
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                Esporte como pertencimento. Dados como transparencia. Memoria
                como legado.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <InstitutionalBlock
              eyebrow="Interclasse CEAP"
              title="O que e o Interclasse CEAP"
            >
              <p>
                O Interclasse CEAP e a competicao interna que reune turmas,
                atletas e equipes em modalidades esportivas. Ele cria um espaco
                de disputa saudavel, representacao e convivencia, onde cada
                aluno pode participar como atleta, torcedor ou parte da cultura
                do evento.
              </p>
            </InstitutionalBlock>

            <InstitutionalBlock
              eyebrow="FAC"
              title="FAC - Federacao Atletica CEAP"
            >
              <p>
                A FAC atua como frente de mobilizacao esportiva e institucional,
                conectando identidade visual, comunicacao, cultura de torcida e
                organizacao do Interclasse. Seu papel e transformar o esporte
                em pertencimento e dar forma a experiencia coletiva dos alunos.
              </p>
            </InstitutionalBlock>

            <InstitutionalBlock eyebrow="BID" title="Papel do BID Interclasse">
              <p>
                O BID Interclasse CEAP foi criado para ser uma base publica de
                consulta. Nele, a comunidade encontra atletas, times,
                modalidades e regulamentos organizados por divisao.
              </p>
            </InstitutionalBlock>
          </div>
        </div>

        <section className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">
                Valores do projeto
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                O que sustenta o BID Interclasse CEAP
              </h2>
            </div>
            <p className="text-base leading-7 text-slate-700">
              A experiencia visual e editorial do portal foi pensada para unir
              credibilidade institucional e energia esportiva.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                index={`0${index + 1}`}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
