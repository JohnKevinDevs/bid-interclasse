# Mapeamento De Dados Dos Formularios

Este documento define como transformar exportacoes manuais do Google Forms/Sheets em JSON local para o BID Interclasse CEAP.

Nao existe integracao automatica com Google Forms, Google Sheets ou API externa nesta etapa. O fluxo previsto e exportar os dados, revisar, normalizar localmente e substituir os JSONs em `src/data/`.

## Formulario De Atletas

Colunas esperadas:

- `Divisao`
- `Nome`
- `Turma`
- `Modalidades`
- `Foto`

Destino em `src/data/athletes.json`:

```json
{
  "id": "atleta-ana-silva",
  "name": "Ana Silva",
  "division": "eci",
  "className": "1A",
  "sports": ["sport-futsal"],
  "photoUrl": "/images/athletes/ana-silva.jpg"
}
```

Campos opcionais que podem continuar por compatibilidade:

- `teamId`
- `status`
- `photoUrl`
- `course`

Campos que nao devem ser necessarios para o layout:

- `position`
- `shortBio`

## Formulario De Times

Colunas esperadas:

- `Divisao`
- `Turma`
- `Curso`
- `Atletas do time`
- `Modalidades`

Destino em `src/data/teams.json`:

```json
{
  "id": "time-1a-futsal",
  "name": "1A - Futsal",
  "division": "eci",
  "sportIds": ["sport-futsal"],
  "athleteIds": ["atleta-ana-silva", "atleta-lucas-almeida"]
}
```

Como o tipo atual de `Team` nao possui `className` nem `course`, esses dados devem ser usados inicialmente para gerar o `name` do time ou para auxiliar a revisao manual.

Exemplos de nome gerado:

- `1A - Futsal`
- `2INFO - Volei`
- `1LOG - Handebol`

Campos opcionais que podem continuar por compatibilidade:

- `description`
- `imageUrl`
- `color`

## Conversao De Divisao

- `ECI` -> `eci`
- `EPT` -> `ept`

Valores diferentes devem ser revisados manualmente antes de entrar no JSON.

## Conversao De Modalidades

Modalidades podem vir separadas por virgula, ponto e virgula ou multipla escolha do Forms.

Exemplo:

```txt
Futsal; Xadrez
```

Deve virar:

```json
["sport-futsal", "sport-xadrez"]
```

Cada modalidade precisa existir em `src/data/sports.json`. Se a modalidade nao existir, criar ou revisar manualmente antes de publicar.

## Geracao De IDs

Regra sugerida:

1. Remover acentos.
2. Converter para minusculas.
3. Trocar espacos por hifen.
4. Remover caracteres especiais.
5. Adicionar prefixo do tipo de entidade.

Exemplos:

- `Ana Silva` -> `atleta-ana-silva`
- `1A + Futsal` -> `time-1a-futsal`
- `Volei` -> `sport-volei`

## Fotos

`photoUrl` pode ficar vazio inicialmente.

Opcoes seguras:

- deixar sem `photoUrl`
- usar placeholder local
- usar caminho local publico depois de aprovar as fotos

O card de atleta nao deve quebrar por falta de foto.

## Vinculo Entre Atletas E Times

Fluxo recomendado:

1. Normalizar nomes dos atletas.
2. Gerar IDs de atletas.
3. No time, converter nomes informados na coluna `Atletas do time` para `athleteIds`.
4. Conferir se cada `athleteId` existe em `athletes.json`.
5. Opcionalmente preencher `teamId` nos atletas.

## Validacao Antes De Substituir JSONs

Checar:

- todo atleta tem `id`, `name`, `division`, `className` e `sports`
- todo time tem `id`, `name`, `division`, `sportIds` e `athleteIds`
- divisao e apenas `eci` ou `ept`
- modalidades referenciadas existem em `sports.json`
- `athleteIds` apontam para atletas existentes
- `teamId`, quando existir, aponta para time existente
- nao ha `undefined`, `null` textual ou campos vazios importantes

Use o script local:

```bash
node scripts/validate-local-data.mjs
```

O script nao acessa APIs externas.
