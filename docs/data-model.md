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

Campos opcionais planejados:

```ts
photoUrl?: string;
shortBio?: string;
position?: string;
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

Campos opcionais planejados:

```ts
description?: string;
imageUrl?: string;
color?: string;
```

## Sport

```ts
export interface Sport {
  id: string;
  name: string;
  division: SharedDivision;
}
```

Campos opcionais planejados:

```ts
description?: string;
imageUrl?: string;
category?: string;
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

Campos opcionais planejados:

```ts
description?: string;
status?: "disponivel" | "em_revisao" | "em_breve";
```

## Observacao Sobre Evolucao

Os campos planejados ainda nao devem ser aplicados aos tipos ou JSONs sem uma fase propria de implementacao. A proxima etapa de modelagem deve atualizar `src/types/interclasse.ts`, os JSONs locais e as telas consumidoras em conjunto.

## Arquivos JSON

- `src/data/athletes.json`
- `src/data/teams.json`
- `src/data/sports.json`
- `src/data/regulations.json`
