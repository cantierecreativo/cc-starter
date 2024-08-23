"use client";
import { SRCImage } from "react-datocms";
import { PageRecord, SiteLocale } from "@/graphql/generated";
import InternalLink from "../Links/InternalLink";
import { motion, Variants } from "framer-motion";

type PropsCardPost = {
  locale: SiteLocale;
  data: PageRecord;
  i: number;
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const CardPageBlock = ({ data, locale, i }: PropsCardPost) => {
  const { previewImage, label, abstract } = data;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 * i }}
      variants={variants}
    >
      <InternalLink record={data} locale={locale} title={label}>
        <div className="group md:flex">
          <SRCImage
            data={previewImage.responsiveImage}
            className="!max-w-full md:!h-full md:object-cover"
          />
          <div className="p-5 md:p-10 duration-300 md:w-[70%]">
            <div className="grid gap-3">
              <h2 className="title-small">{label}</h2>
              {abstract && (
                <h3
                  dangerouslySetInnerHTML={{ __html: abstract }}
                  className="text"
                />
              )}
            </div>
          </div>
        </div>
      </InternalLink>
    </motion.div>
  );
};

export default CardPageBlock;
