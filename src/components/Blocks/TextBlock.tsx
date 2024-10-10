"use client";
import { motion, Variants } from "framer-motion";
import StructuredContent from "../Layout/StructuredContent";
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
    <div className="flex justify-center">
      <div
        className={`container ${
          displayOptions === "right" ? "justify-end" : ""
        } inline-block w-auto text-${displayOptions}`}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          {label && (
            <div
              className={displayOptions === "right" ? "flex justify-end" : ""}
            >
              <div
                className={`${
                  displayOptions === "center" ? "mx-auto" : ""
                } prefix mb-8`}
              >
                {label}
              </div>
            </div>
          )}
          <h2
            className="title inline-block w-full mb-8"
            dangerouslySetInnerHTML={{ __html: mainTitle }}
          />
          {mainText && (
            <div
              className={`${
                displayOptions === "right" ? "flex justify-end" : ""
              } inline-block w-auto mb-8`}
            >
              <div
                className={`${
                  displayOptions === "center" ? "mx-auto" : ""
                } text`}
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
        </motion.div>
      </div>
    </div>
  );
}
