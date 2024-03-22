"use client";
import QuoteBlock from "@/components/Blog/Post/StructuredTextBlocks/QuoteBlock";
import {
  isBlockquote,
  isHeading,
  isLink,
  isParagraph,
} from "datocms-structured-text-utils";
import {
  Image as DatoImage,
  StructuredText,
  renderNodeRule,
} from "react-datocms";
import Link from "next/link";
import {
  AttachmentsBlockRecord,
  GallerySectionRecord,
  ImageBlockRecord,
  PostQuery,
  PostRecord,
  SiteLocale,
  VideoSectionRecord,
} from "@/graphql/generated";
import { notFound } from "next/navigation";

import Highlighter from "@/components/Blocks/Highlighter";
import AttachmentsBlock from "@/components/Blog/AttachmentsBlock";
import Video from "@/components/Home/Video";
import GalleryBlock from "@/components/Blocks/GalleryBlock";

type Props = {
  data: PostQuery;
  locale: SiteLocale;
};

const PostPage = ({ data, locale }: Props) => {
  const { tags, title, abstract, blogImage } = data.post;
  if (!data.post) notFound();
  return (
    <section className="mt-32 pb-[120px]">
      <div className="container px-6 mx-auto xl:px-0 xl:pt-20">
        <div className="xl:grid-cols-12 xl:grid">
          <div className="mb-5 xl:col-span-2 xl:col-start-2">
            {tags.length > 0 &&
              tags
                .map((t) => (
                  <div className="uppercase text-primary-content/80" key={t.id}>
                    {t.tag}
                  </div>
                ))
                .map((element, index, array) => (
                  <>
                    {element}
                    {index !== array.length - 1 && ", "}
                  </>
                ))}
          </div>
          <div className="xl:col-span-7 xl:col-start-5">
            <h1 className="uppercase font-serif text-lg xl:pt-0 pt-10 md:text-xl xl:text-2xl">
              {title}
            </h1>
            {abstract && (
              <h2
                dangerouslySetInnerHTML={{ __html: abstract }}
                className="pt-4 md:text-md md:pt-6"
              />
            )}
          </div>
          <div className="aspect-square mt-8 xl:col-start-2 xl:col-span-10 relative md:aspect-[2/1] md:mt-20">
            <DatoImage
              className=""
              data={blogImage.responsiveImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="py-20 xl:w-10/12 xl:mx-auto">
          <StructuredText
            data={data.post.content as any}
            renderNode={Highlighter}
            renderBlock={({ record }: any) => {
              switch (record.__typename) {
                case "ImageBlockRecord":
                  const ImageBlockRecord = record as ImageBlockRecord;
                  return (
                    <div className="my-16 xl:my-32">
                      <DatoImage
                        data={ImageBlockRecord.imageAsset.responsiveImage}
                        objectPosition="50% 50%"
                        className="w-full h-auto"
                      />
                      {ImageBlockRecord.imageDescription && (
                        <div
                          className="text-sm mt-2 opacity-80"
                          dangerouslySetInnerHTML={{
                            __html: ImageBlockRecord.imageDescription,
                          }}
                        />
                      )}
                    </div>
                  );
                case "AttachmentsBlockRecord":
                  const attachmentsBlock = record as AttachmentsBlockRecord;
                  return (
                    <AttachmentsBlock
                      style=""
                      data={attachmentsBlock}
                      locale={locale}
                    />
                  );
                case "VideoSectionRecord":
                  const videoSectionRecord = record as VideoSectionRecord;
                  return (
                    <Video
                      videoHeader={videoSectionRecord.videoHeader}
                      videoSubheader={videoSectionRecord.videoSubheader}
                    />
                  );
                case "GallerySectionRecord": {
                  const gallerySection = record as GallerySectionRecord;
                  return <GalleryBlock data={gallerySection} locale={locale} />;
                }
                default:
                  return null;
              }
            }}
            renderLinkToRecord={({ record, children, transformedMeta }) => {
              switch (record.__typename) {
                case "PostRecord":
                  return (
                    <Link
                      {...transformedMeta}
                      href={`/${locale}/posts/${record.slug}`}
                      className="text-base font-medium leading-relaxed text-body-color underline sm:text-lg sm:leading-relaxed"
                    >
                      {children}
                    </Link>
                  );
                default:
                  return null;
              }
            }}
            renderInlineRecord={({ record }) => {
              switch (record.__typename) {
                case "PostRecord":
                  const PostRecord = record as PostRecord;
                  return (
                    <Link
                      key={PostRecord.id}
                      href={`/${locale}/posts/${record.slug}`}
                      className="underline"
                    >
                      {PostRecord.title}
                    </Link>
                  );
                default:
                  return null;
              }
            }}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                let Tag: any;
                Tag = `h${node.level}`;
                let classTitle: string;
                if (node.level == 2) {
                  classTitle =
                    "text-lg md:text-xl font-serif uppercase mb-6 xl:mb-10 xl:w-10/12 xl:mx-auto";
                } else
                  classTitle = "text-md mb-6 xl:mb-10 xl:w-10/12 xl:mx-auto";
                return (
                  <Tag className={classTitle} key={key}>
                    {children}
                  </Tag>
                );
              }),
              renderNodeRule(isParagraph, ({ children, key }) => {
                return (
                  <div className="xl:w-10/12 xl:mx-auto" key={key}>
                    {children}
                  </div>
                );
              }),
              renderNodeRule(isLink, ({ node, children, key }) => {
                const attributeObject =
                  node.meta?.reduce((acc: any, { id, value }) => {
                    acc[id] = value;
                    return acc;
                  }, {}) || {};

                return (
                  <a
                    className="text-base font-medium leading-relaxed text-body-color underline sm:text-lg sm:leading-relaxed"
                    href={node.url}
                    key={key}
                    {...attributeObject}
                  >
                    {children}
                  </a>
                );
              }),
              renderNodeRule(isBlockquote, ({ children, key }) => {
                return <QuoteBlock text={children} />;
              }),
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PostPage;
