import type { Metadata } from "next";
import Image from "next/image";
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
  { label: "Divisões", value: "2" },
];

const accessCards = [
  {
    href: "/eci",
    eyebrow: "Divisão",
    title: "ECI",
    description: "Times e modalidades da divisão ECI.",
    accent: "blue",
  },
  {
    href: "/ept",
    eyebrow: "Divisão",
    title: "EPT",
    description: "Atletas, times e modalidades da divisão EPT.",
    accent: "orange",
  },
  {
    href: "/regulamentos",
    eyebrow: "Documentos",
    title: "Regulamentos",
    description: "Modalidades, aplicações e regras oficiais.",
    accent: "neutral",
  },
  {
    href: "/sobre",
    eyebrow: "Projeto",
    title: "Sobre",
    description: "Interclasse, FAC e o papel do BID.",
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
        <div className="bid-pattern absolute inset-0" />
        <span
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-blue-light to-accent"
          aria-hidden="true"
        />
        <Container className="relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-20">
          <div>
            <p className="bid-kicker inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-blue-light">
              <Image
                src="/images/brand/fac-logo-oficial.png"
                alt=""
                width={18}
                height={18}
                className="h-5 w-5 rounded object-cover"
                aria-hidden="true"
              />
              Portal oficial do Interclasse CEAP
            </p>
            <h1 className="bid-display mt-5 max-w-4xl text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
              BID <span className="text-blue-light">Interclasse</span> CEAP
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Consulta pública de atletas, times, modalidades e regulamentos do
              Interclasse CEAP, organizada por divisão.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/eci"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-primary/25 transition hover:bg-blue-light focus-visible:outline-blue-light"
              >
                Entrar na ECI <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/ept"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-accent hover:bg-accent hover:text-ink focus-visible:outline-blue-light"
              >
                Entrar na EPT
              </Link>
              <Link
                href="/regulamentos"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-white hover:bg-white hover:text-ink focus-visible:outline-blue-light"
              >
                Regulamentos
              </Link>
            </div>
          </div>

          <section className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
            <p className="bid-kicker text-accent">BID em números</p>
            <h2 className="bid-display mt-2 text-4xl leading-none">
              Base de consulta
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {bidStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/15 bg-white/[0.06] p-4"
                >
                  <p className="bid-display text-5xl leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="bid-kicker mt-2 text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-10 sm:py-12">
          <div className="mb-6">
            <p className="bid-kicker text-primary">Escolha por onde começar</p>
            <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
              Divisões e documentos
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              O que é, onde consultar e qual divisão acessar — tudo em um só
              lugar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessCards.map((card) => (
              <HomeAccessCard key={card.href} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="bid-pattern absolute inset-0" />
        <Container className="relative py-10 sm:py-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="bid-kicker text-accent">Modalidades oficiais</p>
              <h2 className="bid-display mt-2 text-4xl leading-none">
                Cinco disputas, duas divisões
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/70">
              As modalidades do Interclasse CEAP disputadas por ECI e EPT.
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {sports.map((sport) => (
              <li
                key={sport.id}
                className="rounded-xl border border-white/15 bg-white/[0.06] p-4 transition hover:border-white/30 hover:bg-white/[0.1]"
              >
                <p className="bid-display text-2xl leading-none text-white">
                  {sport.name}
                </p>
                {sport.category ? (
                  <p className="bid-kicker mt-2 text-blue-light">
                    {sport.category}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
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
      className="group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5 focus-visible:outline-blue-light"
    >
      <span
        className={`absolute inset-y-0 left-0 w-1 ${cardAccent[accent].bar}`}
        aria-hidden="true"
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
      <span className="mt-5 inline-flex w-fit items-center gap-1 rounded-lg border border-line bg-white px-4 py-2 text-xs font-bold uppercase text-ink transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
        Acessar <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
