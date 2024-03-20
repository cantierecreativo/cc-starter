import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { PageDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import GenericPage from "@/components/Templates/GenericPage";
<<<<<<< HEAD
import getSeoMeta from "@/lib/seoUtils";
import config from "@/data/config";

const locale = "en";
const siteLocale = locale as SiteLocale;
const defaultLocale = config.defaultLocale as SiteLocale;
const pageSlug = "home";

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
=======

const locale = 'en';
const siteLocale = locale as SiteLocale;

export default async function Page() {
  let slug = 'home';
  const { isEnabled } = draftMode();
>>>>>>> facc883 (wip algolia)
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
<<<<<<< HEAD
      fallbackLocale: [defaultLocale],
      slug: pageSlug,
    },
    isEnabled
  );
  if (!data?.page) {
    console.log("PAGE not found", pageSlug, "locale", locale, data);
    notFound();
  }
=======
      fallbackLocale: [siteLocale],
      slug,
    },
    isEnabled
  );
  if (!data) notFound();

>>>>>>> facc883 (wip algolia)
  return <GenericPage data={data} locale={siteLocale} />;
}
