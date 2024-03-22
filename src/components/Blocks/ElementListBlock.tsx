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
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 standard-vertical-m container"
      >
        <div className="grid gap-8 md:col-span-2 lg:col-span-3 mb-12">
          {itemsPrefix && <div className="prefix mx-auto">{itemsPrefix}</div>}
          <h2
            className="title mx-auto"
            dangerouslySetInnerHTML={{ __html: itemsTitle }}
          />
          {itemsText && (
            <h3
              dangerouslySetInnerHTML={{ __html: itemsText }}
              className={`text mx-auto`}
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
