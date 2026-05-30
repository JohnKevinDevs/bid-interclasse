# Modelagem De Dados

Os dados da V1 ficam em JSON local dentro de `src/data/` e usam tipos TypeScript em `src/types/interclasse.ts`.

## Division

```ts
export type Division = "eci" | "ept";
```

## SharedDivision

```ts
export type SharedDivision = Division | "ambos";
```

## Athlete

```ts
export interface Athlete {
  id: string;
  name: string;
  division: Division;
  className: string;
  course?: string;
  teamId?: string;
  sports: string[];
  status: "ativo" | "inativo";
}
```

## Team

```ts
export interface Team {
  id: string;
  name: string;
  division: Division;
  sportIds: string[];
  athleteIds: string[];
}
```

## Sport

```ts
export interface Sport {
  id: string;
  name: string;
  division: SharedDivision;
}
```

## Regulation

```ts
export interface Regulation {
  id: string;
  title: string;
  division: SharedDivision;
  content: string;
  order: number;
}
```

## Arquivos JSON

- `src/data/athletes.json`
- `src/data/teams.json`
- `src/data/sports.json`
- `src/data/regulations.json`
