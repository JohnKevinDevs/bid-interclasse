import Link from "next/link";
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
import type { Athlete, Division, Sport, Team } from "@/types/interclasse";

interface DivisionOverviewPageProps {
  division: Division;
  title: string;
  description: string;
  summary: string;
}

const accentStyles = {
  eci: {
    text: "text-primary",
    bg: "bg-primary",
    soft: "bg-primary/10",
    border: "border-primary/35",
    panel:
      "from-navy via-navy-700 to-primary",
  },
  ept: {
    text: "text-accent",
    bg: "bg-accent",
    soft: "bg-accent/15",
    border: "border-accent/40",
    panel:
      "from-navy via-navy-700 to-accent",
  },
};

export function DivisionOverviewPage({
  division,
  title,
  description,
  summary,
}: DivisionOverviewPageProps) {
  const divisionLabel = division.toUpperCase();
  const accent = accentStyles[division];
  const athletes = getAthletesByDivision(division);
  const teams = getTeamsByDivision(division);
  const sports = getSportsByDivision(division);
  const athletePreview = athletes[0];
  const teamPreview = teams[0];
  const sportPreview = sports[0];

  return (
    <main>
      <DivisionHero
        division={divisionLabel}
        title={title}
        description={description}
        accent={division === "ept" ? "orange" : "blue"}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Atletas" value={athletes.length} dark />
          <StatCard label="Times" value={teams.length} dark />
          <StatCard label="Modalidades" value={sports.length} dark />
        </div>
      </DivisionHero>

      <Container className="py-8 sm:py-10">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`bid-kicker ${accent.text}`}>O essencial da divisao</p>
            <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
              Previa da {divisionLabel}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {summary}
            </p>
          </div>
          <Link
            href={`/${division}/atletas`}
            className="inline-flex min-h-11 w-fit items-center rounded-lg border border-line bg-white px-4 py-2 text-xs font-bold uppercase text-ink transition hover:border-primary/30 hover:bg-primary hover:text-white"
          >
            Ver tudo -&gt;
          </Link>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {athletePreview ? (
            <AthletePreviewCard
              athlete={athletePreview}
              divisionLabel={divisionLabel}
              panelClassName={accent.panel}
              accentTextClassName={accent.text}
            />
          ) : (
            <EmptyPreview title="Atleta" text="Nenhum atleta cadastrado." />
          )}

          {teamPreview ? (
            <TeamPreviewCard
              team={teamPreview}
              divisionLabel={divisionLabel}
              panelClassName={accent.panel}
              accentTextClassName={accent.text}
            />
          ) : (
            <EmptyPreview title="Time" text="Nenhum time cadastrado." />
          )}

          {sportPreview ? (
            <SportPreviewCard
              sport={sportPreview}
              division={division}
              panelClassName={accent.panel}
              accentTextClassName={accent.text}
            />
          ) : (
            <EmptyPreview title="Modalidade" text="Nenhuma modalidade cadastrada." />
          )}
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-3">
          <QuickAccessCard
            href={`/${division}/atletas`}
            eyebrow={`BID ${divisionLabel}`}
            title="Atletas"
            description="Nome, turma, time, modalidades e status."
            meta="Consultar"
            tone={division === "ept" ? "orange" : "blue"}
          />
          <QuickAccessCard
            href={`/${division}/times`}
            eyebrow={`BID ${divisionLabel}`}
            title="Times"
            description="Equipes cadastradas e modalidades vinculadas."
            meta="Consultar"
            tone={division === "ept" ? "orange" : "blue"}
          />
          <QuickAccessCard
            href={`/${division}/modalidades`}
            eyebrow={`BID ${divisionLabel}`}
            title="Modalidades"
            description="Disputas disponiveis na divisao."
            meta="Consultar"
            tone={division === "ept" ? "orange" : "blue"}
          />
        </section>
      </Container>
    </main>
  );
}

function AthletePreviewCard({
  athlete,
  divisionLabel,
  panelClassName,
  accentTextClassName,
}: {
  athlete: Athlete;
  divisionLabel: string;
  panelClassName: string;
  accentTextClassName: string;
}) {
  const teamName = getTeamById(athlete.teamId)?.name ?? "Sem time";
  const initials = getInitials(athlete.name);

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
      <div className={`relative min-h-48 bg-gradient-to-br ${panelClassName} p-4 text-white`}>
        <p className="bid-display text-xl leading-none">07</p>
        <div className="grid min-h-28 place-items-center">
          <p className="bid-display text-5xl leading-none">{initials}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="bid-kicker">Atleta {divisionLabel}</p>
          <p className="bid-kicker text-blue-light">
            {getSportsForAthlete(athlete)[0] ?? "BID"}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className={`bid-kicker ${accentTextClassName}`}>Atleta</p>
        <h3 className="bid-display mt-2 text-3xl leading-none text-ink">
          {athlete.name}
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          {athlete.className} - {teamName}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {getSportsForAthlete(athlete)
            .slice(0, 2)
            .map((sport) => (
              <Badge key={sport} tone="primary">
                {sport}
              </Badge>
            ))}
        </div>
      </div>
    </article>
  );
}

function TeamPreviewCard({
  team,
  divisionLabel,
  panelClassName,
  accentTextClassName,
}: {
  team: Team;
  divisionLabel: string;
  panelClassName: string;
  accentTextClassName: string;
}) {
  const initials = getInitials(team.name);
  const sports = getSportNamesByIds(team.sportIds);

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
      <div className={`min-h-32 bg-gradient-to-br ${panelClassName} p-4 text-white`}>
        <p className="bid-kicker rounded-lg border border-white/20 bg-white/10 px-3 py-2">
          {divisionLabel}
        </p>
        <p className="bid-display mt-8 text-center text-5xl leading-none">
          {initials}
        </p>
      </div>
      <div className="p-5">
        <p className={`bid-kicker ${accentTextClassName}`}>Time</p>
        <h3 className="bid-display mt-2 text-3xl leading-none text-ink">
          {team.name}
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          {team.athleteIds.length} atleta(s) - {sports[0] ?? "Modalidade"}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {sports.slice(0, 2).map((sport) => (
            <Badge key={sport} tone="primary">
              {sport}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function SportPreviewCard({
  sport,
  division,
  panelClassName,
  accentTextClassName,
}: {
  sport: Sport;
  division: Division;
  panelClassName: string;
  accentTextClassName: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
      <div className={`grid min-h-32 place-items-center bg-gradient-to-br ${panelClassName} p-4 text-white`}>
        <p className="bid-display text-5xl leading-none">{sport.name}</p>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className={`bid-kicker ${accentTextClassName}`}>Modalidade</p>
          {sport.category ? <Badge tone="accent">{sport.category}</Badge> : null}
        </div>
        <h3 className="bid-display mt-2 text-3xl leading-none text-ink">
          {sport.name}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <MiniMetric
            label="Times"
            value={getTeamCountForSport(sport.id, division)}
          />
          <MiniMetric
            label="Atletas"
            value={getAthleteCountForSport(sport.id, division)}
          />
        </div>
      </div>
    </article>
  );
}

function MiniMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-line bg-surface-alt p-3 text-center">
      <p className="bid-display text-2xl leading-none text-ink">{value}</p>
      <p className="bid-kicker mt-1 text-slate-500">{label}</p>
    </div>
  );
}

function EmptyPreview({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-dashed border-line bg-surface p-5">
      <p className="bid-kicker text-slate-500">{title}</p>
      <p className="mt-3 text-sm text-slate-600">{text}</p>
    </article>
  );
}

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
