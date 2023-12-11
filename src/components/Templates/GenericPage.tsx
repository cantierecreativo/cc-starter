import Sections from "@/components/Sections";
import {
  CollectionMetadata,
  PageModelSectionsField,
  PageQuery,
  PostRecord,
  SiteLocale,
} from "@/graphql/generated";

type GenericPageProps = {
  locale: SiteLocale;
  data: PageQuery;
};

export default function GenericPage({ data, locale }: GenericPageProps) {
  return (
    <Sections
      locale={locale}
      sections={data?.page?.sections as Array<PageModelSectionsField>}
      posts={data?.allPosts as PostRecord[]}
      postMeta={data?._allPostsMeta as CollectionMetadata}
    />
  );
}
