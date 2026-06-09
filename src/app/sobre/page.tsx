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
              className="relative overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 ${pillar.accentClassName}`}
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

        <section className="mt-6 overflow-hidden rounded-lg bg-navy text-white shadow-sm">
          <div className="bg-[linear-gradient(118deg,rgba(45,168,255,.16),transparent_42%),linear-gradient(105deg,transparent_0,transparent_62%,rgba(245,157,26,.12)_62%,transparent_78%),repeating-linear-gradient(115deg,rgba(255,255,255,.045)_0,rgba(255,255,255,.045)_1px,transparent_1px,transparent_36px)] p-6 sm:p-7">
            <p className="bid-kicker text-accent">Valores do projeto</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <span
                  key={value}
                  className="bid-kicker rounded-lg border border-white/15 bg-white/10 px-4 py-4 text-center text-white"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-line bg-surface p-5 shadow-sm">
          <p className="bid-kicker text-primary">Em poucas palavras</p>
          <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
            Consulta pública, organização e memória esportiva do CEAP.
          </h2>
        </section>
      </Container>
    </main>
  );
}
