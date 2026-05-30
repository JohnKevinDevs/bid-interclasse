import { Badge } from "@/components/ui/Badge";
import type { Regulation } from "@/types/interclasse";
import { formatDivisionLabel } from "@/lib/formatters";
import { RegulationStatusBadge } from "./RegulationStatusBadge";

interface RegulationCardProps {
  regulation: Regulation;
}

export function RegulationCard({ regulation }: RegulationCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Badge tone="muted">{formatDivisionLabel(regulation.division)}</Badge>
          <h3 className="mt-4 text-xl font-semibold text-foreground">
            {regulation.title}
          </h3>
        </div>
        <RegulationStatusBadge status={regulation.status} />
      </div>

      {regulation.description ? (
        <p className="mt-4 text-sm font-medium leading-6 text-slate-800">
          {regulation.description}
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-6 text-slate-700">
        {regulation.content}
      </p>
    </article>
  );
}
