"use client";
import { motion, Variants } from "framer-motion";
import StructuredContent from "./StructuredContent";
import ButtonBlock from "./ButtonBlock";
import DynamicLink from "../Links/DynamicLink";

export default function TextBlock({ data, locale }) {
  const { displayOptions, label, mainTitle, mainText, link } = data;

  const displayContainerClass = {
    "text-center": "text-center lg:max-w-[2/3] text-balance",
    "title-left-text-right": "text-left",
  };
  const displayTextClass = {
    "text-center": "md:col-span-10 md:col-start-2",
    "title-left-text-right":
      "md:col-span-7 md:col-start-5 xl:col-start-6 xl:col-span-6",
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
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      <div
        className={`container px-6 xl:px-0 md:grid py-20 lg:py-28 xl:py-36 md:grid-cols-12 mx-auto ${displayContainerClass[displayOptions]}`}
      >
        {label && (
          <div className="md:col-span-10 md:col-start-2">
            <div
              className={`${
                displayOptions === "text-center" ? "px-6" : "pr-12"
              } uppercase text-xs font-bold tracking-widest mb-8 pb-2.5 border-b inline-block border-primary-content/20`}
            >
              {label}
            </div>
          </div>
        )}
        <h2
          className="text-md uppercase max-w-prose font-serif font-light mb-4 md:text-lg md:pb-2 md:pt-4 xl:py-8 lg:text-2xl md:col-span-10 md:col-start-2"
          dangerouslySetInnerHTML={{ __html: mainTitle }}
        />
        {mainText && (
          <h3
            className={`py-3 lg:text-md max-w-prose mx-auto ${displayTextClass[displayOptions]}`}
          >
            <StructuredContent data={mainText} locale={locale} />
          </h3>
        )}
        {link && (
          <DynamicLink
            link={link}
            locale={locale}
            className={`block md:mt-6 ${displayTextClass[displayOptions]}`}
          >
            <ButtonBlock label={link.label} type="underline" />
          </DynamicLink>
        )}
      </div>
    </motion.div>
  );
}
