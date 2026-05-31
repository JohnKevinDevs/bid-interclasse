import Link from "next/link";
import { AthleteCard } from "@/components/athletes/AthleteCard";
import { Container } from "@/components/layout/Container";
import { SportCard } from "@/components/sports/SportCard";
import { TeamCard } from "@/components/teams/TeamCard";
import { Card } from "@/components/ui/Card";
import { DivisionHero } from "@/components/ui/DivisionHero";
import { ListHeader } from "@/components/ui/ListHeader";
import { QuickAccessCard } from "@/components/ui/QuickAccessCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthleteCountForSport,
  getAthleteNamesByIds,
  getAthletesByDivision,
  getSportNamesByIds,
  getSportsByDivision,
  getSportsForAthlete,
  getTeamById,
  getTeamCountForSport,
  getTeamsByDivision,
} from "@/lib/data";
import type { Division } from "@/types/interclasse";

interface DivisionOverviewPageProps {
  division: Division;
  title: string;
  description: string;
  overviewTitle: string;
  overviewDescription: string;
  identityTitle: string;
  identityDescription: string;
  closingTitle: string;
  closingDescription: string;
}

export function DivisionOverviewPage({
  division,
  title,
  description,
  overviewTitle,
  overviewDescription,
  identityTitle,
  identityDescription,
  closingTitle,
  closingDescription,
}: DivisionOverviewPageProps) {
  const divisionLabel = division.toUpperCase();
  const athletes = getAthletesByDivision(division);
  const teams = getTeamsByDivision(division);
  const sports = getSportsByDivision(division);

  const activeAthleteCount = athletes.filter(
    (athlete) => athlete.status === "ativo",
  ).length;
  const classCount = new Set(athletes.map((athlete) => athlete.className)).size;
  const courseCount = new Set(
    athletes
      .map((athlete) => athlete.course)
      .filter((course): course is string => Boolean(course)),
  ).size;
  const exclusiveSportCount = sports.filter(
    (sport) => sport.division === division,
  ).length;
  const athletePreview = athletes.slice(0, 3);
  const teamPreview = teams.slice(0, 2);
  const sportPreview = sports.slice(0, 3);

  return (
    <main>
      <DivisionHero
        division={divisionLabel}
        title={title}
        description={description}
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Atletas"
            value={athletes.length}
            description={`Base publica ${divisionLabel}`}
          />
          <StatCard
            label="Times"
            value={teams.length}
            description={`Equipes da divisao ${divisionLabel}`}
          />
          <StatCard
            label="Modalidades"
            value={sports.length}
            description="Consultas esportivas disponiveis"
          />
          <StatCard
            label="Turmas"
            value={classCount}
            description="Representacoes cadastradas"
          />
        </div>
      </DivisionHero>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <article className="rounded-lg bg-foreground p-6 text-white shadow-xl sm:p-8">
            <p className="text-xs font-semibold uppercase text-accent">
              Resumo da divisao
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {overviewTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {overviewDescription}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase text-white/70">
                  Atletas ativos
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {activeAthleteCount}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase text-white/70">
                  Cursos mapeados
                </p>
                <p className="mt-2 text-3xl font-semibold">{courseCount}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase text-white/70">
                  Modalidades proprias
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {exclusiveSportCount}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase text-white/70">
                  Fluxo principal
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Elenco, equipes e modalidades da divisao em leitura rapida.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <QuickAccessCard
              href={`/${division}/atletas`}
              eyebrow={`BID ${divisionLabel}`}
              title="Atletas"
              description={`Veja o elenco da ${divisionLabel} com turma, curso, equipe, modalidades e situacao de cadastro.`}
              meta="Abrir atletas"
            />
            <QuickAccessCard
              href={`/${division}/times`}
              eyebrow={`BID ${divisionLabel}`}
              title="Times"
              description={`Consulte as equipes da ${divisionLabel} com elenco vinculado e modalidades de disputa.`}
              meta="Abrir times"
            />
            <QuickAccessCard
              href={`/${division}/modalidades`}
              eyebrow={`BID ${divisionLabel}`}
              title="Modalidades"
              description={`Confira a base esportiva da ${divisionLabel} com categorias e relacoes de consulta.`}
              meta="Abrir modalidades"
            />
            <Card className="h-full">
              <p className="text-xs font-semibold uppercase text-primary">
                Como usar a central
              </p>
              <div className="mt-4 grid gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    01. Leia o panorama
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Comece pelos previews para entender a composicao geral da
                    divisao.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    02. Abra a listagem certa
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Use os atalhos para consultar o tipo de dado que interessa
                    no momento.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    03. Navegue com contexto
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    A central antecipa os principais nomes e modalidades antes
                    da consulta completa.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      <section className="border-y border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <ListHeader
            eyebrow={`Atletas ${divisionLabel}`}
            title="Preview do elenco da divisao"
            description={`Antes de abrir a listagem completa, a central destaca parte dos atletas cadastrados na ${divisionLabel} com seus principais vinculos esportivos.`}
            meta={`${athletePreview.length} de ${athletes.length} registro(s)`}
          />
          <div className="grid gap-4 xl:grid-cols-3">
            {athletePreview.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                athlete={athlete}
                sportNames={getSportsForAthlete(athlete)}
                teamName={getTeamById(athlete.teamId)?.name}
                divisionLabel={divisionLabel}
              />
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <Link
              href={`/${division}/atletas`}
              className="text-sm font-semibold uppercase text-primary transition hover:text-primary-strong"
            >
              Ver listagem completa de atletas
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 xl:grid-cols-2">
          <section>
            <ListHeader
              eyebrow={`Times ${divisionLabel}`}
              title="Equipes em evidencia"
              description={`A central tambem antecipa as equipes da ${divisionLabel} com suas modalidades vinculadas e a composicao atual do elenco.`}
              meta={`${teamPreview.length} de ${teams.length} equipe(s)`}
            />
            <div className="grid gap-4">
              {teamPreview.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  athleteNames={getAthleteNamesByIds(team.athleteIds)}
                  sportNames={getSportNamesByIds(team.sportIds)}
                  divisionLabel={divisionLabel}
                />
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                href={`/${division}/times`}
                className="text-sm font-semibold uppercase text-primary transition hover:text-primary-strong"
              >
                Ver listagem completa de times
              </Link>
            </div>
          </section>

          <section>
            <ListHeader
              eyebrow={`Modalidades ${divisionLabel}`}
              title="Panorama esportivo da divisao"
              description={`Cada modalidade aparece aqui com contagem de atletas e equipes para dar leitura imediata da presenca competitiva da ${divisionLabel}.`}
              meta={`${sportPreview.length} de ${sports.length} modalidade(s)`}
            />
            <div className="grid gap-4">
              {sportPreview.map((sport) => (
                <SportCard
                  key={sport.id}
                  sport={sport}
                  divisionLabel={
                    sport.division === "ambos" ? "ECI e EPT" : divisionLabel
                  }
                  teamCount={getTeamCountForSport(sport.id, division)}
                  athleteCount={getAthleteCountForSport(sport.id, division)}
                />
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                href={`/${division}/modalidades`}
                className="text-sm font-semibold uppercase text-primary transition hover:text-primary-strong"
              >
                Ver listagem completa de modalidades
              </Link>
            </div>
          </section>
        </div>
      </Container>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <article className="rounded-lg border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase text-primary">
                Fechamento institucional
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {closingTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
                {closingDescription}
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase text-primary">
                  Identidade da divisao
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {identityTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {identityDescription}
                </p>
              </Card>
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase text-primary">
                  Consulta publica
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  Menos vazio, mais contexto
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  A central organiza os principais dados da divisao antes da
                  navegacao detalhada e reforca o carater oficial do BID.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
