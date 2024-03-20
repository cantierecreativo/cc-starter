import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
<<<<<<< HEAD
import { PageDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import GenericPage from "@/components/Templates/GenericPage";
import getSeoMeta from "@/lib/seoUtils";
import config from "@/data/config";
=======
import { PostDocument, PageDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
>>>>>>> facc883 (wip algolia)

type Params = {
  params: {
    slug: string;
  };
};

<<<<<<< HEAD
const locale = "en";
const siteLocale = locale as SiteLocale;
const defaultLocale = config.defaultLocale as SiteLocale;

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
      fallbackLocale: [defaultLocale],
      slug,
    },
    false
  );
  const page: any = data?.page || null;
  const meta = getSeoMeta(page, locale);
  return meta;
}

export default async function Page({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
      fallbackLocale: [defaultLocale],
      slug,
    },
    isEnabled
  );
  if (!data?.page) notFound();
  console.log(data, slug, locale);
  return <GenericPage data={data} locale={siteLocale} />;
=======
const locale = 'en';
const siteLocale = locale as SiteLocale;

export default async function EmptyPage({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();

  return <div>SLUG = {slug}</div>;
>>>>>>> facc883 (wip algolia)
}
