# Checklist De Producao

Este documento registra a auditoria final da Fase 11 para preparar o BID Interclasse CEAP para publicacao real.

## Estado Tecnico

Status tecnico: pronto para receber dados reais e gerar deploy/preview publico apos revisao final do conteudo.

O projeto ja possui:

- Next.js com App Router.
- TypeScript.
- Tailwind CSS.
- Dados locais em JSON.
- Layout responsivo.
- SEO basico.
- Metadata global e por paginas principais.
- Open Graph.
- Twitter Card.
- Sitemap.
- Robots.
- Manifest.
- Build validado.
- Redesign basico premium concluido.
- QA visual final validado em mobile, tablet e desktop.
- Mapeamento de dados dos formularios documentado em `docs/forms-data-mapping.md`.
- Validacao local de dados disponivel via `npm.cmd run validate:data`.

## Auditoria Dos Dados Locais

Arquivos auditados:

- `src/data/athletes.json`
- `src/data/teams.json`
- `src/data/sports.json`
- `src/data/regulations.json`

Resumo atual:

- Atletas cadastrados: 6.
- Times cadastrados: 4.
- Modalidades cadastradas: 4.
- Regulamentos cadastrados: 7.
- Problemas de vinculo entre IDs: nenhum encontrado.

## Dados Pendentes

Antes da publicacao real, substituir os dados mockados por dados oficiais.

Atletas:

- Confirmar nomes reais.
- Confirmar divisao: ECI ou EPT.
- Confirmar turma.
- Confirmar modalidades vinculadas.
- Confirmar foto ou manter placeholder aprovado.
- Confirmar time vinculado, se ja houver dados de times.

Times:

- Confirmar divisao.
- Confirmar turma.
- Confirmar curso, quando existir na planilha.
- Confirmar modalidades vinculadas.
- Confirmar lista de atletas por time.
- Confirmar nome gerado do time, quando nao houver nome criativo.

Modalidades:

- Confirmar lista final de modalidades oficiais.
- Confirmar se cada modalidade e exclusiva de ECI, EPT ou de ambos.
- Confirmar categoria: `coletivo`, `individual` ou outra categoria oficial.
- Revisar descricoes para refletir a comunicacao oficial do evento.

## Imagens Pendentes

Atualmente todos os registros usam placeholders:

- 6 atletas com `/images/athletes/placeholder-athlete.svg`.
- 4 times com `/images/teams/placeholder-team.svg`.
- 4 modalidades com `/images/sports/placeholder-sport.svg`.

Antes de publicar, decidir uma das abordagens:

- Manter placeholders se ainda nao houver autorizacao de imagem.
- Substituir por fotos oficiais autorizadas.
- Usar escudos, simbolos ou imagens institucionais aprovadas pela FAC.

Cuidados:

- Garantir permissao de uso das imagens.
- Evitar fotos sem autorizacao.
- Manter nomes de arquivos simples e sem dados sensiveis.
- Verificar contraste e legibilidade dos cards apos substituir imagens.

## Regulamentos Pendentes

Status atual:

- `disponivel`: 7 regulamentos.
- `em_revisao`: 0 regulamentos.
- `em_breve`: 0 regulamentos.

Pendencias:

- Revisar se os resumos em `content` e `description` estao aprovados para publicacao.
- Confirmar se o regulamento geral do Interclasse CEAP 2026 esta completo.
- Confirmar se os regulamentos de Basquete 3x3, FUT7 ECI, FUT7 EPT, Tenis, Volei e Xadrez estao na versao final.
- Garantir que o documento oficial prevaleca sobre qualquer resumo publicado no portal.

## Textos Pendentes

Revisar antes da publicacao:

- Textos institucionais da Home.
- Textos da pagina Sobre.
- Textos da pagina Regulamentos.
- Descricoes das divisoes ECI e EPT.
- Microtextos de estados vazios.
- Descricoes de atletas, times e modalidades.

Criterio:

- Linguagem oficial.
- Sem nomes ou exemplos ficticios.
- Sem promessas de funcionalidades que nao existem no escopo publico atual.
- Sem informacoes de placar, tabela, chaveamento ou resultados.

## Validacoes Antes De Publicar

- Rodar `npm.cmd run lint`.
- Rodar `npm.cmd run build`.
- Rodar `npm.cmd run validate:data`.
- Conferir `/`.
- Conferir `/eci`.
- Conferir `/ept`.
- Conferir `/eci/atletas`.
- Conferir `/eci/times`.
- Conferir `/eci/modalidades`.
- Conferir `/ept/atletas`.
- Conferir `/ept/times`.
- Conferir `/ept/modalidades`.
- Conferir `/regulamentos`.
- Conferir `/sobre`.
- Conferir `/sitemap.xml`.
- Conferir `/robots.txt`.
- Conferir `/manifest.webmanifest`.
- Conferir metadata no HTML das paginas principais.
- Conferir responsividade em mobile.
- Conferir se nao ha dados sensiveis no repositorio.
- Conferir se nao ha overflow horizontal em mobile, tablet e desktop.
- Conferir se cards continuam bons com dados reais minimos dos formularios.
- Conferir `docs/forms-data-mapping.md` antes de converter planilhas.

## Checklist Vercel

- Conectar o repositorio `JohnKevinDevs/bid-interclasse`.
- Selecionar o framework Next.js.
- Usar branch `main`.
- Configurar Install Command: `npm install`.
- Configurar Build Command: `npm run build`.
- Configurar `NEXT_PUBLIC_SITE_URL` com a URL final de producao.
- Conferir se o dominio final esta correto.
- Executar deploy.
- Validar logs do build na Vercel.

## Checklist Pos-Publicacao

- Acessar a URL publica.
- Conferir Home, ECI, EPT, Regulamentos e Sobre.
- Conferir listagens de atletas, times e modalidades.
- Conferir `/sitemap.xml`.
- Conferir `/robots.txt`.
- Conferir `/manifest.webmanifest`.
- Conferir compartilhamento social com a imagem Open Graph.
- Conferir navegacao mobile.
- Conferir se a URL final bate com `NEXT_PUBLIC_SITE_URL`.
- Registrar a URL final no README e nos documentos do projeto.

## Decisao De Publicacao

O portal esta tecnicamente preparado para publicacao, mas a publicacao oficial deve aguardar a conversao validada dos dados reais, aprovacao de imagens e revisao final dos conteudos.
