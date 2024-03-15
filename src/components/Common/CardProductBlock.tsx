"use client";
import { Image as DatoImage } from "react-datocms";
import InternalLink from "../Links/InternalLink";
import { ProductRecord, SiteLocale } from "@/graphql/generated";

type PropsCardPost = {
  locale: SiteLocale;
  data: ProductRecord;
  i: number;
};

const CardProductBlock = ({ data, locale, i }: PropsCardPost) => {
  const { productImage, title, abstract } = data;
  return (
    <div className={`p-6 pb-2 bg-neutral-content duration-300 relative xl:p-8`}>
        <DatoImage data={productImage.responsiveImage} className="!max-w-full"/>
      <div className="py-4 md:py-8 xl:py-10 grid gap-3 xl:gap-8">
        <h2 className="font-bold md:text-md group-hover:underline group-hover:underline-offset-4">
          {title}
        </h2>
        {abstract && (
          <h3
            dangerouslySetInnerHTML={{ __html: abstract }}
            className="text-sm opacity-70 md:text-base xl:text-md"
          />
        )}
      </div>
    </div>
  );
};

export default CardProductBlock;
