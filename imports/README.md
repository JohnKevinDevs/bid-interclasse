# Importacao Local

Use esta pasta apenas como area de trabalho para converter dados reais dos formularios em JSON local.

## Fluxo

1. Exporte as planilhas do Google Forms como CSV.
2. Coloque os arquivos brutos em `imports/raw/`.
3. Use os nomes:
   - `imports/raw/athletes.csv`
   - `imports/raw/teams.csv`
4. Coloque imagens aprovadas nas pastas publicas:
   - `public/images/athletes/`
   - `public/images/teams/`
   - `public/images/sports/`
5. Rode:

```bash
npm.cmd run convert:forms
npm.cmd run validate:data
```

`imports/raw/` e ignorada pelo Git para evitar publicar dados brutos por acidente.
