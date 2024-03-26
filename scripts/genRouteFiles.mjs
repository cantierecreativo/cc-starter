#!/usr/bin/env zx
const { promises: fsPromises } = require("fs");
const ROOT_FOLDER = "./src/app/";
const BASE_FOLDER = "(base)";

//Replace locale in files
async function replaceInFile(destFile, toReplace, replaceWith) {
  try {
    const contents = await fsPromises.readFile(destFile, "utf-8");
    const re1 = new RegExp(`"${toReplace}"`, "g");
    const re2 = new RegExp(`"${toReplace}"`, "g");
    let replaced = contents
      .replace(re1, `"${replaceWith}"`)
      .replace(re2, `'${replaceWith}'`);
    await fsPromises.writeFile(destFile, replaced);
  } catch (err) {
    console.error(err);
  }
}

async function getConfig() {
  const json = await fsPromises.readFile("./src/data/config.json", "utf8");
  return JSON.parse(json);
}
const config = await getConfig();
const { paths, models } = config;
const ext = `tsx`;
const sourceFolder = `../../../page_templates/`;

console.info(chalk.blue("paths", paths));

await $`pwd`;
//remove base folder
await $`rm -fr ${ROOT_FOLDER}${BASE_FOLDER}`;
// recreate basee folder
await $`mkdir -p ${ROOT_FOLDER}${BASE_FOLDER}`;

//step into base folder
await cd(`${ROOT_FOLDER}${BASE_FOLDER}`);
await $`pwd`;

const folders = paths.map((p) => p.slice(1)).filter(Boolean);
console.info(chalk.green("folders", folders));

//move layout
await $`cp ${sourceFolder}layout.${ext} ./layout.${ext}`;
//move home
await $`cp ${sourceFolder}generic_page.${ext} ./page.${ext}`;
await replaceInFile(`./page.${ext}`, `##`, "home");

for (let f of folders) {
  console.info(chalk.blue("create folder", f));
  await $`mkdir -p ${f}`;
  const m = models.find((m) => m.path === `/${f}`) || null;
  const r = m?.routeInfo;
  console.info(chalk.blue(m.path, ":", r.model));

  if (r && r.model && r.model !== "none") {
    let source = "generic_page";
    switch (r.model) {
      case "page":
        source = "generic_page";
        break;
      case "legal_page":
        source = "legal_page";
        break;
      case "post":
        source = "generic_post";
        break;
      case "tag":
        source = "tag_index_page";
        break;
      case "product":
      default:
        source = "empty_page";
        break;
    }
    if (r.isDynamic) {
      source = `${source}_dynamic`;
    }
    if (r.isIndex) {
      source = `empty_page`;
      if (r.indexModel === "post") {
        source = `post_index_page`;
      } else if (r.indexModel === "product") {
        source = `product_index_page`;
      }
    }

    const destination = `${f}/page.${ext}`;
    await $`cp ${sourceFolder}${source}.${ext} ${destination}`;
    if (!r.isDynamic) {
      const lastPath = f.split("/").slice(-1)?.[0];
      await replaceInFile(destination, `##`, lastPath ? lastPath : r.queryName);
    }
  }
}

console.info(chalk.blue("The End."));
