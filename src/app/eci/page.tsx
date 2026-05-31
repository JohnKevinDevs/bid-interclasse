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
  title: "Interclasse ECI",
  description:
    "Central publica da divisao ECI no BID Interclasse CEAP, com acesso a atletas, times e modalidades.",
  alternates: {
    canonical: "/eci",
  },
  openGraph: {
    title: "Interclasse ECI | BID Interclasse CEAP",
    description:
      "Consulte atletas, equipes e modalidades da divisao ECI no portal oficial do Interclasse CEAP.",
    url: "/eci",
  },
};

export default function EciPage() {
  const athleteCount = getAthletesByDivision("eci").length;
  const teamCount = getTeamsByDivision("eci").length;
  const sportCount = getSportsByDivision("eci").length;

  return (
    <main>
      <DivisionHero
        division="ECI"
        title="Interclasse ECI"
        description="Central publica da divisao ECI: atletas, equipes e modalidades em um fluxo de consulta rapido, organizado e com leitura de BID esportivo."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Atletas" value={athleteCount} description="No BID ECI" />
          <StatCard label="Times" value={teamCount} description="Equipes ECI" />
          <StatCard label="Modalidades" value={sportCount} description="Disponiveis" />
        </div>
      </DivisionHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <QuickAccessCard
            href="/eci/atletas"
            eyebrow="BID ECI"
            title="Atletas"
            description="Participantes da ECI com turma, curso, modalidades e situacao de cadastro."
            meta="Consultar atletas"
          />
          <QuickAccessCard
            href="/eci/times"
            eyebrow="BID ECI"
            title="Times"
            description="Equipes proprias da divisao com atletas vinculados e modalidades de disputa."
            meta="Consultar times"
          />
          <QuickAccessCard
            href="/eci/modalidades"
            eyebrow="BID ECI"
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
            ECI no Interclasse CEAP
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            A divisao ECI reune seus atletas, equipes e modalidades em uma base
            publica de consulta. O objetivo e facilitar a transparencia do
            evento e fortalecer a representacao de cada turma dentro da
            competicao.
          </p>
        </section>
      </Container>
    </main>
  );
}
