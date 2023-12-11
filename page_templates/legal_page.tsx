import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import { LegalDocument, SiteLocale } from "@/graphql/generated";
import { notFound } from "next/navigation";
import Legal from "@/components/Footer/Legal/Legal";

const locale = "it";
const siteLocale = locale as SiteLocale;

export default async function LegalPage() {
  let slug = "##";
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    LegalDocument,
    {
      locale: siteLocale,
      fallbackLocale: [siteLocale],
      slug,
    },
    isEnabled
  );
  if (!data) notFound();

  return <Legal data={data} lng={siteLocale} />;
}
