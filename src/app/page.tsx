import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { QuickAccessCard } from "@/components/ui/QuickAccessCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatCard } from "@/components/ui/StatCard";
import { athletes, sports, teams } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <PageHero
        eyebrow="Portal Oficial do Interclasse CEAP"
        title="BID Interclasse CEAP"
        description="Consulta publica e oficial do Interclasse CEAP 2026: atletas, equipes, modalidades e regulamentos organizados por ECI e EPT em uma experiencia de BID esportivo moderno."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            FAC alem do esporte
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Uma escola. Grandes talentos. Um legado.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            A FAC transforma energia estudantil em identidade, pertencimento e
            competicao saudavel. O BID organiza essa cultura para consulta
            rapida, publica e confiavel.
          </p>
        </div>
      </PageHero>

      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-4 py-6 sm:grid-cols-3">
          <Link
            href="/eci"
            className="rounded-lg bg-primary px-5 py-4 text-sm font-semibold uppercase text-white transition hover:bg-primary-strong"
          >
            Ver ECI
          </Link>
          <Link
            href="/ept"
            className="rounded-lg bg-foreground px-5 py-4 text-sm font-semibold uppercase text-white transition hover:bg-slate-800"
          >
            Ver EPT
          </Link>
          <Link
            href="/regulamentos"
            className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-semibold uppercase text-foreground transition hover:border-primary hover:text-primary"
          >
            Consultar Regulamentos
          </Link>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Atletas cadastrados"
            value={athletes.length}
            description="Participantes vinculados aos dados locais."
          />
          <StatCard
            label="Times cadastrados"
            value={teams.length}
            description="Equipes organizadas por divisao."
          />
          <StatCard
            label="Modalidades"
            value={sports.length}
            description="Modalidades compartilhadas ou exclusivas."
          />
          <StatCard
            label="Divisoes"
            value="2"
            description="ECI e EPT em fluxos separados."
          />
        </div>
      </Container>

      <section className="bg-white">
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow="FAC e Interclasse"
              title="Um portal para dar forma publica a cultura esportiva do CEAP"
              description="A Federacao Atletica CEAP nasce para representar esporte, cultura estudantil e integracao entre alunos. No Interclasse, essa identidade vira competicao: cada turma entra com seus atletas, equipes, modalidades e regulamentos proprios."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <p className="text-xs font-semibold uppercase text-primary">
                  Pertencimento
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">
                  Cada turma como clube
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  A FAC fortalece a identidade das turmas com cultura de clube,
                  rivalidade positiva e orgulho de representar o CEAP.
                </p>
              </Card>
              <Card>
                <p className="text-xs font-semibold uppercase text-primary">
                  Transparencia
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">
                  Dados publicos do evento
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  O BID concentra informacoes essenciais para consulta rapida,
                  reduzindo ruído e deixando a competicao mais organizada.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <SectionTitle
          eyebrow="Acessos principais"
          title="Escolha o caminho de consulta"
          description="A navegacao foi organizada para separar as divisoes, destacar documentos oficiais e facilitar a leitura do BID."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAccessCard
            href="/eci"
            eyebrow="Divisao"
            title="ECI"
            description="Atletas, equipes e modalidades do nucleo ECI."
            meta="Abrir central ECI"
          />
          <QuickAccessCard
            href="/ept"
            eyebrow="Divisao"
            title="EPT"
            description="Atletas, equipes e modalidades do nucleo EPT."
            meta="Abrir central EPT"
          />
          <QuickAccessCard
            href="/regulamentos"
            eyebrow="Documentos"
            title="Regulamentos"
            description="Regras, formatos e diretrizes oficiais do Interclasse."
            meta="Consultar regras"
          />
          <QuickAccessCard
            href="/sobre"
            eyebrow="Institucional"
            title="Sobre"
            description="FAC, Interclasse e objetivo publico do BID."
            meta="Conhecer projeto"
          />
        </div>
      </Container>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12">
          <SectionTitle
            eyebrow="Como consultar o BID"
            title="Leitura rapida para acompanhar a competicao"
            description="O portal foi desenhado para responder perguntas simples: quem participa, por qual divisao, em qual equipe, quais modalidades existem e quais regulamentos orientam cada disputa."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold uppercase text-accent">01</p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                Escolha a divisao
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Entre por ECI ou EPT para consultar apenas os dados daquela
                frente do Interclasse.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase text-accent">02</p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                Consulte o BID
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Veja atletas, times e modalidades com cards mais densos e
                informacoes essenciais.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase text-accent">03</p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                Confira regulamentos
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Use os documentos oficiais para entender formatos, regras e
                criterios de cada modalidade.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
