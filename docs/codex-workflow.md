# Fluxo Codex

## Fluxo Padrao

1. Ler `AGENTS.md`.
2. Ler apenas os documentos relevantes para a tarefa.
3. Validar o estado do Git com `git status --short --branch`.
4. Executar a tarefa em uma etapa pequena.
5. Rodar `npm.cmd run lint`.
6. Rodar `npm.cmd run build`.
7. Atualizar `docs/current-state.md` e `docs/roadmap.md` quando a tarefa alterar fase, estado ou planejamento.
8. Gerar resumo com arquivos alterados, validacoes e problemas encontrados.
9. Criar commit automaticamente quando a tarefa comum estiver concluida e validada.
10. Executar push automaticamente para `origin/main` quando nao houver conflitos.

## Regras Operacionais

- Nao misturar fases sem alinhamento.
- Nao criar backend, banco, login ou painel admin sem aprovacao.
- Nao instalar bibliotecas sem necessidade clara.
- Preferir componentes reutilizaveis simples.
- Manter os dados locais em JSON na V1.
- Preservar alteracoes existentes no working tree que nao pertencam a tarefa atual.
- Pedir confirmacao apenas para mudancas arquiteturais, refatoracoes grandes, alteracoes de stack, dependencias novas, remocao de funcionalidades ou mudanca de escopo.

## Validacao

Comandos padrao:

```bash
npm.cmd run lint
npm.cmd run build
```

Se alguma validacao nao puder ser executada, registrar o motivo no resumo final.
