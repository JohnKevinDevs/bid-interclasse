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
        <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase text-accent">
            Consulta oficial
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            Escolha uma divisao e consulte o BID.
          </p>
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
            <section className="rounded-lg bg-foreground p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase text-accent">
                BID em numeros
              </p>
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
              <HomeCard href="/eci" label="Divisao" title="ECI" />
              <HomeCard href="/ept" label="Divisao" title="EPT" />
              <HomeCard
                href="/regulamentos"
                label="Documentos"
                title="Regulamentos"
              />
              <HomeCard href="/sobre" label="Projeto" title="Sobre" />
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
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
    >
      <span className="text-xs font-semibold uppercase text-primary">
        {label}
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <span className="mt-5 inline-flex text-sm font-semibold uppercase text-slate-500 group-hover:text-primary">
        Acessar
      </span>
    </Link>
  );
}
