import { StructuredText, renderNodeRule } from "react-datocms";
import { isHeading, isParagraph, isLink } from "datocms-structured-text-utils";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";

type StructuredContentProps = {
  locale: string;
  data: any;
  title?: string;
};

export default function StructuredContent({
  data,
  locale,
  title,
}: StructuredContentProps) {
  const getTextSizeForHeading = (nodeLevel: number) => {
    switch (nodeLevel) {
      case 1:
        return "font-bold mb-3";
      case 2:
        return "font-bold mb-3";
      case 3:
        return "font-bold mb-3";
      case 4:
        return "font-bold mb-3";
      case 5:
        return "font-bold mb-3";
      case 6:
        return "font-bold mb-3";
      default:
        "";
    }
  };
  return (
    <div>
      {title && <div>{title}</div>}
      <StructuredText
        data={data}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => {
            const Tag = `h${node.level}` as any;
            const textSize = getTextSizeForHeading(node.level);
            return (
              <Tag className={`${textSize}`} key={key}>
                {children}
              </Tag>
            );
          }),
          renderNodeRule(isParagraph, ({ node, children, key, ancestors }) => {
            return (
              <p className={`block mb-3`} key={key}>
                {children}
              </p>
            );
          }),
          renderNodeRule(isLink, ({ node, children, key }) => {
            return (
              <a
                className="underline"
                key={key}
                target="_blank"
                rel="noreferrer"
                title={node.url || "link"}
                href={node.url}
                aria-label={`${node.url || "link"} open in new window`}
              >
                {children}
              </a>
            );
          }),
        ]}
        // renderLinkToRecord={({ record, children }: any) => {
        //   switch (record.__typename) {
        //     case "InternalLinkRecord":
        //       return (
        //         <Link
        //           className="underline font-bold"
        //           href={resolveLink(record.item, locale)}
        //         >
        //           {children}
        //         </Link>
        //       );
        //     default:
        //       return null;
        //   }
        // }}
        // renderInlineRecord={({ record }: any) => {
        //   switch (record.__typename) {
        //     case "InternalLinkRecord":
        //       return (
        //         <Link
        //           className="underline font-bold"
        //           href={resolveLink(record.item, locale)}
        //         >
        //           {record.item.title}
        //         </Link>
        //       );
        //     default:
        //       return null;
        //   }
        // }}
        renderBlock={({ record }) => {
          if (!record) return null;
          const frame: any = record;
          switch (record.model) {
            default:
              return (
                <div dangerouslySetInnerHTML={{ __html: `${record.code}` }} />
              );
          }
        }}
      />
    </div>
  );
}
