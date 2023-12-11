import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { PageDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import GenericPage from "@/components/Templates/GenericPage";

const locale = "it";
const siteLocale = locale as SiteLocale;

export default async function Page() {
  let slug = "##";
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    PageDocument,
    {
      locale: siteLocale,
      fallbackLocale: [siteLocale],
      slug,
    },
    isEnabled
  );
  if (!data.page) notFound();

  return <GenericPage data={data} locale={siteLocale} />;
}
