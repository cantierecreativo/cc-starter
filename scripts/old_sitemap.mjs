import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from "path";
import { promises as fs } from "fs";
import { buildClient, LogLevel } from "@datocms/cma-client-node";

dotenv.config({ path: ".env.local" }); //SE USATE direnv non serve specificare il path
// dotenv.config();

//contiene le rotte e loro prefissi
const conf = JSON.parse(
  await fs.readFile(new URL("../src/data/config.json", import.meta.url))
);

const t = (section, locale) => {
  if (!section) return;
  if (locale === conf.defaultLocale) return section;
  const key = conf.translations[section];
  if (key?.[locale] && key?.[locale] != "") {
    return key?.[locale];
  } else {
    return section;
  }
};

const { models, locales, defaultLocale } = conf || {};

const API_KEY = process.env.DATO_API_KEY; //use your read api key variable name here
const ENV = process.env.DATO_ENV ?? "";
const FOLDER = path.resolve("./public");
let HOST = process.env.HOST || "";
const NEWLINE = "";

if (HOST[HOST.length - 1] === "/") {
  HOST = HOST.slice(0, -1);
}

async function generateRobots() {
  const start = Date.now();
  const data = `
# *
User-agent: *
Allow: /

# Host
Host: ${HOST}

# Sitemaps
Sitemap: ${HOST}/sitemap.xml`;
  await fs.writeFile(`${FOLDER}/robots.txt`, data.trim());
  const elapsed = (Date.now() - start) / 1000;
  console.log("DONE GENERATE ROBOTS in", elapsed);
}

async function getRecords(models) {
  console.log("MODELS", JSON.stringify(models, null, 2));

  let options = { apiToken: API_KEY, logLevel: LogLevel.BASIC };
  if (ENV) {
    options.environment = ENV;
  }

  let client = await buildClient(options);
  // console.log("CLIENT", client);
  const itemTypesMap = await (
    await client.itemTypes.list()
  ).reduce((itm, i) => {
    const { id, api_key } = i;
    itm[id] = api_key;
    return itm;
  }, {});
  // console.log("itemTypesMap", JSON.stringify(itemTypesMap, null, 2));

  let records = [];
  // TO GET ALL RECORDS INSTEAD OF SOME
  for await (const record of client.items.listPagedIterator({
    filter: {
      type: models,
      slugField: { exists: true },
    },
  })) {
    const { id, title, slug, item_type } = record;
    const apiKey = itemTypesMap[item_type.id];
    let item = { id, title, slug, apiKey };
    if (slug) {
      records.push(item);
    }
  }

  return records;
}

function resolvePath(record, locale) {
  // console.log("record", record);
  const { slug, apiKey } = record;
  const isDefautlLocale = locale === defaultLocale;
  const localePrefix = isDefautlLocale ? "" : `/${locale}`;
  let sl = slug;
  if (typeof slug != "string") {
    if (!slug[locale]) return null;
    sl = slug[locale];
  }
  const info = models.find((r) => r.routeInfo.model === apiKey);
  if (sl == "home") sl = "";

  if (info?.path) {
    let prefix = "";
    if (info.level > 0) {
      const arrayOfPath = info.path
        .split("/")
        .filter((p) => p && !p.includes("slug"));
      // console.log("arrayOfPath ->", arrayOfPath);
      prefix = "/" + arrayOfPath.map((p) => t(p, locale)).join("/");
    }

    return `${localePrefix}${prefix}/${sl}`;
  }
}

function getSlug(record, locale) {
  const { slug, apiKey } = record;
  let url;
  if (typeof slug == "string") {
    url = resolvePath({ slug, apiKey }, locale);
  } else {
    if (!slug[locale]) return null;
    url = resolvePath({ slug: slug[locale], apiKey }, locale);
  }

  // const alts = info.locales
  //   .filter((l) => l !== locale)
  //   .reduce((acc, l) => {
  //     if (!l || !slug[l]) return acc;
  //     const path = resolvePath(record, l);
  //     return [...acc, { path, locale: l }];
  //   }, []);
  return url;
}

function getSlugs(records) {
  return records
    .map((r) => {
      return locales.reduce((acc, l) => {
        const result = resolvePath(r, l);
        return result ? [...acc, result] : acc;
      }, []);
    })
    .flat();
}

function getRoute(path) {
  return `
  <url>
    <loc>${HOST}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
}
async function generateSitemap() {
  const start = Date.now();

  // qui ci vanno i nomi delle api key relativi ai modelli delle pagine tipo "about_page,article";
  const pageModels = models
    .map((r) => r.routeInfo.model)
    .filter((m) => m != "none")
    .join(",");
  const records = await getRecords(pageModels);
  // console.log("got records", records);
  const slugs = getSlugs(records);
  const sitemap = `
  <\?xml version="1.0" encoding="UTF-8"\?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${slugs
    .sort()
    .map((p) => getRoute(p))
    .join(NEWLINE)}
  </urlset>`;
  await fs.writeFile(`${FOLDER}/sitemap.xml`, sitemap.trim());
  const elapsed = (Date.now() - start) / 1000;
  console.log("DONE GENERATE SITEMAP in", elapsed);
}

(() => {
  return Promise.all([generateRobots(), generateSitemap()]);
})();

// sumbit sitemap
//fetch(`https://www.google.com/ping?sitemap=${HOST}/sitemap.xml)`
