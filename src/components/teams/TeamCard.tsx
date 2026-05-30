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
  athleteNames,
  sportNames,
  divisionLabel,
}: TeamCardProps) {
  return (
    <Card className="grid h-full overflow-hidden p-0">
      <div
        className="border-b-4"
        style={{ borderColor: team.color ?? "#006b5f" }}
      >
        <MediaFrame
          src={team.imageUrl}
          alt={`Imagem do time ${team.name}`}
          className="rounded-b-none border-0"
        />
      </div>

      <div className="grid gap-5 p-5">
        <div>
          <p className="text-xs font-semibold uppercase text-primary">
            Equipe {divisionLabel}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {team.name}
          </h2>
        </div>

        {team.description ? (
          <p className="text-sm leading-6 text-slate-700">{team.description}</p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {sportNames.map((sportName) => (
            <Badge key={sportName} tone="primary">
              {sportName}
            </Badge>
          ))}
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase text-slate-500">
            Elenco vinculado
          </p>
          <p className="mt-1 text-2xl font-semibold text-foreground">
            {team.athleteIds.length} atleta(s)
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {athleteNames.length > 0
              ? athleteNames.join(", ")
              : "Elenco ainda nao vinculado."}
          </p>
        </div>
      </div>
    </Card>
  );
}
