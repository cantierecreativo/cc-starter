import { ContactTextBlockRecord, SiteLocale } from "@/graphql/generated";
import { motion, Variants } from "framer-motion";

type PropsContactTextBlock = {
  data: ContactTextBlockRecord;
  locale: SiteLocale;
};

const ContactTextBlock = ({ data, locale }: PropsContactTextBlock) => {
  const { prefix, titleContactBlock, textContactBlock, blocks } = data;
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
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      <div
        className={`container px-6 xl:px-0 md:grid md:grid-cols-12 mx-auto md:py-20 xl:py-36 py-12`}
      >
        {prefix && (
          <div className="md:col-span-10 md:col-start-2 xl:col-span-3 xl:col-start-2">
            <div
              className={`uppercase text-xs font-bold tracking-widest mb-8 pb-2.5 border-b inline-block border-primary-content/20`}
            >
              {prefix}
            </div>
          </div>
        )}
        {titleContactBlock && (
          <h2
            className="text-lg md:text-xl uppercase max-w-prose font-serif font-light mb-4 md:pb-2 md:pt-4 xl:py-8 lg:text-2xl md:col-span-10 md:col-start-2 xl:col-span-7 xl:col-start-5 xl:pt-0"
            dangerouslySetInnerHTML={{ __html: titleContactBlock }}
          />
        )}
        {titleContactBlock && (
          <h3
            className={`py-3 xl:col-span-7 xl:col-start-5 text-md max-w-prose md:col-span-10 md:col-start-2 xl:text-md xl:pt-0`}
            dangerouslySetInnerHTML={{ __html: titleContactBlock }}
          />
        )}
        {blocks.length > 0 && (
          <div className="grid gap-10 py-6 md:col-span-10 md:col-start-2 md:grid-cols-2 md:items-start md:mt-16 xl:col-span-7 xl:col-start-5 xl:gap-16">
            {blocks.map((b) => (
              <div className="grid gap-6" key={b.id}>
                <strong dangerouslySetInnerHTML={{ __html: b.titleSimple }} />
                <div
                  className="grid gap-2"
                  dangerouslySetInnerHTML={{ __html: b.textSimple }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactTextBlock;
