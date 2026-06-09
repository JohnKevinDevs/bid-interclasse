import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const validDivisions = new Set(["eci", "ept"]);
const validSharedDivisions = new Set(["eci", "ept", "ambos"]);

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), "utf8"));
}

const athletes = readJson("src/data/athletes.json");
const teams = readJson("src/data/teams.json");
const sports = readJson("src/data/sports.json");
const regulations = readJson("src/data/regulations.json");

const errors = [];

function fail(message) {
  errors.push(message);
}

function ensureArray(name, value) {
  if (!Array.isArray(value)) {
    fail(`${name} precisa ser um array.`);
  }
}

function checkUniqueIds(name, items) {
  const seen = new Set();

  for (const item of items) {
    if (!item.id) {
      fail(`${name}: registro sem id.`);
      continue;
    }

    if (seen.has(item.id)) {
      fail(`${name}: id duplicado "${item.id}".`);
    }

    seen.add(item.id);
  }
}

ensureArray("athletes", athletes);
ensureArray("teams", teams);
ensureArray("sports", sports);
ensureArray("regulations", regulations);

checkUniqueIds("athletes", athletes);
checkUniqueIds("teams", teams);
checkUniqueIds("sports", sports);
checkUniqueIds("regulations", regulations);

const athleteIds = new Set(athletes.map((athlete) => athlete.id));
const teamIds = new Set(teams.map((team) => team.id));
const sportIds = new Set(sports.map((sport) => sport.id));

for (const athlete of athletes) {
  if (!athlete.name) fail(`Atleta ${athlete.id ?? "(sem id)"} sem name.`);
  if (!athlete.className) fail(`Atleta ${athlete.id ?? "(sem id)"} sem className.`);
  if (!validDivisions.has(athlete.division)) {
    fail(`Atleta ${athlete.id ?? "(sem id)"} com division invalida.`);
  }
  if (!Array.isArray(athlete.sports) || athlete.sports.length === 0) {
    fail(`Atleta ${athlete.id ?? "(sem id)"} sem sports.`);
  }
  if (athlete.status && !["ativo", "inativo"].includes(athlete.status)) {
    fail(`Atleta ${athlete.id} com status invalido.`);
  }
  if (athlete.teamId && !teamIds.has(athlete.teamId)) {
    fail(`Atleta ${athlete.id} referencia teamId inexistente: ${athlete.teamId}.`);
  }

  for (const sportId of athlete.sports ?? []) {
    if (!sportIds.has(sportId)) {
      fail(`Atleta ${athlete.id} referencia modalidade inexistente: ${sportId}.`);
    }
  }
}

for (const team of teams) {
  if (!team.name) fail(`Time ${team.id ?? "(sem id)"} sem name.`);
  if (!validDivisions.has(team.division)) {
    fail(`Time ${team.id ?? "(sem id)"} com division invalida.`);
  }
  if (!Array.isArray(team.sportIds) || team.sportIds.length === 0) {
    fail(`Time ${team.id ?? "(sem id)"} sem sportIds.`);
  }
  if (!Array.isArray(team.athleteIds)) {
    fail(`Time ${team.id ?? "(sem id)"} sem athleteIds.`);
  }

  for (const sportId of team.sportIds ?? []) {
    if (!sportIds.has(sportId)) {
      fail(`Time ${team.id} referencia modalidade inexistente: ${sportId}.`);
    }
  }

  for (const athleteId of team.athleteIds ?? []) {
    if (!athleteIds.has(athleteId)) {
      fail(`Time ${team.id} referencia atleta inexistente: ${athleteId}.`);
    }
  }
}

for (const sport of sports) {
  if (!sport.name) fail(`Modalidade ${sport.id ?? "(sem id)"} sem name.`);
  if (!validSharedDivisions.has(sport.division)) {
    fail(`Modalidade ${sport.id ?? "(sem id)"} com division invalida.`);
  }
}

for (const regulation of regulations) {
  if (!regulation.title) fail(`Regulamento ${regulation.id ?? "(sem id)"} sem title.`);
  if (!validSharedDivisions.has(regulation.division)) {
    fail(`Regulamento ${regulation.id ?? "(sem id)"} com division invalida.`);
  }
}

if (errors.length > 0) {
  console.error("Validacao dos dados locais falhou:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Validacao dos dados locais concluida com sucesso.");
console.log(
  JSON.stringify(
    {
      athletes: athletes.length,
      teams: teams.length,
      sports: sports.length,
      regulations: regulations.length,
    },
    null,
    2,
  ),
);
