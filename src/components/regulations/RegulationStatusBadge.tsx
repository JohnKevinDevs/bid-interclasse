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
    className: "bg-primary/10 text-primary",
  },
  em_revisao: {
    label: "Em revisao",
    className: "bg-accent/15 text-[#7a4f00]",
  },
  em_breve: {
    label: "Em breve",
    className: "bg-slate-100 text-slate-700",
  },
};

export function RegulationStatusBadge({
  status = "em_breve",
}: RegulationStatusBadgeProps) {
  const statusInfo = statusMap[status];

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase ${statusInfo.className}`}
    >
      {statusInfo.label}
    </span>
  );
}
