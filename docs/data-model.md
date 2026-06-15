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
- `course`, `teamId` e `status`: mantidos por compatibilidade, mas o card nao depende deles.

Campos minimos esperados dos formularios:

- `id`
- `name`
- `division`
- `className`
- `course`, quando existir
- `sports`
- `photoUrl`, quando houver foto aprovada

Observacao: atletas ECI podem existir no JSON para formar elencos e vinculos de times, mas nao existe pagina publica `/eci/atletas`. A listagem publica de atletas fica apenas em `/ept/atletas`.

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

Campos minimos esperados apos converter a planilha:

- `id`
- `name`
- `division`
- `sportIds`
- `athleteIds`

Observacao: o formulario tera turma e curso, mas o tipo atual de `Team` nao possui `className` nem `course`. Na conversao atual, esses dados devem alimentar o `name` gerado ou ajudar a revisao manual.

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

As modalidades continuam controladas manualmente pela FAC e servem como base para mapear respostas de atletas e times.

Modalidades oficiais atuais:

- `sport-futebol`: Futebol
- `sport-basquete`: Basquete
- `sport-volei`: Vôlei
- `sport-tenis`: Tênis
- `sport-xadrez`: Xadrez

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

No frontend publico, atletas sao exibidos apenas para EPT. ECI usa atletas apenas como dado de apoio para compor times, quando necessario.

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

## Importacao Manual

Os dados reais chegam por exportacao manual do Google Forms/Sheets em CSV.

- CSVs brutos entram em `imports/raw/`, pasta ignorada pelo Git.
- Imagens aprovadas entram em `public/images/athletes/`, `public/images/teams/` e `public/images/sports/`.
- A conversao local roda com `npm.cmd run convert:forms`.
- A validacao local roda com `npm.cmd run validate:data`.

## Validacao Local

Antes de substituir os JSONs por dados reais, rode:

```bash
npm.cmd run validate:data
```

Essa validacao checa IDs, divisao, modalidades referenciadas e vinculos entre atletas e times.
