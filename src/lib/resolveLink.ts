import config from "@/data/config";

type RouteProps = {
  _modelApiKey: string;
  locale: string;
  slugs?: [
    {
      locale: string;
      value: string;
    }
  ];
};

export function t(section: string, locale: string) {
  if (locale === config.defaultLocale) return section;
  const key = (config.translations as any)[section];
  return key?.[locale] ?? section;
}

function matchCustomRoute({ slugs, _modelApiKey, locale }: RouteProps) {
  const slug = slugs?.find((i) => i.locale === locale)?.value;
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
  const defaultPathChunks = matchingRoute.path.replace(slug, "").split("/");
  let prefix = defaultPathChunks.map((i) => t(i, locale)).join("/");
  return `${prefix}`;
}

export default function resolveLink({
  slugs,
  _modelApiKey,
  locale,
}: RouteProps): string {
  //language prefix
  const lang = locale === config.defaultLocale ? "" : `/${locale}`;
  const slug = slugs?.find((i) => i.locale === locale)?.value;
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
  //default routing
  switch (_modelApiKey) {
    case "page":
      return `${lang}/${slug}`;
    case "post":
      return `${lang}/${t(`articoli`, locale)}/${slug}`;
    case "legal_page":
      return `${lang}/${t(`legal`, locale)}/${slug}`;
    default:
      return `${lang}/${slug ? slug : ""}`;
  }
}
