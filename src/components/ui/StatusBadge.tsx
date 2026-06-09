import type { AthleteStatus } from "@/types/interclasse";
import { Badge } from "@/components/ui/Badge";

interface StatusBadgeProps {
  status: AthleteStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge tone={status === "ativo" ? "success" : "muted"}>
      {status === "ativo" ? "Ativo" : "Inativo"}
    </Badge>
  );
}
