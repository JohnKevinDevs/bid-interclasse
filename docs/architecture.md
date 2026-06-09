# Arquitetura

## Decisoes Permanentes

- O projeto e front-end only na versao atual.
- Os dados sao armazenados em arquivos JSON locais dentro de `src/data/`.
- A aplicacao usa Next.js com App Router em `src/app/`.
- A tipagem central fica em `src/types/`.
- Funcoes de leitura, formatacao e filtros simples ficam em `src/lib/`.
- Componentes reutilizaveis ficam em `src/components/`.
- O deploy futuro sera feito na Vercel.

## Fora Da Arquitetura Atual

- Sem backend.
- Sem banco de dados.
- Sem autenticacao.
- Sem painel administrativo.
- Sem upload de arquivos.
- Sem APIs externas.
- Sem placar ao vivo, chaveamento ou tabela de jogos.

## Estrutura Principal

```txt
src/
  app/
  components/
  data/
  lib/
  types/
```
