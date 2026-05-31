import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { DivisionHero } from "@/components/ui/DivisionHero";
import { QuickAccessCard } from "@/components/ui/QuickAccessCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthletesByDivision,
  getSportsByDivision,
  getTeamsByDivision,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Interclasse EPT",
  description:
    "Central publica da divisao EPT no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/ept",
  },
  openGraph: {
    title: "Interclasse EPT | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisao EPT no portal oficial do Interclasse CEAP.",
    url: "/ept",
  },
};

export default function EptPage() {
  const athleteCount = getAthletesByDivision("ept").length;
  const teamCount = getTeamsByDivision("ept").length;
  const sportCount = getSportsByDivision("ept").length;

  return (
    <main>
      <DivisionHero
        division="EPT"
        title="Interclasse EPT"
        description="Central publica da divisao EPT: atletas, equipes e modalidades do nucleo tecnico em uma experiencia de consulta clara, densa e oficial."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Atletas" value={athleteCount} description="No BID EPT" />
          <StatCard label="Times" value={teamCount} description="Equipes EPT" />
          <StatCard label="Modalidades" value={sportCount} description="Disponiveis" />
        </div>
      </DivisionHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <QuickAccessCard
            href="/ept/atletas"
            eyebrow="BID EPT"
            title="Atletas"
            description="Participantes da EPT com turma, curso, modalidades e situacao de cadastro."
            meta="Consultar atletas"
          />
          <QuickAccessCard
            href="/ept/times"
            eyebrow="BID EPT"
            title="Times"
            description="Equipes proprias da divisao com atletas vinculados e modalidades de disputa."
            meta="Consultar times"
          />
          <QuickAccessCard
            href="/ept/modalidades"
            eyebrow="BID EPT"
            title="Modalidades"
            description="Panorama das modalidades disponiveis e suas relacoes com times e atletas."
            meta="Consultar modalidades"
          />
        </div>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-primary">
            Identidade da divisao
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            EPT no Interclasse CEAP
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            A divisao EPT representa o nucleo tecnico dentro do Interclasse,
            reunindo equipes, atletas e modalidades em uma base publica
            organizada para consulta e acompanhamento institucional.
          </p>
        </section>
      </Container>
    </main>
  );
}
