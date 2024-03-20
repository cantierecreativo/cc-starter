import * as dotenv from "dotenv";
import path from "path";
import { promises as fs } from "fs";
import { buildClient, LogLevel } from "@datocms/cma-client-node";

dotenv.config({ path: ".env.local" });

//contiene le rotte e loro prefissi
const config = JSON.parse(
  await fs.readFile(new URL("../src/data/config.json", import.meta.url))
);

const t = (section, locale) => {
  if (!section) return;
  if (locale === config.defaultLocale) return section;
  const key = config.translations[section];
  if (key?.[locale] && key?.[locale] != "") {
    return key?.[locale];
  } else {
    return section;
  }
};

function matchCustomRoute({ slugs, _modelApiKey, locale }) {
  const slug = slugs[locale];
  if (!slug) return null;

  const matchingRoute = config.models.find(
    (i) =>
      !i.routeInfo.isDynamic &&
      !i.routeInfo.isHome &&
      i.routeInfo.model === _modelApiKey &&
      i.slugs?.[locale] === slug
  );

  if (!matchingRoute) return null;
  if (locale === config.defaultLocale) return matchingRoute.path;
  const defaultPathChunks = matchingRoute.path.split("/"); //.slice(-1);

  let prefix = defaultPathChunks.map((i) => t(i, locale)).join("/");
  return `${prefix}`;
  // return slug;
}

function resolveLink({ slugs, _modelApiKey, locale }) {
  //language prefix
  const lang = locale === config.defaultLocale ? "" : `/${locale}`;
  const slug = slugs[locale];
  if (slug === "home") {
    return lang;
  }
  //custom routing
  if (slug) {
    const customRoute = matchCustomRoute({ slugs, _modelApiKey, locale });
    if (customRoute) {
      // console.log("custom route found: ", slug, customRoute);
      return `${lang}${customRoute}`;
    }
  }
  // console.log("resolve default route  : ", slug, _modelApiKey);
  //default routing
  switch (_modelApiKey) {
    case "page":
      return `${lang}/${slug}`;
    case "post":
      return `${lang}/${t(`blog`, locale)}/${slug}`;
    case "legal_page":
      return `${lang}/${t(`legal`, locale)}/${slug}`;
    default:
      return `${lang}/${slug ? slug : ""}`;
  }
}

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

async function getRecords(modelList) {
  console.log("MODELS", JSON.stringify(modelList, null, 2));

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

  let records = [];
  // TO GET ALL RECORDS INSTEAD OF SOME
  for await (const record of client.items.listPagedIterator({
    filter: {
      type: modelList,
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

function resolvePath({ slug, apiKey }, locale) {
  return resolveLink({ slugs: slug, _modelApiKey: apiKey, locale });
}

function getSlugs(records) {
  return records
    .map((r) => {
      return config.locales.reduce((acc, l) => {
        const result = r?.slug[l] ? resolvePath(r, l) : null;
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
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}
async function generateSitemap() {
  const start = Date.now();

  // qui ci vanno i nomi delle api key relativi ai modelli delle pagine tipo "about_page,article";
  const pageModels = config.models
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
