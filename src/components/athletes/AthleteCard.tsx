import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EntityVisual } from "@/components/ui/EntityVisual";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Athlete } from "@/types/interclasse";

interface AthleteCardProps {
  athlete: Athlete;
  sportNames: string[];
  teamName?: string;
  divisionLabel: string;
}

export function AthleteCard({
  athlete,
  sportNames,
  teamName,
  divisionLabel,
}: AthleteCardProps) {
  const hasTeam = Boolean(teamName);
  const hasCourse = Boolean(athlete.course);

  return (
    <Card className="grid h-full overflow-hidden p-0">
      <div className="p-3 pb-0">
        <EntityVisual
          src={athlete.photoUrl}
          alt={`Foto ou identificacao visual de ${athlete.name}`}
          title={athlete.name}
          label={`Atleta ${divisionLabel}`}
          context={sportNames[0] ?? divisionLabel}
          tone={athlete.division === "ept" ? "orange" : "blue"}
          aspect="wide"
        />
      </div>

      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="bid-kicker text-primary">Atleta {divisionLabel}</p>
            <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
              {athlete.name}
            </h2>
          </div>
          {athlete.status ? <StatusBadge status={athlete.status} /> : null}
        </div>

        <div className="grid gap-2 rounded-lg border border-line bg-surface-alt p-3 text-sm">
          <div>
            <p className="bid-kicker text-slate-500">Turma</p>
            <p className="mt-1 text-lg font-bold text-ink">
              {athlete.className}
            </p>
          </div>
          {hasCourse || hasTeam ? (
            <p className="text-sm leading-5 text-slate-600">
              {[athlete.course, teamName].filter(Boolean).join(" - ")}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {sportNames.length > 0 ? (
            sportNames.slice(0, 4).map((sportName) => (
              <Badge key={sportName} tone="primary">
                {sportName}
              </Badge>
            ))
          ) : (
            <Badge tone="muted">Sem modalidade</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
