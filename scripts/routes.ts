import { promises as fsPromises } from "fs";
import { fetchData } from "./utils";

const query = `query RoutesQuery {
  _site{
    locales
  }
  routes: allRouteItems(filter: { parent: { exists: false } }) {
    ...routeItemFrag
    children {
      ...routeItemFrag
      children {
        ...routeItemFrag
        children {
          ...routeItemFrag
        }
      }
    }
  }
}
fragment routeItemFrag on RouteItemRecord {
  parent{
    title
    _allTitleLocales{locale, value}
  }
  id
  _modelApiKey
  _allTitleLocales {
    locale
    value
  }
  isHome
  isDynamic
  associatedModel
}`;

function format(titles: any, defaultLocale: string) {
  const key = titles.find((i: any) => i.locale === defaultLocale).value;
  const rest = titles.filter((i: any) => i.locale !== defaultLocale);
  let obj = {};
  for (let i of rest) {
    obj = { ...obj, [i.locale]: i.value };
  }
  return { [key]: obj };
}

function getTranslations(routes: any, defaultLocale: string) {
  let translations: any = [];

  function traverse(sibiling: any, level: number) {
    console.log("processing level:", level);
    for (let route of sibiling) {
      if (!(route.isHome || route.isDynamic)) {
        translations.push(format(route._allTitleLocales, defaultLocale));
      }
      if (route.children?.length > 0) {
        traverse(route.children, level + 1);
      }
    }
  }
  traverse(routes, 0);
  return translations;
}
function camelize(str: string) {
  return str
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
function formatRoute(route: any, isDefaultLocale: boolean) {
  let enTitle = route._allTitleLocales.find(
    (i: any) => i.locale === "en"
  ).value;
  let queryName = enTitle;
  const { isHome, isDynamic, associatedModel: model, parent } = route;
  if (isHome) {
    queryName = "home";
  }
  if (isDynamic && parent) {
    let parentEnTitle = parent._allTitleLocales.find(
      (i: any) => i.locale === "en"
    ).value;
    queryName = parentEnTitle;
  }
  queryName = camelize(queryName);
  return { queryName, isHome, isDynamic, isDefaultLocale, model };
}

function getPaths(routes: any, defaultLocale: string) {
  let paths: string[] = [];
  let models: {
    path: string;
    routeInfo: any;
  }[] = [];
  function traverse(sibiling: any, level: number, path: string) {
    console.log("processing level:", level, path);
    for (let route of sibiling) {
      let title = route._allTitleLocales.find(
        (i: any) => i.locale === defaultLocale
      ).value;

      if (title === "home") {
        title = "";
      }
      if (route.isDynamic) {
        title = `[${title}]`;
      }
      const newPath = `${path}/${title}`;
      const routeInfo = formatRoute(route, defaultLocale === "en");

      if (route.children?.length > 0) {
        //recurse
        traverse(route.children, level + 1, newPath);
      } else {
        paths.push(newPath);
        models.push({ path: newPath, routeInfo });
      }
    }
  }
  traverse(routes, 0, "");
  return { paths, models };
}

(async () => {
  const start = Date.now();
  const { routes, _site } = await fetchData(query);
  const { locales } = _site;
  const defaultLocale = locales[0];
  //get translations, uniq and only folders, no home , no slug
  const routeNames = getTranslations(routes, defaultLocale);
  const keys = routeNames.map((i: any) => Object.keys(i)[0]).sort();
  const keySet: any = new Set(keys);
  const translations: any = [];
  keySet.forEach((k: any) => {
    const found = routeNames.find((o: any) => {
      if (Object.keys(o)[0] === k) {
        return true;
      }
      return false;
    });
    // console.log(k, found);
    translations.push(found);
  });

  const { paths, models } = getPaths(routes, defaultLocale);

  const config = {
    defaultLocale,
    locales,
    translations,
    paths,
    models,
  };

  const filePath = "./src/data/config.json";
  await fsPromises.writeFile(filePath, JSON.stringify(config, null, 2));

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
