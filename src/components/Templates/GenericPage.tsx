"use client";

import Sections from "@/components/Sections";
import { PageQuery, SiteLocale } from "@/graphql/generated";
import { convertToSlug } from "@/lib/convertToSlug";
import WhichHero from "@/components/Home/Hero/WichHero";
import MenuInternal from "@/components/Page/MenuInternal";

type GenericPageProps = {
  locale: SiteLocale;
  data: PageQuery;
};

export default function GenericPage({ data, locale }: GenericPageProps) {
  const page = data?.page;
  if (!page) return null;
  const navItems = [];
  const sections = page?.sections;

  if (sections?.length > 0 && !page.isHome && !page.isIndex) {
    sections.forEach((s) => {
      if (s.label) navItems.push(s.label);
    });
  }

  return (
    <div>
      {page.hero && <WhichHero hero={page.hero} />}
      {navItems.length > 0 && <MenuInternal navItems={navItems} />}
      {sections?.map((section) => {
        const sectionSpacing =
          section.style !== "base-100 text-base-content" ||
          "bg-base-200 text-base-content"
            ? "xl:mx-5"
            : "";
        return (
          <section
            key={section.id}
            className={`${section.style} ${sectionSpacing} scroll-mt-24 overflow-hidden lg:scroll-mt-30`}
            id={section.label ? convertToSlug(section.label) : null}
          >
            {section.blocks && <Sections section={section} locale={locale} />}
          </section>
        );
      })}
    </div>
  );
}
