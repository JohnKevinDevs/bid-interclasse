import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EntityVisual, getInitials } from "@/components/ui/EntityVisual";
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
  const primarySport = sportNames[0] ?? "Modalidade";
  const displayName = team.name?.trim() || `${divisionLabel} - ${primarySport}`;
  const teamColor = team.color;
  const rosterPreview = athleteNames.slice(0, 3);

  return (
    <Card className="grid h-full overflow-hidden p-0">
      <div className="p-3 pb-0">
        <EntityVisual
          src={team.imageUrl}
          alt={`Identificacao visual do time ${displayName}`}
          title={displayName}
          label={`Equipe ${divisionLabel}`}
          context={primarySport}
          monogram={getInitials(displayName)}
          tone={team.division === "ept" ? "orange" : "blue"}
          aspect="wide"
        />
      </div>

      <div className="grid gap-4 p-5">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full bg-primary"
              style={teamColor ? { backgroundColor: teamColor } : undefined}
              aria-hidden="true"
            />
            <p className="bid-kicker text-primary">Equipe {divisionLabel}</p>
          </div>
          <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
            {displayName}
          </h2>
          {team.description ? (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
              {team.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {sportNames.length > 0 ? (
            sportNames.map((sportName) => (
              <Badge key={sportName} tone="primary">
                {sportName}
              </Badge>
            ))
          ) : (
            <Badge tone="muted">Sem modalidade</Badge>
          )}
        </div>

        <div className="grid gap-3 rounded-lg border border-line bg-surface-alt p-4 text-sm sm:grid-cols-[auto_1fr] sm:items-start">
          <div>
            <p className="bid-kicker text-slate-500">Atletas</p>
            <p className="bid-display mt-1 text-4xl leading-none text-ink">
              {team.athleteIds.length}
            </p>
          </div>
          <div className="min-w-0">
            <p className="bid-kicker text-slate-500">Elenco</p>
            <p className="mt-2 text-sm leading-5 text-slate-600">
              {rosterPreview.length > 0
                ? rosterPreview.join(", ")
                : "Sem atletas vinculados"}
              {athleteNames.length > rosterPreview.length
                ? ` +${athleteNames.length - rosterPreview.length}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
