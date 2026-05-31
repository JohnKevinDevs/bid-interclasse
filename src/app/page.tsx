import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { athletes, sports, teams } from "@/lib/data";
import { ogImage, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteName,
  description:
    "Portal oficial do Interclasse CEAP/FAC para consultar atletas, times, modalidades e regulamentos organizados por ECI e EPT.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description:
      "Consulte o BID Interclasse CEAP com atletas, equipes, modalidades e regulamentos oficiais.",
    url: "/",
    images: [ogImage],
  },
};

export default function Home() {
  const bidStats = [
    {
      label: "Atletas",
      value: athletes.length,
      description: "registros publicos organizados por divisao",
    },
    {
      label: "Times",
      value: teams.length,
      description: "equipes vinculadas a modalidades e atletas",
    },
    {
      label: "Modalidades",
      value: sports.length,
      description: "disputas catalogadas no BID",
    },
    {
      label: "Divisoes",
      value: "2",
      description: "ECI e EPT com caminhos separados",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Portal Oficial do Interclasse CEAP"
        title="BID Interclasse CEAP"
        description="Consulta publica e oficial do Interclasse CEAP 2026: atletas, equipes, modalidades e regulamentos organizados por ECI e EPT com linguagem de portal esportivo institucional."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            FAC alem do esporte
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Uma escola. Grandes talentos. Um legado.
          </p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            A FAC conecta esporte, identidade estudantil e organizacao. O BID
            transforma essa cultura em uma base publica de consulta, memoria e
            transparencia para o Interclasse.
          </p>
        </div>
      </PageHero>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-8">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-lg bg-foreground p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs font-semibold uppercase text-accent">
                Caminho principal de consulta
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Escolha a divisao e acesse o BID pelo fluxo certo.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/75">
                    O portal separa ECI e EPT para deixar atletas, equipes,
                    modalidades e documentos oficiais mais faceis de consultar
                    durante todo o Interclasse CEAP.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <Link
                    href="/eci"
                    className="rounded-lg bg-primary px-5 py-4 text-sm font-semibold uppercase text-white transition hover:bg-primary-strong"
                  >
                    Ver ECI
                  </Link>
                  <Link
                    href="/ept"
                    className="rounded-lg bg-white px-5 py-4 text-sm font-semibold uppercase text-foreground transition hover:bg-slate-100"
                  >
                    Ver EPT
                  </Link>
                  <Link
                    href="/regulamentos"
                    className="rounded-lg border border-white/20 px-5 py-4 text-sm font-semibold uppercase text-white transition hover:border-accent hover:text-accent"
                  >
                    Regulamentos
                  </Link>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase text-primary">
                Base publica do BID
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Dados que sustentam a transparencia da competicao.
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {bidStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="text-3xl font-semibold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase text-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">
                Acessos principais
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Consulta rapida com cara de portal oficial.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Entre pela divisao para ver o elenco cadastrado, abra os
                regulamentos para confirmar as regras e use a pagina
                institucional para entender o papel da FAC no projeto.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/eci"
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase text-primary">
                  Divisao
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  ECI
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Central da divisao com atletas, times e modalidades proprias.
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary group-hover:text-primary-strong">
                  Abrir central ECI
                </span>
              </Link>
              <Link
                href="/ept"
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase text-primary">
                  Divisao
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  EPT
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Central da divisao com dados separados para consulta direta.
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary group-hover:text-primary-strong">
                  Abrir central EPT
                </span>
              </Link>
              <Link
                href="/regulamentos"
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase text-primary">
                  Documentos oficiais
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  Regulamentos
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Regras, formatos e orientacoes para acompanhar cada disputa.
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary group-hover:text-primary-strong">
                  Consultar documentos
                </span>
              </Link>
              <Link
                href="/sobre"
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase text-primary">
                  Institucional
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  Sobre
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  FAC, Interclasse CEAP e objetivo publico do BID.
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary group-hover:text-primary-strong">
                  Conhecer o projeto
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-lg bg-foreground p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase text-accent">
                FAC e Interclasse
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Cultura esportiva, identidade de turma e memoria publica.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/75">
                A Federacao Atletica CEAP conecta esporte, pertencimento e
                organizacao estudantil. No Interclasse, essa cultura ganha
                forma competitiva: cada turma se apresenta como equipe, cada
                atleta tem seu registro e cada modalidade segue regras
                consultaveis.
              </p>
            </article>

            <div className="grid gap-4">
              <Card>
                <p className="text-xs font-semibold uppercase text-primary">
                  Como consultar
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      01. Escolha
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      Comece por ECI ou EPT para filtrar o contexto.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      02. Consulte
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      Veja atletas, equipes e modalidades cadastradas.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      03. Confirme
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      Use os regulamentos para validar regras e criterios.
                    </p>
                  </div>
                </div>
              </Card>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <p className="text-xs font-semibold uppercase text-primary">
                    Pertencimento
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    Cada turma como clube
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    O BID reforca a identidade das turmas e organiza a memoria
                    do Interclasse.
                  </p>
                </Card>
                <Card>
                  <p className="text-xs font-semibold uppercase text-primary">
                    Transparencia
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    Informacao clara
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Dados essenciais ficam reunidos para reduzir ruido e
                    facilitar a consulta publica.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
