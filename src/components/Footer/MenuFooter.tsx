import Image from "next/image";
import InternalLink from "../Links/InternalLink";
import { PageRecord, SiteLocale } from "@/graphql/generated";
import DynamicLink from "../Links/DynamicLink";

type Props = {
  data: any;
  locale: SiteLocale;
};

export default function MenuFooter({ data, locale }: Props) {
  const titleClass =
    "uppercase text-sm xl:text-base mb-2 hover:underline underline-offset-4";
  const itemClass = "text-sm xl:text-base hover:underline underline-offset-4";
  return (
    <ul className="">
      {data.map((p: PageRecord) => {
        return (
          <li key={p.id} className="my-2">
            <DynamicLink className=" " locale={locale} link={p}>
              <span className={data.label ? itemClass : titleClass}>
                {p.label}
              </span>
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  );
}
