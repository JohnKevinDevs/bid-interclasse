import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { InstitutionalBlock } from "@/components/ui/InstitutionalBlock";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ValueCard } from "@/components/ui/ValueCard";

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
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="bg-slate-950 text-white hover:border-slate-700">
            <p className="text-xs font-semibold uppercase text-accent">
              Interclasse CEAP
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Competicao que movimenta turmas e talentos.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              O evento aproxima esporte, convivencia e representatividade em um
              formato que valoriza a participacao estudantil.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase text-primary">
              FAC
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Federacao Atletica CEAP
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              A FAC fortalece a cultura esportiva do CEAP, conecta turmas e
              ajuda a transformar a competicao em uma experiencia organizada.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase text-primary">
              BID
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Consulta publica e transparente
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              O portal centraliza dados essenciais para reduzir duvidas,
              orientar participantes e apoiar a organizacao do evento.
            </p>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="Institucional"
            title="Uma competicao escolar com linguagem de portal oficial"
            description="O Interclasse CEAP deixa de ser apenas uma sequencia de jogos e passa a ter uma camada publica de organizacao, consulta e memoria."
          />
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
              <p>
                A divisao entre ECI e EPT ajuda a organizar realidades
                diferentes dentro da escola, mantendo clareza para as equipes e
                uma experiencia mais justa para quem acompanha o torneio.
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
              <p>
                Ao apoiar o BID, a FAC reforca a transparencia do evento e
                facilita o acesso a informacoes que antes ficariam espalhadas
                entre avisos, conversas e documentos isolados.
              </p>
            </InstitutionalBlock>

            <InstitutionalBlock eyebrow="BID" title="Papel do BID Interclasse">
              <p>
                O BID Interclasse CEAP foi criado para ser uma base publica de
                consulta. Nele, a comunidade encontra atletas, times,
                modalidades e regulamentos organizados por divisao.
              </p>
              <p>
                Para alunos, o portal da visibilidade a participacao. Para a
                organizacao, reduz ruido operacional. Para a comunidade escolar,
                cria uma referencia confiavel sobre o que acontece na
                competicao.
              </p>
            </InstitutionalBlock>
          </div>
        </div>

        <section className="mt-12">
          <SectionTitle
            eyebrow="Valores do projeto"
            title="O que o BID Interclasse CEAP precisa sustentar"
            description="A experiencia visual e editorial do portal foi pensada para unir credibilidade institucional e energia esportiva."
          />
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
