import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const rawDir = join(root, "imports", "raw");
const athletesCsvPath = join(rawDir, "athletes.csv");
const teamsCsvPath = join(rawDir, "teams.csv");
const sportsPath = join(root, "src", "data", "sports.json");

// Avisos que não param a conversão, mas precisam de revisão humana antes de publicar.
const warnings = [];

const officialSportAliases = new Map([
  ["futebol", "sport-futebol"],
  ["fut7", "sport-futebol"],
  ["futsal", "sport-futebol"],
  ["basquete", "sport-basquete"],
  ["basquete 3x3", "sport-basquete"],
  ["volei", "sport-volei"],
  ["vôlei", "sport-volei"],
  ["tenis", "sport-tenis"],
  ["tênis", "sport-tenis"],
  ["xadrez", "sport-xadrez"],
]);

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function slugify(value) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCsv(content) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const next = content[index + 1];

    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(current.trim());
      if (row.some(Boolean)) {
        rows.push(row);
      }
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  row.push(current.trim());
  if (row.some(Boolean)) {
    rows.push(row);
  }

  const [headers = [], ...records] = rows;
  const normalizedHeaders = headers.map(normalize);

  return records.map((record) =>
    Object.fromEntries(
      normalizedHeaders.map((header, index) => [header, record[index] ?? ""]),
    ),
  );
}

function getValue(row, aliases) {
  for (const alias of aliases) {
    const value = row[normalize(alias)];
    if (value) {
      return value.trim();
    }
  }

  return "";
}

function parseDivision(value) {
  const normalized = normalize(value);

  // EPT primeiro: "EPT - Ensino Medio Tecnico" contem "ensino medio" e caia na ECI.
  if (
    normalized === "ept" ||
    normalized.startsWith("ept ") ||
    normalized.includes("tecnico") ||
    normalized.includes("profissionalizante")
  ) {
    return "ept";
  }

  if (
    normalized === "eci" ||
    normalized.startsWith("eci ") ||
    normalized.includes("complementar") ||
    normalized.includes("ensino medio")
  ) {
    return "eci";
  }

  throw new Error(`Divisao invalida: ${value}`);
}

