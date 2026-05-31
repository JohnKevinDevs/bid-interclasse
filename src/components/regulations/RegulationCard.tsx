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
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-primary hover:shadow-lg">
      <div className={`h-1.5 ${accentClassName}`} />
      <div className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Badge tone="muted">{formatDivisionLabel(regulation.division)}</Badge>
            <span className="inline-flex w-fit items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-600">
              Documento oficial
            </span>
          </div>
          <RegulationStatusBadge status={regulation.status} />
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase text-primary">
            Modalidade / regulamento
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            {regulation.title}
          </h3>
        </div>

        {regulation.description ? (
          <p className="mt-4 text-sm font-medium leading-6 text-slate-800">
            {regulation.description}
          </p>
        ) : null}

        <p className="mt-3 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-700">
          {regulation.content}
        </p>
      </div>
    </article>
  );
}
