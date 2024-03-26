import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
// import { PageDocument, PostsDocument, SiteLocale } from "@/graphql/generated";
import { TagDocument, PostsDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import PostIndexPage from "@/components/Templates/PostIndexPage";
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

  console.log("Data:", data);

  const list = data?.posts || [];
  // let allPosts = [];
  // let exitCondition = true;
  // let page = 0;
  // while (exitCondition) {
  //   const results = await fetchDato(
  //     PostsDocument,
  //     {
  //       locale: siteLocale,
  //       skip: page * 100,
  //     },
  //     isEnabled
  //   );
  //   if (results?.allPosts?.length > 0) {
  //     allPosts = [...allPosts, ...results.allPosts];
  //     page++;
  //   } else {
  //     exitCondition = false;
  //   }
  // }
  // list = allPosts;

  if (!data) notFound();

  return <PostIndexPage data={data} list={list} locale={siteLocale} />;
}
