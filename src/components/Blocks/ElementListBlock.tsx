import {
  ElementsListRecord,
  PostRecord,
  ProductRecord,
  SiteLocale,
} from "@/graphql/generated";
import { motion, Variants } from "framer-motion";
import CardProductBlock from "./CardProductBlock";
import CardBlogBlock from "./CardBlogBlock";

type PropsElementListBlock = {
  data: ElementsListRecord;
  locale: SiteLocale;
};

const ElementListBlock = ({ data, locale }: PropsElementListBlock) => {
  const { itemsPrefix, itemsTitle, itemsText, elements } = data;
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
        id="targetElement"
        className="grid gap-6 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:gap-10 px-6 xl:px-0 py-6 xl:py-24 xl:w-10/12 mx-auto container"
      >
        <div className="md:col-span-2 lg:col-span-3 text-center mb-8">
          {itemsPrefix && (
            <div className="">
              <div
                className={`uppercase text-xs font-bold tracking-widest mb-8 pb-2.5 border-b inline-block border-primary-content/20`}
              >
                {itemsPrefix}
              </div>
            </div>
          )}
          <h2
            className="text-md uppercase max-w-prose mx-auto font-serif font-light mb-4 md:text-lg md:pb-2 md:pt-4 xl:py-8 lg:text-2xl md:col-span-10 md:col-start-2"
            dangerouslySetInnerHTML={{ __html: itemsTitle }}
          />
          {itemsText && (
            <h3
              dangerouslySetInnerHTML={{ __html: itemsText }}
              className={`py-3 lg:text-md max-w-prose mx-auto`}
            />
          )}
        </div>

        {elements.map((item, i: number) =>
          item._modelApiKey === "product" ? (
            <CardProductBlock
              key={item.id}
              data={item as ProductRecord}
              locale={locale}
              i={i}
            />
          ) : (
            <CardBlogBlock
              key={item.id}
              data={item as PostRecord}
              locale={locale}
              i={i}
            />
          )
        )}
      </div>
    </motion.div>
  );
};

export default ElementListBlock;
