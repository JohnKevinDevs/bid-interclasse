import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Sport } from "@/types/interclasse";

interface SportCardProps {
  sport: Sport;
  divisionLabel: string;
  teamCount: number;
  athleteCount: number;
}

export function SportCard({
  sport,
  divisionLabel,
  teamCount,
  athleteCount,
}: SportCardProps) {
  return (
    <Card className="grid h-full overflow-hidden p-0">
      <MediaFrame
        src={sport.imageUrl}
        alt={`Imagem da modalidade ${sport.name}`}
        className="rounded-b-none border-0"
      />

      <div className="grid gap-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">
              Modalidade
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              {sport.name}
            </h2>
          </div>
          <Badge tone="accent">{divisionLabel}</Badge>
        </div>

        {sport.description ? (
          <p className="text-sm leading-6 text-slate-700">{sport.description}</p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {sport.category ? <Badge tone="primary">{sport.category}</Badge> : null}
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase text-slate-500">Times</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">
              {teamCount}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Atletas
            </p>
            <p className="mt-2 text-3xl font-semibold text-foreground">
              {athleteCount}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
