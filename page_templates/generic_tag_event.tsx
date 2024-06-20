import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
// import { PageDocument, PostsDocument, SiteLocale } from "@/graphql/generated";
import { TagDocument, PostsDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import getSeoMeta from "@/lib/seoUtils";
import EventsIndexPage from "@/components/Templates/EventsIndexPage";

const locale = "it";
const siteLocale = locale as SiteLocale;
const slug = "##";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    TagDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.tag || null;
  const meta = getSeoMeta(page, locale);
  return meta;
}

export default async function Page() {
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

  const list = data?.tag?.posts || [];
  if (!data) notFound();
  return <EventsIndexPage data={data.tag} list={list} locale={siteLocale} />;
}
