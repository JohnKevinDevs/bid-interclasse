# BID Interclasse CEAP

BID Interclasse CEAP e o portal oficial do Interclasse CEAP e da FAC para exibicao publica de atletas, equipes, modalidades, regulamentos e informacoes institucionais.

## Objetivo

Centralizar as informacoes essenciais do Interclasse em uma experiencia publica, organizada e responsiva, facilitando a consulta por estudantes, equipes, organizacao e comunidade escolar.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- Dados locais em JSON

## Estrutura Basica

```txt
src/
  app/
  components/
  data/
  lib/
  types/
docs/
```

## Como Executar Localmente

Instale as dependencias:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

No Windows PowerShell, caso `npm` esteja bloqueado pela policy local, use:

```bash
npm.cmd run dev
```

Valide o projeto:

```bash
npm.cmd run lint
npm.cmd run build
```

## Escopo Da Versao Atual

- Front-end apenas
- Dados em JSON local
- Sem backend
- Sem banco de dados
- Sem autenticacao
- Preparado para deploy futuro na Vercel

## Documentacao Do Projeto

- Regras para IA e fluxo permanente: `AGENTS.md`
- Estado atual: `docs/current-state.md`
- Arquitetura: `docs/architecture.md`
- Fluxo Codex: `docs/codex-workflow.md`
- Roadmap: `docs/roadmap.md`
- Design system: `docs/design-system.md`
- Modelagem de dados: `docs/data-model.md`
