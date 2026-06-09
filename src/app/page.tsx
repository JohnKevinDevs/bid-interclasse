import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
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

const bidStats = [
  { label: "Atletas", value: athletes.length },
  { label: "Times", value: teams.length },
  { label: "Modalidades", value: sports.length },
  { label: "Divisoes", value: "2" },
];

const accessCards = [
  {
    href: "/eci",
    eyebrow: "Divisao",
    title: "ECI",
    description: "Atletas, times e modalidades.",
    accent: "blue",
  },
  {
    href: "/ept",
    eyebrow: "Divisao",
    title: "EPT",
    description: "Base da divisao tecnica.",
    accent: "orange",
  },
  {
    href: "/regulamentos",
    eyebrow: "Documentos",
    title: "Regulamentos",
    description: "Regras oficiais do evento.",
    accent: "neutral",
  },
  {
    href: "/sobre",
    eyebrow: "Projeto",
    title: "Sobre",
    description: "Interclasse, FAC e BID.",
    accent: "neutral",
  },
] as const;

const cardAccent = {
  blue: { bar: "bg-primary", text: "text-primary" },
  orange: { bar: "bg-accent", text: "text-accent" },
  neutral: { bar: "bg-navy", text: "text-slate-600" },
};

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(45,168,255,.16),transparent_42%),linear-gradient(105deg,transparent_0,transparent_55%,rgba(0,102,255,.16)_55%,transparent_75%),repeating-linear-gradient(115deg,rgba(255,255,255,.045)_0,rgba(255,255,255,.045)_1px,transparent_1px,transparent_36px)]" />
        <Container className="relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-20">
          <div>
            <p className="bid-kicker w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-blue-light">
              Portal oficial do Interclasse CEAP
            </p>
            <h1 className="bid-display mt-5 max-w-4xl text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
              BID <span className="text-blue-light">Interclasse</span> CEAP
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
              Consulta publica de atletas, times, modalidades e regulamentos,
              organizada por divisao.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/eci"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-primary/20 transition hover:bg-blue-light"
              >
                Entrar na ECI -&gt;
              </Link>
              <Link
                href="/ept"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-accent hover:bg-accent hover:text-ink"
              >
                Entrar na EPT
              </Link>
              <Link
                href="/regulamentos"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-white hover:bg-white hover:text-ink"
              >
                Regulamentos
              </Link>
            </div>
          </div>

          <section className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <p className="bid-kicker text-accent">BID em numeros</p>
            <h2 className="bid-display mt-2 text-4xl leading-none">
              Base de consulta
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {bidStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/15 bg-white/10 p-4"
                >
                  <p className="bid-display text-5xl leading-none">
                    {stat.value}
                  </p>
                  <p className="bid-kicker mt-2 text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-8 sm:py-10">
          <div className="mb-6">
            <p className="bid-kicker text-primary">Escolha por onde comecar</p>
            <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
              Divisoes e documentos
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessCards.map((card) => (
              <HomeAccessCard key={card.href} {...card} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function HomeAccessCard({
  href,
  eyebrow,
  title,
  description,
  accent,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: keyof typeof cardAccent;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5"
    >
      <span
        className={`absolute inset-y-0 left-0 w-1 ${cardAccent[accent].bar}`}
      />
      <span>
        <span className={`bid-kicker block ${cardAccent[accent].text}`}>
          {eyebrow}
        </span>
        <span className="bid-display mt-3 block text-4xl leading-none text-ink">
          {title}
        </span>
        <span className="mt-3 block text-sm leading-6 text-slate-600">
          {description}
        </span>
      </span>
      <span className="mt-5 inline-flex w-fit rounded-lg border border-line bg-white px-4 py-2 text-xs font-bold uppercase text-ink transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
        Acessar -&gt;
      </span>
    </Link>
  );
}
