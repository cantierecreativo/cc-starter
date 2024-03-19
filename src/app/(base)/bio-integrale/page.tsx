import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { PageDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import GenericPage from "@/components/Templates/GenericPage";
import getSeoMeta from "@/lib/seoUtils";
import config from "@/data/config";

const locale = "it";
const siteLocale = locale as SiteLocale;
const defaultLocale = config.defaultLocale as SiteLocale;
const pageSlug = "bio-integrale";

export async function generateMetadata() {
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
      fallbackLocale: [defaultLocale],
      slug: pageSlug,
    },
    false
  );
  const page: any = data?.page || null;
  const meta = getSeoMeta(page, locale);
  return meta;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  // console.log("PAGE by slug", pageSlug, "locale", locale);
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
      fallbackLocale: [defaultLocale],
      slug: pageSlug,
    },
    isEnabled
  );
  if (!data?.page) {
    console.log("PAGE not found", pageSlug, "locale", locale, data);
    notFound();
  }
  return <GenericPage data={data} locale={siteLocale} />;
}
