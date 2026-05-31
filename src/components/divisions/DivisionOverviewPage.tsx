import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { DivisionHero } from "@/components/ui/DivisionHero";
import { QuickAccessCard } from "@/components/ui/QuickAccessCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  getAthleteCountForSport,
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
  summary: string;
}

export function DivisionOverviewPage({
  division,
  title,
  description,
  summary,
}: DivisionOverviewPageProps) {
  const divisionLabel = division.toUpperCase();
  const athletes = getAthletesByDivision(division);
  const teams = getTeamsByDivision(division);
  const sports = getSportsByDivision(division);
  const athletePreview = athletes.slice(0, 3);
  const teamPreview = teams.slice(0, 3);
  const sportPreview = sports.slice(0, 3);

  return (
    <main>
      <DivisionHero
        division={divisionLabel}
        title={title}
        description={description}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard
            label="Atletas"
            value={athletes.length}
            description={`BID ${divisionLabel}`}
          />
          <StatCard label="Times" value={teams.length} description="Equipes" />
          <StatCard
            label="Modalidades"
            value={sports.length}
            description="Disputas"
          />
        </div>
      </DivisionHero>

      <Container className="py-8 sm:py-10">
        <section className="grid gap-4 lg:grid-cols-3">
          <QuickAccessCard
            href={`/${division}/atletas`}
            eyebrow={`BID ${divisionLabel}`}
            title="Atletas"
            description="Nome, turma, time, modalidades e status."
            meta="Consultar"
          />
          <QuickAccessCard
            href={`/${division}/times`}
            eyebrow={`BID ${divisionLabel}`}
            title="Times"
            description="Equipes cadastradas e modalidades vinculadas."
            meta="Consultar"
          />
          <QuickAccessCard
            href={`/${division}/modalidades`}
            eyebrow={`BID ${divisionLabel}`}
            title="Modalidades"
            description="Disputas disponiveis para a divisao."
            meta="Consultar"
          />
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">
                Resumo
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                O essencial da {divisionLabel}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{summary}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <PreviewColumn
                title="Atletas"
                href={`/${division}/atletas`}
                emptyText="Nenhum atleta."
              >
                {athletePreview.map((athlete) => (
                  <li key={athlete.id} className="rounded-lg bg-slate-50 p-3">
                    <p className="font-semibold text-foreground">
                      {athlete.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      {athlete.className} -{" "}
                      {getTeamById(athlete.teamId)?.name ?? "Sem time"}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {getSportsForAthlete(athlete).slice(0, 2).map((sport) => (
                        <Badge key={sport} tone="primary">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </li>
                ))}
              </PreviewColumn>

              <PreviewColumn
                title="Times"
                href={`/${division}/times`}
                emptyText="Nenhum time."
              >
                {teamPreview.map((team) => (
                  <li key={team.id} className="rounded-lg bg-slate-50 p-3">
                    <p className="font-semibold text-foreground">{team.name}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      {team.athleteIds.length} atleta(s)
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {getSportNamesByIds(team.sportIds).slice(0, 2).map((sport) => (
                        <Badge key={sport} tone="primary">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </li>
                ))}
              </PreviewColumn>

              <PreviewColumn
                title="Modalidades"
                href={`/${division}/modalidades`}
                emptyText="Nenhuma modalidade."
              >
                {sportPreview.map((sport) => (
                  <li key={sport.id} className="rounded-lg bg-slate-50 p-3">
                    <p className="font-semibold text-foreground">{sport.name}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      {getTeamCountForSport(sport.id, division)} time(s) -{" "}
                      {getAthleteCountForSport(sport.id, division)} atleta(s)
                    </p>
                    {sport.category ? (
                      <div className="mt-2">
                        <Badge tone="accent">{sport.category}</Badge>
                      </div>
                    ) : null}
                  </li>
                ))}
              </PreviewColumn>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg bg-foreground p-5 text-white sm:p-6">
          <p className="text-xs font-semibold uppercase text-accent">
            BID Interclasse CEAP
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Consulta simples, visual e oficial.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">
            A central mostra o que importa primeiro e deixa o detalhe para as
            listagens.
          </p>
        </section>
      </Container>
    </main>
  );
}

interface PreviewColumnProps {
  title: string;
  href: string;
  emptyText: string;
  children: ReactNode;
}

function PreviewColumn({
  title,
  href,
  emptyText,
  children,
}: PreviewColumnProps) {
  const hasItems = Array.isArray(children) ? children.length > 0 : Boolean(children);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase text-foreground">
          {title}
        </h3>
        <Link
          href={href}
          className="text-xs font-semibold uppercase text-primary transition hover:text-primary-strong"
        >
          Ver todos
        </Link>
      </div>
      <ul className="grid gap-2 text-sm">
        {hasItems ? children : <li className="text-slate-500">{emptyText}</li>}
      </ul>
    </div>
  );
}
