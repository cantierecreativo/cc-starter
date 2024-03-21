import CustomIcon from "@/components/Common/CustomIcon";
import {
  AttachmentRecord,
  AttachmentsBlockRecord,
  SiteLocale,
} from "@/graphql/generated";
import ExternalLink from "../Links/ExternalLink";
import { motion, Variants } from "framer-motion";

type PropsAttachmentsBlock = {
  data: AttachmentsBlockRecord;
  locale: SiteLocale;
  style: string;
};

const AttachmentsBlock = ({ data, style, locale }: PropsAttachmentsBlock) => {
  const { attachments, attachmentPrefix, attachmentText, attachmentTitle } =
    data;
  const bg =
    style === "bg-base-200 text-base-content"
      ? "bg-base-300"
      : style === ""
      ? "bg-base-300"
      : "bg-base-200";
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
      <div className="container standard-vertical-m">
        <div
          className={`py-16 xl:py-24 grid items-start gap-8 px-8 xl:px-20 ${bg}`}
        >
          {attachmentPrefix && <div className="prefix">{attachmentPrefix}</div>}
          {attachmentTitle && <h2 className="title">{attachmentTitle}</h2>}
          {attachmentText && (
            <h3
              className="text"
              dangerouslySetInnerHTML={{ __html: attachmentText }}
            />
          )}
          <div className="grid gap-3 pt-6 max-w-[460px] xl:mt-8 xl:gap-4">
            {attachments.map((a: AttachmentRecord) => (
              <ExternalLink
                key={a.id}
                url={a.file.url}
                title={a.title}
                locale={locale}
                className="group cursor-pointer"
              >
                <div className="bg-base-100 flex items-center gap-4 rounded-md border-primary-content border p-3 duration-300 group-hover:bg-secondary group-hover:text-base-100">
                  <CustomIcon
                    classes="bg-base-content md:w-[40px] md:h-[40px] w-[23px] h-[25px] group-hover:ml-1 motion-safe:duration-300 md:scale-125 group-hover:bg-base-100"
                    fileName="download"
                  />
                  <div className="opacity-70 text-sm md:text-base">
                    {a.title}
                  </div>
                </div>
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AttachmentsBlock;
