# BID Interclasse CEAP

BID Interclasse CEAP e o portal oficial do Interclasse CEAP e da FAC para exibicao publica de atletas, equipes, modalidades, regulamentos e informacoes institucionais.

## Objetivo

Centralizar as informacoes essenciais do Interclasse em uma experiencia publica, organizada e responsiva, facilitando a consulta por estudantes, equipes, organizacao e comunidade escolar.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- Dados locais em JSON
- Deploy planejado na Vercel

## URL Do Projeto

URL futura de producao:

```txt
https://bid-interclasse-ceap.vercel.app
```

Enquanto a URL oficial nao for definida, o projeto usa esse endereco como
placeholder em metadata, sitemap e robots. Para alterar, configure
`NEXT_PUBLIC_SITE_URL` no ambiente de deploy.

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

Para executar a build localmente:

```bash
npm.cmd run build
npm.cmd run start
```

## Deploy Na Vercel

Fluxo simples recomendado:

1. Conectar o repositorio GitHub `JohnKevinDevs/bid-interclasse` na Vercel.
2. Manter o framework como Next.js.
3. Usar os comandos padrao:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output: automatico do Next.js
4. Configurar `NEXT_PUBLIC_SITE_URL` com a URL final de producao.
5. Publicar a branch `main`.

## Escopo Da Versao Atual

- Front-end apenas
- Dados em JSON local
- Sem backend
- Sem banco de dados
- Sem autenticacao
- Metadata, sitemap, robots e manifest preparados para deploy na Vercel

## Documentacao Do Projeto

- Regras para IA e fluxo permanente: `AGENTS.md`
- Estado atual: `docs/current-state.md`
- Arquitetura: `docs/architecture.md`
- Fluxo Codex: `docs/codex-workflow.md`
- Roadmap: `docs/roadmap.md`
- Design system: `docs/design-system.md`
- Modelagem de dados: `docs/data-model.md`
