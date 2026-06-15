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
  const sportName = getSportName(regulation.title);
  const cardCode = code ?? getRegulationCode(sportName);

  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5">
      <div className={`h-1 ${accentClassName}`} />
      <div className="grid gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-alt text-primary ring-1 ring-line">
            <span className="bid-display text-xl leading-none">
              {cardCode}
            </span>
          </div>
          <RegulationStatusBadge status={regulation.status} />
        </div>

        <div>
          <p className="bid-kicker text-slate-500">Regra de consulta</p>
          <h3 className="bid-display mt-2 text-3xl leading-none text-ink">
            {sportName}
          </h3>
        </div>

        <div className="grid gap-3">
          <div>
            <p className="bid-kicker text-primary">Sobre o esporte</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {regulation.description}
            </p>
          </div>
          <div>
            <p className="bid-kicker text-primary">Resumo do regulamento</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {regulation.content}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone="muted">{formatDivisionLabel(regulation.division)}</Badge>
          <Badge tone="dark">Consulta no BID</Badge>
        </div>
      </div>
    </article>
  );
}

function getSportName(title: string) {
  return title
    .replace("Regulamento de ", "")
    .replace("Regulamento ", "")
    .replace("Interclasse CEAP 2026", "Interclasse 2026");
}

function getRegulationCode(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
