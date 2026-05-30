import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,_#ffffff_0%,_#f6f8f7_48%,_#d8e0e7_100%)]">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Portal Oficial do Interclasse CEAP
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              BID Interclasse CEAP
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Conheca atletas, equipes, modalidades e regulamentos da
              competicao.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/eci"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-strong"
              >
                Acessar ECI
              </Link>
              <Link
                href="/ept"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Acessar EPT
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card href="/eci">
            <p className="text-sm font-semibold uppercase text-primary">Divisao</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">ECI</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Consulta institucional da divisao ECI.
            </p>
          </Card>
          <Card href="/ept">
            <p className="text-sm font-semibold uppercase text-primary">Divisao</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">EPT</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Consulta institucional da divisao EPT.
            </p>
          </Card>
          <Card href="/regulamentos">
            <p className="text-sm font-semibold uppercase text-primary">
              Documentos
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Regulamentos
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Regras e orientacoes oficiais da competicao.
            </p>
          </Card>
          <Card href="/sobre">
            <p className="text-sm font-semibold uppercase text-primary">
              Institucional
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Sobre
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Conheca o proposito do Interclasse CEAP/FAC.
            </p>
          </Card>
        </div>
      </Container>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12">
          <SectionTitle
            eyebrow="Projeto"
            title="Um portal publico para organizar a competicao"
            description="O BID Interclasse CEAP centraliza as informacoes essenciais do evento para facilitar a consulta de atletas, equipes, modalidades e regulamentos pelas turmas participantes."
          />
        </Container>
      </section>
    </main>
  );
}
