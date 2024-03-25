import { SiteLocale } from "@/graphql/generated";
import SectionTitle from "@/components/Blocks/SectionTitle";
import SinglePage from "@/components/Page/SinglePage";
import { Maybe } from "graphql/jsutils/Maybe";

type PageProps = {
  pages: any;
  header: string;
  subheader: Maybe<string>;
  locale: SiteLocale;
};

const StandardFeaturedPages = ({
  pages,
  header,
  subheader,
  locale,
}: PageProps) => {
  return (
    <section>
      <div className="container standard-vertical-m">
        {(header || subheader) && (
          <SectionTitle title={header} paragraph={subheader} center />
        )}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 lg:grid-cols-3 md:gap-x-6 mt-12">
          {pages?.map((p: any) => (
            <div key={p.id} className="w-full">
              <SinglePage page={p} locale={locale} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardFeaturedPages;
