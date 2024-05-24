import {
  HeroSectionModelLinkField,
  ImageAltTitleFileField,
  SiteLocale,
} from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import { SRCImage } from "react-datocms";
import { motion } from "framer-motion";
import DynamicLink from "@/components/Links/DynamicLink";

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  image: Maybe<ImageAltTitleFileField> | undefined;
  link: Maybe<HeroSectionModelLinkField> | undefined;
  locale: SiteLocale;
};

const BackgroundImageHero = ({
  heroTitle,
  heroSubtitle,
  image,
  link,
  locale,
}: Props) => {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: "90vh" }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="w-full relative object-cover object-bottom h-[70vh] xl:h-[600px] 2xl:h-[700px] 3xl:h-[900px]"
    >
      <SRCImage
        data={image?.responsiveImage}
        className="object-cover object-center absolute inset-0 !w-full !h-full !max-w-none"
        priority={true}
      />
      <div className="relative z-0 flex items-center h-full mt-14 md:mt-24 lg:mt-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto lg:mx-0 max-w-[570px] lg:p-12 lg:py-16 text-center md:text-left font-semibold bg-primary/80 p-8 rounded-3xl text-base-100 xl:pb-20">
                {heroTitle && (
                  <h1 className="mb-3 lg:mb-6 text-base font-medium lg:text-md">
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  <h2
                    dangerouslySetInnerHTML={{ __html: heroSubtitle }}
                    className="text-2xl lg:text-4xl font-semibold md:text-lg text-base-100"
                  />
                )}
                {link && (
                  <DynamicLink
                    className={`inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md bg-primary px-7 hover:bg-blue-dark`}
                    link={link}
                    locale={locale}
                  >
                    {link.label}
                  </DynamicLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundImageHero;
