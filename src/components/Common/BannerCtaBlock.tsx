import StructuredContent from "./StructuredContent";
import { Image as DatoImage } from "react-datocms";
import ButtonBlock from "./ButtonBlock";
import DynamicLink from "../Links/DynamicLink";
import { motion } from "framer-motion";

export default function BanneCtaBlock({ data, locale }) {
  const {
    displayOptions,
    bannerCtaImage,
    coverImage,
    label,
    title,
    text,
    link,
  } = data;

  const imageVariants = {
    offscreen: {
      bottom: "100%",
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
    onscreen: {
      bottom: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  const textVariants = {
    offscreen: {
      opacity: 0,
      translateY: 50,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    onscreen: {
      opacity: 100,
      translateY: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const containerClass =
    "group container px-6 mx-auto grid items-stretch xl:min-h-[780px]";

  function RenderContent({
    title,
    label,
    text,
    bannerCtaImage,
    displayOptions,
  }) {
    return (
      <div
        className={`${
          displayOptions === "text-right" ? "lg:flex-row-reverse" : ""
        } bg-base-100 h-full lg:flex xl:items-stretch`}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true, amount: 0.75 }}
          className="lg:w-1/3 grid gap-6 px-6 py-10 md:px-12 md:py-16"
        >
          <div className="xl:items-start xl:grid xl:gap-4">
            {label && (
              <div className="pr-12 uppercase text-xs font-bold tracking-widest pb-2.5 border-b border-primary inline-block">
                {label}
              </div>
            )}
            <h2 className="text-lg font-serif uppercase text-neutral md:text-xl xl:text-2xl pt-6">
              {title}
            </h2>
          </div>
          <div className="xl:items-end xl:grid xl:gap-0">
            <div className="text-sm opacity-80 md:text-base">
              <StructuredContent data={text} locale={locale} />
            </div>
            {link && (
              <div className="inline-block">
                <ButtonBlock label={link.label} type="underline" uppercase />
              </div>
            )}
          </div>
        </motion.div>
        {bannerCtaImage && (
          <div className="lg:w-2/3 relative aspect-square md:aspect-[2/1] lg:aspect-auto overflow-hidden">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={imageVariants}
              viewport={{ once: true, amount: 0.75 }}
              className={`absolute top-0 overflow-hidden w-full`}
            >
              <DatoImage
                data={bannerCtaImage.responsiveImage}
                objectFit="cover"
                layout="fill"
                className="group-hover:scale-110 duration-700"
              />
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  function RenderContentBanner({ title, label, text, coverImage }) {
    return (
      <div>
        <div className="items-center py-16 text-base-100 px-6 relative z-10 lg:py-28">
          {label && (
            <div className="px-6 uppercase text-xs font-bold tracking-widest pb-2.5 border-b border-base-100 inline-block text-center">
              {label}
            </div>
          )}
          <h2 className="text-lg px-12 font-serif uppercase md:text-xl py-16 max-w-[900px] mx-auto">
            {title}
          </h2>
          {text && (
            <h3 className="max-w-prose mx-auto px-6">
              <StructuredContent data={text} locale={locale} />
            </h3>
          )}
          {data.link && (
            <ButtonBlock
              label={link.label}
              type="underline"
              uppercase
              color="light"
            />
          )}
        </div>
        <div className="absolute inset-x-6 inset-y-0 z-[-1] bg-black group-hover:inset-0 group-hover:scale-110 duration-700 overflow-hidden">
          <DatoImage
            data={coverImage.responsiveImage}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            className="opacity-50 group-hover:scale-110 duration-700 "
          />
        </div>
      </div>
    );
  }

  switch (displayOptions) {
    case "text-center":
      return (
        <div className="py-6">
          {link ? (
            <div
              className={`group duration-700  py-10 xl:py-48 relative z-0 text-center`}
            >
              <DynamicLink className={``} link={link} locale={locale}>
                <RenderContentBanner
                  title={title}
                  label={label}
                  text={text}
                  coverImage={coverImage}
                />
              </DynamicLink>
            </div>
          ) : (
            <div
              className={`group duration-700 container mx-auto py-10 xl:py-48 relative z-0 text-center`}
            >
              <RenderContentBanner
                title={title}
                label={label}
                text={text}
                coverImage={coverImage}
              />
            </div>
          )}
        </div>
      );

    case "text-left":
      return (
        <div className="py-8">
          {link ? (
            <div className={containerClass}>
              <DynamicLink link={link} locale={locale} className={``}>
                <RenderContent
                  title={title}
                  label={label}
                  text={text}
                  bannerCtaImage={bannerCtaImage}
                  displayOptions={displayOptions}
                />
              </DynamicLink>
            </div>
          ) : (
            <div className={containerClass}>
              <RenderContent
                title={title}
                label={label}
                text={text}
                bannerCtaImage={bannerCtaImage}
                displayOptions={displayOptions}
              />
            </div>
          )}
        </div>
      );

    case "text-right":
      return (
        <div className="py-8">
          {link ? (
            <div className={containerClass}>
              <DynamicLink link={link} locale={locale} className={``}>
                <RenderContent
                  title={title}
                  label={label}
                  text={text}
                  bannerCtaImage={bannerCtaImage}
                  displayOptions={displayOptions}
                />
              </DynamicLink>
            </div>
          ) : (
            <div className={containerClass}>
              <RenderContent
                title={title}
                label={label}
                text={text}
                bannerCtaImage={bannerCtaImage}
                displayOptions={displayOptions}
              />
            </div>
          )}
        </div>
      );
  }
}
