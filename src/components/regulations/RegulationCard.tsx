import { Badge } from "@/components/ui/Badge";
import type { Regulation } from "@/types/interclasse";
import { formatDivisionLabel } from "@/lib/formatters";
import { RegulationStatusBadge } from "./RegulationStatusBadge";

interface RegulationCardProps {
  regulation: Regulation;
  accentClassName?: string;
  code?: string;
}

export function RegulationCard({
  regulation,
  accentClassName = "bg-primary",
  code,
}: RegulationCardProps) {
  const documentCode = code ?? getRegulationCode(regulation.title);
  const application = getApplicationLabel(regulation.title);

  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5">
      <div className={`h-1 ${accentClassName}`} />
      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-alt text-primary ring-1 ring-line">
            <span className="bid-display text-xl leading-none">
              {documentCode}
            </span>
          </div>
          <RegulationStatusBadge status={regulation.status} />
        </div>

        <div>
          <p className="bid-kicker text-slate-500">{application}</p>
          <h3 className="bid-display mt-2 text-3xl leading-none text-ink">
            {regulation.title}
          </h3>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {regulation.description ?? regulation.content}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge tone="muted">{formatDivisionLabel(regulation.division)}</Badge>
          <Badge tone="dark">Documento oficial</Badge>
        </div>
      </div>
    </article>
  );
}

function getRegulationCode(title: string) {
  const normalizedTitle = title
    .replace("Regulamento de ", "")
    .replace("Regulamento ", "")
    .replace("Interclasse CEAP ", "IC ");

  return normalizedTitle
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getApplicationLabel(title: string) {
  if (title.toLowerCase().includes("interclasse")) {
    return "Documento mestre";
  }

  return "Regulamento por modalidade";
}
