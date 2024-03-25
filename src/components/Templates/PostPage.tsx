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
import AttachmentsBlock from "@/components/Blocks/AttachmentsBlock";
import Video from "@/components/Video";
import GalleryBlock from "@/components/Blocks/GalleryBlock";
import ImageBlock from "@/components/Blocks/ImageBlock";

type Props = {
  data: PostQuery;
  locale: SiteLocale;
};

const PostPage = ({ data, locale }: Props) => {
  const { tags, title, abstract, blogImage } = data.post;
  if (!data.post) notFound();
  return (
    <section className="">
      <div className="">
        <div className="standard-vertical-m container">
          <div className="mb-5 xl:col-span-2 xl:col-start-2">
            {tags.length > 0 &&
              tags
                .map((t) => (
                  <div className="prefix" key={t.id}>
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
          <h1 className="title">{title}</h1>
          {abstract && (
            <h2
              dangerouslySetInnerHTML={{ __html: abstract }}
              className="pt-4 md:text-md md:pt-6"
            />
          )}
          <div className="aspect-square mt-8 xl:col-start-2 xl:col-span-10 relative md:aspect-[2/1] md:mt-20">
            <DatoImage
              className=""
              data={blogImage.responsiveImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="formatted container">
          <StructuredText
            data={data.post.content as any}
            renderNode={Highlighter}
            renderBlock={({ record }: any) => {
              switch (record.__typename) {
                case "ImageBlockRecord":
                  const ImageBlockRecord = record as ImageBlockRecord;
                  return (
                    <div key={record.id} className="unwrapped">
                      <ImageBlock data={ImageBlockRecord} locale={locale} />
                    </div>
                  );

                case "AttachmentsBlockRecord":
                  const attachmentsBlock = record as AttachmentsBlockRecord;
                  return (
                    <div key={record.id} className="unwrapped">
                      <AttachmentsBlock
                        style=""
                        data={attachmentsBlock}
                        locale={locale}
                      />
                    </div>
                  );
                case "VideoSectionRecord":
                  const videoSectionRecord = record as VideoSectionRecord;
                  return (
                    <div key={record.id} className="unwrapped">
                      <Video
                        key={videoSectionRecord.id}
                        videoHeader={videoSectionRecord.videoHeader}
                        videoSubheader={videoSectionRecord.videoSubheader}
                        externalVideo={videoSectionRecord.externalVideo}
                        internalVideo={videoSectionRecord.internalVideo}
                      />
                    </div>
                  );
                case "GallerySectionRecord": {
                  const gallerySection = record as GallerySectionRecord;

                  return (
                    <div key={record.id} className="unwrapped">
                      <GalleryBlock data={gallerySection} locale={locale} />
                    </div>
                  );
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
                  classTitle = "title mb-4 w-10/12 max-w-prose";
                } else classTitle = "title-small mb-4 w-10/12 max-w-prose";
                return (
                  <Tag className={classTitle} key={key}>
                    {children}
                  </Tag>
                );
              }),
              renderNodeRule(isParagraph, ({ children, key }) => {
                return (
                  <div className="max-w-prose" key={key}>
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
