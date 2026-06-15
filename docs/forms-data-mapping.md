# Mapeamento De Dados Dos Formulários

Este documento define como transformar exportações manuais do Google Forms/Sheets em JSON local para o BID Interclasse CEAP.

Não existe integração automática com Google Forms, Google Sheets ou API externa nesta etapa. O fluxo previsto é exportar os dados como CSV, revisar, normalizar localmente e substituir os JSONs em `src/data/`.

## Fluxo De Importação

1. Exporte as respostas dos formulários como CSV.
2. Coloque os arquivos em `imports/raw/`.
3. Use os nomes `athletes.csv` e `teams.csv`.
4. Coloque imagens aprovadas em `public/images/athletes/`, `public/images/teams/` ou `public/images/sports/`.
5. Rode `npm.cmd run convert:forms`.
6. Rode `npm.cmd run validate:data`.

`imports/raw/` é ignorada pelo Git para evitar publicar planilhas brutas.

## Formulário De Atletas

Colunas esperadas:

- `Divisão`
- `Nome`
- `Turma`
- `Curso`
- `Modalidades`
- `Foto/Imagem`

Destino em `src/data/athletes.json`:

```json
{
  "id": "atleta-ana-silva",
  "name": "Ana Silva",
  "division": "ept",
  "className": "2INFO",
  "course": "Informática",
  "sports": ["sport-volei"],
  "status": "ativo",
  "photoUrl": "/images/athletes/ana-silva.jpg"
}
```

Observação importante: ECI pode existir nos dados para formar elencos de times, mas não possui página pública de atletas no frontend. A página pública de atletas fica apenas em `/ept/atletas`.

## Formulário De Times

Colunas esperadas:

- `Divisão`
- `Nome do time ou turma`
- `Curso`
- `Modalidades`
- `Atletas do time`
- `Imagem`

Destino em `src/data/teams.json`:

```json
{
  "id": "time-2info-volei",
  "name": "2INFO - Vôlei",
  "division": "ept",
  "sportIds": ["sport-volei"],
  "athleteIds": ["atleta-ana-silva"],
  "description": "Equipe 2INFO do curso Informática.",
  "imageUrl": "/images/teams/2info-volei.jpg"
}
```

## Modalidades Oficiais

O BID trabalha com exatamente estas modalidades:

- `Futebol` -> `sport-futebol`
- `Basquete` -> `sport-basquete`
- `Vôlei` -> `sport-volei`
- `Tênis` -> `sport-tenis`
- `Xadrez` -> `sport-xadrez`

O conversor também aceita `FUT7` e `Futsal`, mas normaliza ambos para `Futebol`.

## Padrão De Imagens

Use arquivos com nomes simples, em minúsculas e sem espaços:

- `public/images/athletes/ana-silva.jpg`
- `public/images/teams/2info-volei.jpg`
- `public/images/sports/volei.jpg`

Se a coluna de imagem estiver vazia, o conversor mantém o placeholder local.

## Validação Antes De Publicar

Checar:

- todo atleta tem `id`, `name`, `division`, `className` e `sports`
- todo time tem `id`, `name`, `division`, `sportIds` e `athleteIds`
- divisão é apenas `eci` ou `ept`
- modalidades referenciadas existem em `sports.json`
- a lista de modalidades contém apenas Futebol, Basquete, Vôlei, Tênis e Xadrez
- `athleteIds` apontam para atletas existentes
- `teamId`, quando existir, aponta para time existente
- não há `undefined`, `null` textual ou campos vazios importantes

Use:

```bash
npm.cmd run convert:forms
npm.cmd run validate:data
```
