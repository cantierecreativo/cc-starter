import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { TagDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import PostsIndexPage from "@/components/Templates/PostsIndexPage";
import getSeoMeta from "@/lib/seoUtils";

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
  return <PostsIndexPage data={data} list={list} locale={siteLocale} />;
}
