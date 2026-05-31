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

      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-primary">
              Atleta {divisionLabel}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {athlete.name}
            </h2>
          </div>
          <StatusBadge status={athlete.status} />
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-sm">
          <p className="font-semibold text-foreground">{athlete.className}</p>
          <p className="mt-1 text-slate-600">
            {athlete.course ? `${athlete.course} - ` : ""}
            {teamName ?? "Sem time"}
          </p>
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
