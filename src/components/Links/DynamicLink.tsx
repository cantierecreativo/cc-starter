import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

export default function DynamicLink({
  link,
  className,
  children,
  locale,
}: any) {
  if (!link) return null;
  return link.__typename == "InternalLinkRecord" ? (
    <InternalLink
      className={`group ${className}`}
      record={link.page}
      title={link.label}
      locale={locale}
    >
      {children}
    </InternalLink>
  ) : (
    <ExternalLink
      className={`group ${className}`}
      url={link.url}
      title={link.label}
      locale={locale}
    >
      {children}
    </ExternalLink>
  );
}
