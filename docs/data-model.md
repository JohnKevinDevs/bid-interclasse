# Modelagem De Dados

Os dados da versao publica atual ficam em JSON local dentro de `src/data/` e usam tipos TypeScript em `src/types/interclasse.ts`.

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
  photoUrl?: string;
  shortBio?: string;
  position?: string;
}
```

Campos opcionais ativos:

- `photoUrl`: caminho publico para foto ou placeholder do atleta.
- `shortBio`: resumo institucional curto para cards e futuras paginas ricas.
- `position`: posicao, funcao ou papel esportivo quando fizer sentido.

## Team

```ts
export interface Team {
  id: string;
  name: string;
  division: Division;
  sportIds: string[];
  athleteIds: string[];
  description?: string;
  imageUrl?: string;
  color?: string;
}
```

Campos opcionais ativos:

- `description`: resumo editorial do time.
- `imageUrl`: caminho publico para imagem ou placeholder do time.
- `color`: cor de apoio para identidade visual do time.

## Sport

```ts
export interface Sport {
  id: string;
  name: string;
  division: SharedDivision;
  description?: string;
  imageUrl?: string;
  category?: string;
}
```

Campos opcionais ativos:

- `description`: resumo da modalidade.
- `imageUrl`: caminho publico para imagem ou placeholder da modalidade.
- `category`: categoria editorial, como `coletivo`, `individual` ou `recreativo`.

## Regulation

```ts
export interface Regulation {
  id: string;
  title: string;
  division: SharedDivision;
  content: string;
  order: number;
  description?: string;
  status?: "disponivel" | "em_revisao" | "em_breve";
}
```

Campos opcionais ativos:

- `description`: resumo curto para apresentacao em cards.
- `status`: estado editorial do documento, com valores `disponivel`, `em_revisao` ou `em_breve`.

## Placeholders Publicos

- `public/images/athletes/placeholder-athlete.svg`
- `public/images/teams/placeholder-team.svg`
- `public/images/sports/placeholder-sport.svg`

## Arquivos JSON

- `src/data/athletes.json`
- `src/data/teams.json`
- `src/data/sports.json`
- `src/data/regulations.json`

## Dados Reais Dos Formularios

Os cards devem continuar bons com poucos dados reais.

Atletas devem funcionar apenas com:

- divisao
- nome
- turma
- modalidades
- foto ou placeholder

Times devem funcionar apenas com:

- divisao
- turma ou identificacao do time
- atletas vinculados
- curso, quando for representado nos dados disponiveis
- modalidades

Modalidades devem funcionar apenas com:

- nome
- divisao

Campos como descricao, foto, cor, bio, posicao, time confirmado e imagem sao complementares. A interface nao deve depender deles para parecer completa.
