"use client";
import { motion, Variants } from "framer-motion";
import { SRCImage } from "react-datocms";
import {
  SiteLocale,
  TeamBlockRecord,
  TeamMemberRecord,
} from "@/graphql/generated";

interface TeamBlockProps {
  content: TeamBlockRecord;
  locale: SiteLocale;
  colors: String;
}

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

export default function TeamBlock({ content, locale, colors }: TeamBlockProps) {
  const { title, subtitle, teamMembers } = content;
  return (
    <div className="container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants}
      >
        <div className="">
          {(title || subtitle) && (
            <div
              className={`w-full mx-auto text-center grid gap-6 pb-16 xl:pb-24`}
            >
              {title && (
                <h2
                  className={`${
                    colors.includes("neutral") ? "text-secondary-content" : ""
                  } prefix mb-6 mx-auto`}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <div
                  className="title mx-auto max-w-[1200px]"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
            </div>
          )}
          <div className="gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid">
            {teamMembers.map((tm: TeamMemberRecord) => (
              <div className="gap-6 grid" key={tm.id}>
                <div className="w-full bg-secondary text-secondary-content">
                  <div className="relative flex-none h-[300px]">
                    <SRCImage
                      data={tm.imageMember.responsiveImage}
                      className="!max-w-none w-full !h-full absolute inset-0 object-cover"
                    />
                  </div>
                  <div className="grid gap-2 xl:p-2 p-6">
                    <div className="title-small">{tm.nameMember}</div>
                    <div className="prefix">{tm.descriptionMember}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
