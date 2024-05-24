"use client";
import Sections from "@/components/Sections";
import { EventRecord, PostRecord, SiteLocale } from "@/graphql/generated";
import PostGridRenderer from "@/components/Blog/PostGridRenderer";
import WhichHero from "@/components/Hero/WichHero";
import { convertToSlug } from "@/lib/convertToSlug";

type GenericPageProps = {
  locale: SiteLocale;
  data: any;
  list: PostRecord[];
};

export default function PostsIndexPage({
  data,
  list,
  locale,
}: GenericPageProps) {
  const page = data;
  if (!page) return null;
  return (
    <div>
      {page?.page?.hero && (
        <WhichHero hero={page?.page?.hero as any} locale={locale} />
      )}
      {page?.page?.sections?.map((section) => {
        const sectionSpacing =
          section.style !== "base-100 text-base-content" ||
          "bg-base-200 text-base-content"
            ? "xl:mx-5"
            : "";
        return (
          <section
            key={section.id}
            className={`${section.style} ${sectionSpacing} standard-vertical-p scroll-mt-24 lg:scroll-mt-30`}
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
      <PostGridRenderer data={list as PostRecord[]} lng={locale} />
    </div>
  );
}
