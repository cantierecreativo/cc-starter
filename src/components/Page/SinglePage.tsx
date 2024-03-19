import { SiteLocale } from "@/graphql/generated";
import { Image as DatoImage } from "react-datocms";
import InternalLink from "../Links/InternalLink";
import CustomIcon from "../Common/CustomIcon";

type Props = {
  page: any;
  locale: SiteLocale;
};

const SinglePage = ({ page, locale }: Props) => {
  const { hero } = page;
  return (
    <>
      <InternalLink record={page} className="group" locale={locale}>
        <div className="relative h-full bg-base-100 p-3 pt-6 md:p-6 lg:pt-8 group-hover:-translate-y-4 duration-300">
          {hero?.heroTitle && (
            <div
              className={`border-primary uppercase text-xs font-bold tracking-widest mb-6 pb-2.5 border-b block`}
            >
              {hero?.heroTitle}
            </div>
          )}
          {hero?.heroSubtitle && (
            <h2
              dangerouslySetInnerHTML={{ __html: hero?.heroSubtitle }}
              className="text-md uppercase max-w-prose mx-auto font-serif font-light mb-8 lg:text-lg text-neutral lg:pt-4 group-hover:underline group-hover:underline-offset-4"
            />
          )}
          {hero?.heroImage && (
            <div className="overflow-hidden">
              <DatoImage
                className="group-hover:scale-110 duration-500"
                data={hero?.heroImage.responsiveImage}
              />
            </div>
          )}
          <div className="bg-base-100 rounded-full border-base-200 border w-14 h-9 absolute bottom-12 right-12 group-hover:bg-neutral duration-300">
            <CustomIcon
              classes="w-[14px] h-[14px] bg-base-content absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 motion-safe:duration-200 group-hover:bg-base-100"
              fileName="arrow-right"
            />
          </div>
        </div>
      </InternalLink>
    </>
  );
};

export default SinglePage;
