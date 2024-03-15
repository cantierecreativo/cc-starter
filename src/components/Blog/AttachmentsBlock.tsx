import CustomIcon from "@/components/Common/CustomIcon";
import {
  AttachmentRecord,
  AttachmentsBlockRecord,
  SiteLocale,
} from "@/graphql/generated";
import ExternalLink from "../Links/ExternalLink";

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
  return (
    <section className="container py-8 md:py-16 lg:py-28">
      <div
        className={`py-16 xl:py-24 px-8 xl:px-20 ${bg} xl:w-10/12 mx-auto container`}
      >
        {attachmentPrefix && (
          <div className="md:col-span-10 md:col-start-2 xl:col-span-3 xl:col-start-2">
            <div
              className={`uppercase text-xs font-bold tracking-widest mb-8 pb-2.5 border-b inline-block border-primary-content/20`}
            >
              {attachmentPrefix}
            </div>
          </div>
        )}
        {attachmentTitle && (
          <h2 className="uppercase font-serif text-md max-w-[460px] md:text-lg xl:text-xl xl:mb-3">
            {attachmentTitle}
          </h2>
        )}
        {attachmentText && (
          <h3
            className="text-sm pt-3 opacity-80 max-w-[460px] md:text-base xl:mb-3"
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
                <div className="opacity-70 text-sm md:text-base">{a.title}</div>
              </div>
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttachmentsBlock;
