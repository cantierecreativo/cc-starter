import {
  HeroSectionModelLinkField,
  ImageAltTitleFileField,
  SiteLocale,
} from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import { Image as DatoImage } from "react-datocms";
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
      className="w-full relative object-cover object-bottom bg-black"
    >
      <DatoImage
        data={image?.responsiveImage}
        className="opacity-80 object-cover object-center absolute inset-0 w-full h-full"
        priority={true}
      />
      <div className="relative z-0 flex items-center h-full mt-14 md:mt-24 lg:mt-28">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[666px] text-center">
                {heroTitle && (
                  <h1 className="mb-5 text-2xl font-bold capitalize text-base-100 xl:text-5xl">
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  <div
                    dangerouslySetInnerHTML={{ __html: heroSubtitle }}
                    className="mb-9 text-base font-medium text-body-color dark:text-dark-6 md:text-lg text-base-100"
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
