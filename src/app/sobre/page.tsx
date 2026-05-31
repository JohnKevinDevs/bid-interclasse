import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheca o Interclasse CEAP, a FAC e o papel do BID como portal publico de consulta.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre | BID Interclasse CEAP",
    description:
      "Entenda o BID Interclasse CEAP e sua relacao com o Interclasse e a FAC.",
    url: "/sobre",
  },
};

const pillars = [
  {
    title: "Interclasse CEAP",
    text: "Competicao entre turmas, com atletas, times e modalidades organizadas.",
  },
  {
    title: "FAC",
    text: "A frente que fortalece a cultura esportiva e a identidade do evento.",
  },
  {
    title: "BID",
    text: "O portal publico para consultar participantes, equipes e regras.",
  },
];

const values = ["Transparencia", "Organizacao", "Espirito esportivo"];

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre"
        title="Interclasse, FAC e BID em um so lugar"
        description="O BID Interclasse CEAP existe para deixar a competicao mais clara, bonita e facil de consultar."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            Essencial
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Quem joga, por qual time e em qual modalidade.
          </p>
        </div>
      </PageHero>

      <Container className="py-8 sm:py-10">
        <section className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase text-primary">
                Projeto
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {pillar.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-lg bg-foreground p-6 text-white">
          <p className="text-xs font-semibold uppercase text-accent">
            Valores
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Um portal oficial, simples e confiavel.
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase text-white/80"
              >
                {value}
              </span>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
