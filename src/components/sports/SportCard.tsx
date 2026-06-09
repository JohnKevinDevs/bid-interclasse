import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EntityVisual } from "@/components/ui/EntityVisual";
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
  const hasRecords = teamCount > 0 || athleteCount > 0;

  return (
    <Card className="grid h-full overflow-hidden p-0">
      <div className="p-3 pb-0">
        <EntityVisual
          src={sport.imageUrl}
          alt={`Identificacao visual da modalidade ${sport.name}`}
          title={sport.name}
          label="Modalidade"
          context={sport.category ?? divisionLabel}
          tone={sport.category === "individual" ? "purple" : "green"}
          aspect="wide"
          monogram={sport.name}
        />
      </div>

      <div className="grid gap-4 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="bid-kicker text-primary">Modalidade</p>
            <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
              {sport.name}
            </h2>
          </div>
          <Badge tone="accent">{divisionLabel}</Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          {sport.category ? <Badge tone="primary">{sport.category}</Badge> : null}
          {!hasRecords ? <Badge tone="muted">Sem registros ainda</Badge> : null}
        </div>

        {sport.description ? (
          <p className="text-sm leading-6 text-slate-600">{sport.description}</p>
        ) : null}

        <div className="grid grid-cols-2 gap-3 text-sm">
          <MetricBox label="Times" value={teamCount} />
          <MetricBox label="Atletas" value={athleteCount} />
        </div>
      </div>
    </Card>
  );
}

function MetricBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-line bg-surface-alt p-4">
      <p className="bid-kicker text-slate-500">{label}</p>
      <p className="bid-display mt-2 text-4xl leading-none text-ink">
        {value}
      </p>
      {value === 0 ? (
        <p className="mt-1 text-xs font-semibold text-slate-500">
          Sem registros
        </p>
      ) : null}
    </div>
  );
}
