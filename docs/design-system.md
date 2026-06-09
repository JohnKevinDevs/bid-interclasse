# Design System

## Direcao Visual

O portal deve parecer:

- esportivo
- moderno
- institucional
- organizado
- oficial
- energetico

## Nova Direcao Visual

O BID Interclasse CEAP deve se aproximar de um BID esportivo moderno: uma experiencia publica de consulta, credibilidade e transparencia para atletas, times, modalidades e regulamentos oficiais.

Diretrizes:

- Visual basico premium: limpo, forte, confiavel e mobile-first.
- Base visual inspirada em portal esportivo oficial, com navy dominante e acentos em azul e laranja.
- Home com mais impacto visual e maior presenca editorial.
- Aparencia institucional, mas com energia esportiva.
- Cards com mais presenca visual, hierarquia e densidade.
- Uso planejado de imagens e fotos para atletas, times e modalidades.
- Menos espacos vazios em telas de listagem.
- Mais contraste entre secoes, chamadas e conteudo operacional.
- Visual de portal oficial, nao de scaffold inicial.
- Organizacao clara por ECI e EPT.

## Paleta Atual

- `navy` `#001B2A`: fundos fortes, hero, footer e menu mobile.
- `navy-700` `#06222F`: superficies escuras secundarias.
- `navy-600` `#0C2E3D`: cards escuros e detalhes.
- `blue` `#0066FF`: acao principal, links e ECI.
- `blue-light` `#2DA8FF`: destaques sobre fundo escuro e foco visual.
- `silver` `#C0C0C0`: apoio institucional.
- `green` `#6CC24A`: status positivo.
- `purple` `#5A3FC0`: categorias individuais/modalidades quando fizer sentido.
- `orange` `#F59D1A`: EPT e avisos institucionais.
- `paper` `#F5F8FC`: fundo geral claro.
- `surface` `#FFFFFF`: cards e areas de conteudo.
- `line` `#E3EAF2`: bordas.
- `ink` `#0B1F2A`: texto principal.

## Tipografia

- Titulo, numeros e rotulos usam hierarquia condensada, forte e uppercase.
- Corpo de texto permanece limpo, legivel e direto.
- Sem dependencia nova de fonte nesta etapa; a aparencia condensada e simulada com fallback seguro.

## Fundacao Visual Aplicada

- Tokens globais atualizados para a nova paleta.
- Header com marca FAC/Interclasse mais presente e navegacao com estado ativo.
- Menu mobile em painel navy, com itens grandes, CTA largo e area de toque confortavel.
- Footer institucional com assinatura: "Uma escola. Grandes talentos. Um legado."
- PageHero e DivisionHero preparados com fundo navy, linhas diagonais sutis e titulos mais fortes.
- Home com numeros integrados ao hero, CTAs diretos e quatro cards de acesso com presenca de portal oficial.
- Centrais ECI/EPT com destaque por cor, estatisticas no hero, previa real da divisao e atalhos principais.
- Cards de atletas, times e modalidades preparados para poucos dados reais, usando placeholders intencionais com monograma, contexto e linhas diagonais.
- Estados vazios e contadores de zero registros devem parecer informativos, nao erro visual.

## Evitar

- visual infantil
- excesso de efeitos
- aparencia generica
- excesso de cores
- animacoes desnecessarias

## Priorizar

- legibilidade
- responsividade
- organizacao
- aparencia de portal oficial
- navegacao clara
- componentes consistentes
- impacto visual
- hierarquia editorial
- leitura rapida de dados esportivos

## Base Atual

- Paleta institucional com navy, azul e laranja como base.
- Fundo claro `paper`.
- Cards brancos com bordas discretas.
- Tipografia limpa via fonte configurada no Next.js.
- Layout responsivo com container centralizado.

## Ajustes Planejados

- Rever a Home para ter uma abertura mais marcante e menos generica.
- Ampliar a expressao visual dos cards sem perder legibilidade.
- Preparar componentes para imagens, fotos e miniaturas.
- Reduzir vazios excessivos em listagens.
- Criar uma linguagem mais proxima de portal esportivo oficial.
- Manter consistencia visual entre ECI e EPT.

## Componentes De Interface

- `Header`
- `Footer`
- `Container`
- `Navbar`
- `MobileMenu`
- `Card`
- `SectionTitle`
- `EmptyState`
- `PageHero`
- `DivisionHero`
- `QuickAccessCard`
- `StatCard`
- `Badge`
- `StatusBadge`
- `MediaFrame`
- `ListHeader`
- `AthleteCard`
- `TeamCard`
- `SportCard`
- `RegulationCard`
- `RegulationStatusBadge`
- `InstitutionalBlock`
- `ValueCard`
