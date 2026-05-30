import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MediaFrame } from "@/components/ui/MediaFrame";
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
  return (
    <Card className="grid h-full overflow-hidden p-0">
      <MediaFrame
        src={athlete.photoUrl}
        alt={`Foto de ${athlete.name}`}
        aspect="portrait"
        className="rounded-b-none border-0"
      />

      <div className="grid gap-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              Atleta {divisionLabel}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              {athlete.name}
            </h2>
          </div>
          <StatusBadge status={athlete.status} />
        </div>

        {athlete.shortBio ? (
          <p className="text-sm leading-6 text-slate-700">{athlete.shortBio}</p>
        ) : null}

        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase text-slate-500">Turma</p>
            <p className="mt-1 font-semibold text-foreground">{athlete.className}</p>
          </div>
          {athlete.course ? (
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Curso
              </p>
              <p className="mt-1 font-semibold text-foreground">{athlete.course}</p>
            </div>
          ) : null}
          {athlete.position ? (
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Posicao
              </p>
              <p className="mt-1 font-semibold text-foreground">
                {athlete.position}
              </p>
            </div>
          ) : null}
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase text-slate-500">Time</p>
            <p className="mt-1 font-semibold text-foreground">
              {teamName ?? "Nao vinculado"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {sportNames.map((sportName) => (
            <Badge key={sportName} tone="primary">
              {sportName}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
