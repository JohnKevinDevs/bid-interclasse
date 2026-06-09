import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Team } from "@/types/interclasse";

interface TeamCardProps {
  team: Team;
  athleteNames: string[];
  sportNames: string[];
  divisionLabel: string;
}

export function TeamCard({
  team,
  sportNames,
  divisionLabel,
}: TeamCardProps) {
  const teamColor = team.color ?? "#006b5f";

  return (
    <Card className="grid h-full overflow-hidden p-0">
      <div
        className="border-b-4"
        style={{ borderColor: teamColor }}
      >
        <MediaFrame
          src={team.imageUrl}
          alt={`Imagem do time ${team.name}`}
          className="rounded-b-none border-0"
        />
      </div>

      <div className="grid gap-4 p-5">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: teamColor }}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase text-primary">
              Equipe {divisionLabel}
            </p>
          </div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {team.name}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {sportNames.map((sportName) => (
            <Badge key={sportName} tone="primary">
              {sportName}
            </Badge>
          ))}
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="text-xs font-semibold uppercase text-slate-500">Elenco</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">
            {team.athleteIds.length}
          </p>
          <p className="mt-1 text-slate-600">atleta(s) vinculado(s)</p>
        </div>
      </div>
    </Card>
  );
}
