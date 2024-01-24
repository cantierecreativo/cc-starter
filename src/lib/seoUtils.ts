import { toNextMetadata } from "react-datocms";
import { LocaleValue, AltsProps, PageSeoProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import config from "@/data/config";

const HOST = process.env.NEXT_PUBLIC_HOST;

export function getAlts(page: PageSeoProps) {
  if (!page) return [];
  const alts = page?.titles?.map((item: LocaleValue) => {
    const { value, locale } = item;
    const slug =
      page?.slugs && page?.slugs.length > 0
        ? page?.slugs.find((s: LocaleValue) => s.locale === locale)?.value
        : "";
    const title = value;
    const _modelApiKey = page?._modelApiKey || "";
    const section = page?.section || "";
    return { slug, title: `${title}`, locale, _modelApiKey, section };
  });
  return alts;
}

export default function getSeoMeta(page: PageSeoProps) {
  if (!page) return null;

  const tags = page?.seo || [];
  const alts = getAlts(page);

  const nextTags = toNextMetadata(tags || []);
  const dl = config.defaultLocale;
  const alternates = alts?.reduce((obj: any, a: any) => {
    const { locale } = a;
    const path = resolveLink({ ...a, locale });
    const url = `${HOST}${path}`;
    if (dl === locale) {
      return { ...obj, canonical: url };
    }
    let languages = obj.languages || {};
    return {
      ...Object,
      languages: {
        ...languages,
        [locale]: url,
      },
    };
  }, {});
  const meta = { ...nextTags, alternates };
  // console.log(meta);
  return meta;
}
