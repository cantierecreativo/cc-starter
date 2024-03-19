import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { PostDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import PostPage from "@/components/Templates/PostPage";
import getSeoMeta from "@/lib/seoUtils";

const locale = "en";
const siteLocale = locale as SiteLocale;
const slug = "articolo-con-effetto-hover";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    PostDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.post || null;
  const meta = getSeoMeta(page, locale);
  return meta;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    PostDocument,
    {
      locale: siteLocale,
      fallbackLocale: [siteLocale],
      slug,
    },
    isEnabled
  );
  if (!data) notFound();

  return <PostPage data={data} locale={siteLocale} />;
}
