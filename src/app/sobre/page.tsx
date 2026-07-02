import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Interclasse CEAP, a FAC e o papel do BID como portal público de consulta.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre | BID Interclasse CEAP",
    description:
      "Entenda o BID Interclasse CEAP e sua relação com o Interclasse e a FAC.",
    url: "/sobre",
  },
};

const pillars = [
  {
    eyebrow: "O evento",
    title: "Interclasse",
    text: "A competição esportiva entre turmas do CEAP, organizada por divisões, modalidades e equipes.",
    accentClassName: "bg-primary",
  },
  {
    eyebrow: "A organização",
    title: "FAC",
    text: "Federação Atlética CEAP: a entidade que representa o esporte, a cultura e a participação estudantil.",
    accentClassName: "bg-accent",
  },
  {
    eyebrow: "O portal",
    title: "BID",
    text: "Boletim público de consulta com atletas, times, modalidades e regulamentos oficiais.",
    accentClassName: "bg-navy",
  },
];

const values = [
  "Transparência",
  "Organização",
  "Espírito esportivo",
  "Pertencimento",
  "Legado",
];

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre o projeto"
        title="Uma escola. Grandes talentos. Um legado."
        description="O BID Interclasse CEAP é a vitrine pública do esporte do CEAP, organizada pela Federação Atlética CEAP."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur">
          <p className="bid-kicker text-accent">Assinatura institucional</p>
          <p className="bid-display mt-3 text-3xl leading-none">
            CEAP além da sala. FAC além do esporte.
          </p>
        </div>
      </PageHero>

      <Container className="py-8 sm:py-10">
        <section className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="relative overflow-hidden rounded-xl border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 ${pillar.accentClassName}`}
                aria-hidden="true"
              />
              <p className="bid-kicker text-primary">{pillar.eyebrow}</p>
              <h2 className="bid-display mt-3 text-4xl leading-none text-ink">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </section>

        <section className="relative mt-6 overflow-hidden rounded-xl bg-navy text-white shadow-sm">
          <div className="bid-pattern relative p-6 sm:p-7">
            <p className="bid-kicker text-accent">Valores do projeto</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <span
                  key={value}
                  className="bid-kicker rounded-lg border border-white/15 bg-white/[0.06] px-4 py-4 text-center text-white"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-line bg-surface p-5 shadow-sm">
          <p className="bid-kicker text-primary">Em poucas palavras</p>
          <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
            Consulta pública, organização e memória esportiva do CEAP.
          </h2>
        </section>
      </Container>
    </main>
  );
}
