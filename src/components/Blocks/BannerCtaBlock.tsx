import StructuredContent from "./StructuredContent";
import { Image as DatoImage, SRCImage } from "react-datocms";
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

  const containerClass = "group container grid items-start";

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
        } bg-base-100 h-full lg:flex xl:items-stretch standard-vertical-m`}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true, amount: 0.75 }}
          className="lg:w-1/2 grid gap-6 py-10 md:px-12 md:py-16"
        >
          <div className="grid gap-4">
            {label && <div className="label">{label}</div>}
            <h2 className="title">{title}</h2>
            <div className="text">
              <StructuredContent data={text} locale={locale} />
            </div>
            {link && (
              <div className="inline-block">
                <ButtonBlock label={"Vai"} />
              </div>
            )}
          </div>
        </motion.div>
        {bannerCtaImage && (
          <div className="lg:w-1/2 relative aspect-square md:aspect-[2/1] lg:aspect-auto overflow-hidden">
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
        <div className="relative z-10 py-20 lg:py-[100px] xl:py-[120px] overflow-hidden">
          <span className="absolute left-0 top-0 -z-10 h-full w-full bg-black/80"></span>
          <SRCImage
            data={coverImage.responsiveImage}
            className="object-cover w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="container relative z-20">
            <div className="mx-auto max-w-[575px] text-center grid gap-8 text-base-100">
              {label && <div className="label mx-auto">{label}</div>}
              <h2 className="title">{title}</h2>
              {text && (
                <h3 className="text">
                  <StructuredContent data={text} locale={locale} />
                </h3>
              )}
              {data.link && (
                <div className="inline-block">
                  <ButtonBlock label={"Vai"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  switch (displayOptions) {
    case "text-center":
      return (
        <div className="">
          {link ? (
            <div
              className={`group duration-700 my-10 relative z-0 text-center`}
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

    default:
      return (
        <div className="">
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