function parseList(value) {
  return String(value ?? "")
    .split(/[,;\n|]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSports(value) {
  return parseList(value).map((sportName) => {
    const sportId = officialSportAliases.get(normalize(sportName));

    if (!sportId) {
      throw new Error(`Modalidade nao reconhecida: ${sportName}`);
    }

    return sportId;
  });
}

function imagePath(value, folder, placeholder) {
  const rawValue = String(value ?? "").trim();

  if (!rawValue) {
    return placeholder;
  }

  if (rawValue.startsWith("/")) {
    return rawValue;
  }

  if (/^https?:\/\//i.test(rawValue)) {
    return placeholder;
  }

  return `/images/${folder}/${basename(rawValue.replaceAll("\\", "/"))}`;
}

function uniqueId(base, usedIds) {
  let candidate = base;
  let counter = 2;

  while (usedIds.has(candidate)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }

  usedIds.add(candidate);
  return candidate;
}

function readCsv(path) {
  return parseCsv(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function convertAthletes() {
  const rows = readCsv(athletesCsvPath);
  const usedIds = new Set();
  // Resposta repetida no Forms (mesmo nome e turma) vira um atleta so; as modalidades somam.
  const byNameAndClass = new Map();
  const athletes = [];

  for (const row of rows) {
    const name = getValue(row, ["Nome", "Nome completo", "Atleta"]);
    const division = parseDivision(getValue(row, ["Divisao", "Divisão"]));
    const className = getValue(row, ["Turma", "Sala"]);
    const course = getValue(row, ["Curso"]);
    const sports = parseSports(getValue(row, ["Modalidades", "Modalidade"]));
    const photoUrl = imagePath(
      getValue(row, ["Foto", "Imagem", "Foto/Imagem"]),
      "athletes",
      "/images/athletes/placeholder-athlete.svg",
    );

    if (!name || !className || sports.length === 0) {
      throw new Error(`Atleta com dados obrigatorios incompletos: ${name}`);
    }

    const key = `${normalize(name)}|${normalize(className)}`;
    const existing = byNameAndClass.get(key);
    if (existing) {
      existing.sports = [...new Set([...existing.sports, ...sports])];
      warnings.push(
        `Resposta repetida de ${name} (${className}): mantido um cadastro, modalidades somadas.`,
      );
      continue;
    }

    const athlete = {
      id: uniqueId(`atleta-${slugify(name)}`, usedIds),
      name,
      division,
      className,
      ...(course ? { course } : {}),
      sports,
      status: "ativo",
      photoUrl,
    };
    byNameAndClass.set(key, athlete);
    athletes.push(athlete);
  }

  return athletes;
}

function convertTeams(athletes) {
  const rows = readCsv(teamsCsvPath);
  const usedIds = new Set();
  // Homonimos existem (mesmo nome em turmas diferentes): guardar todos os candidatos.
  const athletesByName = new Map();
  for (const athlete of athletes) {
    const key = normalize(athlete.name);
    athletesByName.set(key, [...(athletesByName.get(key) ?? []), athlete]);
  }

  return rows.map((row) => {
    const division = parseDivision(getValue(row, ["Divisao", "Divisão"]));
    const teamLabel = getValue(row, [
      "Nome do time ou turma",
      "Nome do time",
      "Time",
      "Turma",
    ]);
    const course = getValue(row, ["Curso"]);
    const sportIds = parseSports(getValue(row, ["Modalidades", "Modalidade"]));
    const athleteIds = [];
    for (const athleteName of parseList(getValue(row, ["Atletas do time", "Atletas"]))) {
      const candidates = (athletesByName.get(normalize(athleteName)) ?? []).filter(
        (athlete) => athlete.division === division,
      );
      // Com homonimos, desempata pela turma quando o time leva o nome da turma.
      const sameClass = candidates.filter(
        (athlete) => normalize(athlete.className) === normalize(teamLabel),
      );
      const match = candidates.length === 1 ? candidates[0] : sameClass.length === 1 ? sameClass[0] : null;

      if (match) {
        athleteIds.push(match.id);
      } else if (candidates.length === 0) {
        warnings.push(
          `Time ${teamLabel}: "${athleteName}" nao aparece no formulario de atletas da divisao ${division.toUpperCase()}; ficou fora do elenco.`,
        );
      } else {
        warnings.push(
          `Time ${teamLabel}: "${athleteName}" tem ${candidates.length} homonimos na divisao ${division.toUpperCase()}; ficou fora do elenco ate alguem decidir qual e.`,
        );
      }
    }
    const imageUrl = imagePath(
      getValue(row, ["Imagem", "Foto", "Foto/Imagem"]),
      "teams",
      "/images/teams/placeholder-team.svg",
    );
    const sportNames = sportIds.map((sportId) => getSportName(sportId));
    const name = teamLabel.includes("-")
      ? teamLabel
      : `${teamLabel} - ${sportNames.join(" + ")}`;

    if (!teamLabel || sportIds.length === 0) {
      throw new Error(`Time com dados obrigatorios incompletos: ${teamLabel}`);
    }

    return {
      id: uniqueId(`time-${slugify(name)}`, usedIds),
      name,
      division,
      sportIds,
      athleteIds,
      description: course
        ? `Equipe ${teamLabel} do curso ${course}.`
        : `Equipe ${teamLabel} cadastrada no BID Interclasse CEAP.`,
      imageUrl,
    };
  });
}

function getSportName(sportId) {
  const sports = JSON.parse(readFileSync(sportsPath, "utf8"));
  return sports.find((sport) => sport.id === sportId)?.name ?? sportId;
}

if (!existsSync(athletesCsvPath) || !existsSync(teamsCsvPath)) {
  console.error("Arquivos esperados nao encontrados.");
  console.error("- imports/raw/athletes.csv");
  console.error("- imports/raw/teams.csv");
  process.exit(1);
}

const athletes = convertAthletes();
const teams = convertTeams(athletes);

// teamId do atleta = primeiro time em que aparece (o modelo ainda guarda um time so).
const teamsByAthlete = new Map();
for (const team of teams) {
  for (const athleteId of team.athleteIds) {
    teamsByAthlete.set(athleteId, [...(teamsByAthlete.get(athleteId) ?? []), team.id]);
  }
}
let multiTeam = 0;
for (const athlete of athletes) {
  const teamIds = teamsByAthlete.get(athlete.id) ?? [];
  if (teamIds.length > 0) {
    athlete.teamId = teamIds[0];
  }
  if (teamIds.length > 1) {
    multiTeam += 1;
  }
}

writeJson(join(root, "src", "data", "athletes.json"), athletes);
writeJson(join(root, "src", "data", "teams.json"), teams);

console.log("Conversao concluida.");
console.log(
  JSON.stringify(
    {
      athletes: athletes.length,
      teams: teams.length,
      athletesWithoutTeam: athletes.filter((athlete) => !athlete.teamId).length,
      athletesInMoreThanOneTeam: multiTeam,
    },
    null,
    2,
  ),
);

if (warnings.length > 0) {
  console.warn(`
ATENCAO: ${warnings.length} aviso(s) para revisar antes de publicar:`);
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}
