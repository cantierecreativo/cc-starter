"use client";
import { Image as DatoImage } from "react-datocms";
import ButtonBlock from "./ButtonBlock";
import translate from "@/labels";
import InternalLink from "../Links/InternalLink";
import { PostRecord, SiteLocale } from "@/graphql/generated";

type PropsCardBlog = {
  locale: SiteLocale;
  data: PostRecord;
  i: number;
};

const CardBlogBlock = ({ data, locale, i }: PropsCardBlog) => {
  const { blogImage, title, tags, blogImageHover } = data;

  return (
    <InternalLink className="group" record={data} locale={locale} title={title}>
      <div className="p-6 pb-2 bg-base-300 text-content duration-300 relative">
        <DatoImage data={blogImage.responsiveImage} />
        {blogImageHover && (
          <div className="absolute shadow-lg top-6 left-6 right-6 group-hover:opacity-100 opacity-0 duration-300">
            <DatoImage data={blogImageHover.responsiveImage} />
          </div>
        )}
        <div className="text-center py-6 xl:py-10 grid gap-6 xl:gap-8">
          {tags?.length > 0 && <div className="prefix">{tags[0].tag}</div>}
          <h2 className="title-small">{title}</h2>
          <div className="inline-block">
            <ButtonBlock
              label={translate("read", locale)}
              type="underline"
              uppercase={true}
            />
          </div>
        </div>
      </div>
    </InternalLink>
  );
};

export default CardBlogBlock;
