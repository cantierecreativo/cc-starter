import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { TagDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import getSeoMeta from "@/lib/seoUtils";
import EventsIndexPage from "@/components/Templates/EventsIndexPage";

type Params = {
  params: {
    slug: string;
  };
};

const locale = "en";
const siteLocale = locale as SiteLocale;

export async function generateMetadata({ params }: Params) {
  const { slug } = params;
  const data = await fetchDato(
    TagDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.tag || null;
  const meta = getSeoMeta(page, locale);
  return meta;
}

export default async function Page({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();
  const data: any = await fetchDato(
    TagDocument,
    {
      locale: siteLocale,
      fallbackLocale: [siteLocale],
      slug,
    },
    isEnabled
  );
  const list = data?.tag?.events || [];
  if (!data) notFound();
  return <EventsIndexPage data={data.tag} list={list} locale={siteLocale} />;
}
