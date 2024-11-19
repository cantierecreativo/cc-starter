import { draftMode } from "next/headers";
import config from "@/data/config";
import "@/styles/globals.css";
import { SiteLocale, MenuDocument, LayoutDocument } from "@/graphql/generated";
import HeaderRenderer from "@/components/Header/HeaderRenderer";
import fetchDato from "@/lib/fetchDato";
import resolveLink from "@/lib/resolveLink";

export default async function Wrapper({ hrefs, locale, children }: any) {
  const siteLocale = locale as SiteLocale;
  const defaultLocale = config.defaultLocale as SiteLocale;
  const { isEnabled } = draftMode();
  const menuData = await fetchDato(
    MenuDocument,
    {
      locale: siteLocale,
      fallbackLocale: [defaultLocale],
    },
    isEnabled
  );
  return (
    <>
      <HeaderRenderer
        hrefs={hrefs}
        data={menuData}
        locale={siteLocale}
        isDraft={isEnabled}
      />
      {children}
    </>
  );
}
