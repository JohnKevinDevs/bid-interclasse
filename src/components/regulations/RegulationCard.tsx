import { Badge } from "@/components/ui/Badge";
import type { Regulation } from "@/types/interclasse";
import { formatDivisionLabel } from "@/lib/formatters";
import { RegulationStatusBadge } from "./RegulationStatusBadge";

interface RegulationCardProps {
  regulation: Regulation;
  accentClassName?: string;
}

export function RegulationCard({
  regulation,
  accentClassName = "bg-primary",
}: RegulationCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
      <div className={`h-1 ${accentClassName}`} />
      <div className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <Badge tone="muted">{formatDivisionLabel(regulation.division)}</Badge>
          <RegulationStatusBadge status={regulation.status} />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-foreground">
            {regulation.title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          {regulation.description ?? regulation.content}
        </p>
      </div>
    </article>
  );
}
