import {
  HeroSectionModelLinkField,
  ImageAltTitleFileField,
  SiteLocale,
  VideoField,
  VideoFileField,
} from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import { SRCImage } from "react-datocms";
import { motion } from "framer-motion";
import DynamicLink from "@/components/Links/DynamicLink";
import ButtonBlock from "@/components/Blocks/ButtonBlock";
import BackgroundVideo from "next-video/background-video";

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  video: Maybe<VideoFileField> | undefined;
  link: Maybe<HeroSectionModelLinkField> | undefined;
  locale: SiteLocale;
};

const BackgroundImageHero = ({
  heroTitle,
  heroSubtitle,
  video,
  link,
  locale,
}: Props) => {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: "70vh" }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="w-full relative h-[70vh] xl:h-[600px] 2xl:h-[700px] 3xl:h-[900px]"
    >
      <BackgroundVideo src={video.url} className="w-full h-full">
        <div className="container">
          <div className="w-full px-4">
            <div className="grid gap-6 mx-auto lg:mx-0 max-w-[570px] lg:p-12 lg:py-16 text-center md:text-left bg-primary/80 p-8 text-base-100 xl:pb-20">
              {heroTitle && <h1 className="title">{heroTitle}</h1>}
              {heroSubtitle && (
                <h2
                  dangerouslySetInnerHTML={{ __html: heroSubtitle }}
                  className=""
                />
              )}
              {link && (
                <DynamicLink className={`group`} link={link} locale={locale}>
                  <ButtonBlock label={link.label} />
                </DynamicLink>
              )}
            </div>
          </div>
        </div>
      </BackgroundVideo>
    </motion.div>
  );
};

export default BackgroundImageHero;
