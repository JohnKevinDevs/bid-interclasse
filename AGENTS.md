# BID Interclasse CEAP

Este arquivo e a principal fonte de contexto permanente para agentes de IA trabalhando neste repositorio.

## Projeto

Nome: BID Interclasse CEAP

Objetivo: portal publico institucional do Interclasse CEAP/FAC para exibicao de atletas, equipes, modalidades, regulamentos e informacoes institucionais.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Dados locais em JSON
- Deploy futuro na Vercel

## Restricoes Permanentes

Nao implementar sem aprovacao explicita:

- backend
- banco de dados
- autenticacao
- painel admin
- upload de arquivos
- APIs externas
- placar ao vivo
- chaveamento
- tabela de jogos
- classificacao automatica
- resultados em tempo real

## Fluxo Git

- Trabalhar em etapas pequenas.
- Rodar lint e build antes de finalizar uma etapa.
- Apresentar resumo do que foi alterado.
- Nunca executar commit sem autorizacao explicita.
- Nunca executar push sem autorizacao explicita.
- Nao realizar grandes refatoracoes sem alinhamento.

## Uso Da Documentacao

Antes de qualquer tarefa, leia apenas os documentos necessarios.

Mapeamento:

- Arquitetura: `docs/architecture.md`
- Estado atual: `docs/current-state.md`
- Roadmap: `docs/roadmap.md`
- Fluxo operacional: `docs/codex-workflow.md`
- Design: `docs/design-system.md`
- Modelagem: `docs/data-model.md`

Importante: nao carregar todos os documentos automaticamente. Consulte apenas os documentos relevantes para a tarefa atual.

## Next.js

Este projeto foi criado com uma versao recente do Next.js. Antes de alterar APIs, convencoes ou estrutura do framework, consulte a documentacao local relevante em `node_modules/next/dist/docs/` quando necessario.
