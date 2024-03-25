"use client";

import { HeroSectionModelLinkField, SiteLocale } from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import { Image as DatoImage } from "react-datocms";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import DynamicLink from "@/components/Links/DynamicLink";

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  image: any;
  link: Maybe<HeroSectionModelLinkField> | undefined;
  locale: SiteLocale;
};

const RightImageHero = ({
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
      className="w-full relative object-cover object-bottom"
    >
      <div className="relative bg-secondary pt-[120px] md:pt-[150px] lg:pt-[180px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12">
              <div className="mb-14 lg:mb-0">
                {heroTitle && (
                  <h1 className="mb-3 text-4xl font-bold text-secondary-content md:text-5xl lg:text-[40px] xl:text-5xl">
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  <div
                    dangerouslySetInnerHTML={{ __html: heroSubtitle }}
                    className="mb-9 max-w-[460px] text-base font-medium text-gray-3"
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
            <div className="w-full h-[400px] px-4 lg:w-7/12 relative">
              {image && image.responsiveImage && (
                <DatoImage
                  data={image.responsiveImage}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightImageHero;
