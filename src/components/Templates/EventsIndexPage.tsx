"use client";
import Sections from "@/components/Sections";
import { EventRecord, PostRecord, SiteLocale } from "@/graphql/generated";
import WhichHero from "@/components/Hero/WichHero";
import { convertToSlug } from "@/lib/convertToSlug";
import EventsGridRenderer from "../Event/EventsGridRenderer";

type GenericPageProps = {
  locale: SiteLocale;
  data: any;
  list: EventRecord[];
};

export default function EventsIndexPage({
  data,
  list,
  locale,
}: GenericPageProps) {
  const page = data.page || data;
  if (!page) return null;
  return (
    <div>
      {page?.hero && <WhichHero hero={page?.hero as any} locale={locale} />}
      {page?.page?.sections?.map((section) => {
        const sectionSpacing =
          section.style !== "base-100 text-base-content" ||
          "bg-base-200 text-base-content"
            ? "xl:mx-5"
            : "";
        return (
          <section
            key={section.id}
            className={`${section.style} ${sectionSpacing} py-4 lg:py-8 scroll-mt-24 lg:scroll-mt-30`}
            id={section.label ? convertToSlug(section.label) : null}
          >
            {section.blocks && (
              <Sections
                section={section}
                locale={locale}
                lastPosts={data.allPosts as PostRecord[]}
                lastEvents={data.allEvents as EventRecord[]}
              />
            )}
          </section>
        );
      })}
      <EventsGridRenderer data={list as EventRecord[]} lng={locale} />
    </div>
  );
}
