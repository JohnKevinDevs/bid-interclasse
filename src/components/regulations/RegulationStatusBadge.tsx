import type { RegulationStatus } from "@/types/interclasse";

interface RegulationStatusBadgeProps {
  status?: RegulationStatus;
}

const statusMap: Record<
  RegulationStatus,
  {
    label: string;
    className: string;
  }
> = {
  disponivel: {
    label: "Disponivel",
    className: "border-green/25 bg-green/15 text-[#2f6f18]",
  },
  em_revisao: {
    label: "Em revisao",
    className: "border-accent/25 bg-accent/15 text-[#7a4f00]",
  },
  em_breve: {
    label: "Em breve",
    className: "border-line bg-surface-alt text-slate-700",
  },
};

export function RegulationStatusBadge({
  status = "em_breve",
}: RegulationStatusBadgeProps) {
  const statusInfo = statusMap[status];

  return (
    <span
      className={`bid-kicker inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 ${statusInfo.className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {statusInfo.label}
    </span>
  );
}
