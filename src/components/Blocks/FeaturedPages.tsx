import { PageRecord, SiteLocale } from "@/graphql/generated";
import SectionTitle from "@/components/Blocks/SectionTitle";
import { Maybe } from "graphql/jsutils/Maybe";
import { motion, Variants } from "framer-motion";
import CardPageBlock from "./CardPageBlock";

type Props = {
  title?: string;
  subtitle?: Maybe<string>;
  locale: SiteLocale;
  pages: PageRecord[];
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

const titleClass = "title";

const FeaturedPages = ({ title, subtitle, pages, locale }: Props) => {
  return (
    <div className="grid gap-6 container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants}
        className="grid gap-6"
      >
        {title && (
          <h2
            className={titleClass}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <div className="" dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={variants}
        className="md:grid-cols-2 lg:grid-cols-3 grid gap-6"
      >
        {pages?.map((p: PageRecord, i: number) => (
          <CardPageBlock i={i} key={p.id} data={p} locale={locale} />
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedPages;
