import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
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
    { label: "Atletas", value: athletes.length },
    { label: "Times", value: teams.length },
    { label: "Modalidades", value: sports.length },
    { label: "Divisoes", value: "2" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Portal Oficial do Interclasse CEAP"
        title="BID Interclasse CEAP"
        description="Atletas, times, modalidades e regulamentos do Interclasse CEAP em um portal simples, bonito e oficial."
      >
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur">
          <p className="text-xs font-semibold uppercase text-accent">
            Consulta oficial
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Escolha uma divisao e consulte o BID.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/eci"
              className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold uppercase text-white transition hover:bg-primary-strong"
            >
              Entrar ECI
            </Link>
            <Link
              href="/ept"
              className="rounded-lg bg-white px-4 py-3 text-sm font-semibold uppercase text-foreground transition hover:bg-slate-100"
            >
              Entrar EPT
            </Link>
          </div>
        </div>
      </PageHero>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-6">
          <div className="grid gap-3 sm:grid-cols-3">
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
              Regulamentos
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-8 sm:py-10">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-lg border border-slate-800 bg-foreground p-6 text-white shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-accent">
                    BID em numeros
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Base de consulta
                  </h2>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase text-white/70">
                  V1
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {bidStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-white/10 p-4"
                  >
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2">
              <HomeCard
                href="/eci"
                label="Divisao"
                title="ECI"
                description="Atletas, times e modalidades."
              />
              <HomeCard
                href="/ept"
                label="Divisao"
                title="EPT"
                description="Base da divisao tecnica."
              />
              <HomeCard
                href="/regulamentos"
                label="Documentos"
                title="Regulamentos"
                description="Regras oficiais do evento."
              />
              <HomeCard
                href="/sobre"
                label="Projeto"
                title="Sobre"
                description="Interclasse, FAC e BID."
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function HomeCard({
  href,
  label,
  title,
  description,
}: {
  href: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-primary opacity-80 transition group-hover:bg-accent" />
      <span className="text-xs font-semibold uppercase text-primary">
        {label}
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-600 group-hover:bg-primary/10 group-hover:text-primary">
        Acessar
      </span>
    </Link>
  );
}
