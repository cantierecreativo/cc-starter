#!/usr/bin/env zx
const { promises: fsPromises } = require("fs");
const ROOT_FOLDER = "./src/app/";
const BASE_FOLDER = "(base)";

async function getConfig() {
  const json = await fsPromises.readFile("./src/data/config.json", "utf8");
  return JSON.parse(json);
}
const config = await getConfig();
const { paths } = config;

console.info(chalk.blue("paths", paths));
// await cd(`${ROOT_FOLDER}`);
// await $`mkdir -p ${BASE_FOLDER}`;
await cd(`${ROOT_FOLDER}${BASE_FOLDER}`);
await $`pwd`;

const folders = paths.map((p) => p.slice(1)).filter(Boolean);
console.info(chalk.green("folders", folders));

for (let f of folders) {
  console.info(chalk.blue("create folder", f));
  await $`mkdir -p ${f}`;
}

console.info(chalk.blue("The End."));
