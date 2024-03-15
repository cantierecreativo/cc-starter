import { SiteLocale } from "@/graphql/generated";
import SectionTitle from "@/components/Common/SectionTitle";
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
      <div className="container px-6">
        {(header || subheader) && (
          <SectionTitle title={header} paragraph={subheader} center />
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:gap-x-24 max-w-[1100px] mx-auto">
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
