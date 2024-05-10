"use client";
import { motion, Variants } from "framer-motion";
import StructuredContent from "./StructuredContent";
import ButtonBlock from "./ButtonBlock";
import DynamicLink from "../Links/DynamicLink";

export default function TextBlock({ data, locale }) {
  const { displayOptions, label, mainTitle, mainText, link } = data;

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
        className={`container grid gap-8 ${
          displayOptions === "right" ? "justify-end" : ""
        } standard-vertical-m text-${displayOptions}`}
      >
        {label && (
          <div className={displayOptions === "right" ? "flex justify-end" : ""}>
            <div
              className={`${
                displayOptions === "center" ? "mx-auto" : ""
              } prefix`}
            >
              {label}
            </div>
          </div>
        )}
        <h2 className="title" dangerouslySetInnerHTML={{ __html: mainTitle }} />
        {mainText && (
          <div
            className={`${
              displayOptions === "right" ? "flex justify-end" : ""
            } `}
          >
            <div
              className={`${displayOptions === "center" ? "mx-auto" : ""} text`}
            >
              <StructuredContent data={mainText} locale={locale} />
            </div>
          </div>
        )}
        {link && (
          <DynamicLink link={link} locale={locale} className={`block group`}>
            <ButtonBlock label={link.label} />
          </DynamicLink>
        )}
      </div>
    </motion.div>
  );
}
