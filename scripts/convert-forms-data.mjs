import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const rawDir = join(root, "imports", "raw");
const athletesCsvPath = join(rawDir, "athletes.csv");
const teamsCsvPath = join(rawDir, "teams.csv");
const sportsPath = join(root, "src", "data", "sports.json");

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

  if (normalized === "eci" || normalized.includes("ensino medio")) {
    return "eci";
  }

  if (normalized === "ept" || normalized.includes("tecnico")) {
    return "ept";
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

  return rows.map((row) => {
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

    return {
      id: uniqueId(`atleta-${slugify(name)}`, usedIds),
      name,
      division,
      className,
      ...(course ? { course } : {}),
      sports,
      status: "ativo",
      photoUrl,
    };
  });
}

function convertTeams(athletes) {
  const rows = readCsv(teamsCsvPath);
  const usedIds = new Set();
  const athleteIdsByName = new Map(
    athletes.map((athlete) => [normalize(athlete.name), athlete.id]),
  );

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
    const athleteIds = parseList(getValue(row, ["Atletas do time", "Atletas"]))
      .map((athleteName) => athleteIdsByName.get(normalize(athleteName)))
      .filter(Boolean);
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

writeJson(join(root, "src", "data", "athletes.json"), athletes);
writeJson(join(root, "src", "data", "teams.json"), teams);

console.log("Conversao concluida.");
console.log(
  JSON.stringify(
    {
      athletes: athletes.length,
      teams: teams.length,
    },
    null,
    2,
  ),
);
