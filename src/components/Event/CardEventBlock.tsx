"use client";
import { SRCImage } from "react-datocms";
import InternalLink from "../Links/InternalLink";
import { EventRecord, SiteLocale } from "@/graphql/generated";
import translate from "@/labels";
import { getDate } from "@/lib/getDate";
import ButtonBlock from "@/components/Blocks/ButtonBlock";

type PropsCardEvent = {
  locale: SiteLocale;
  data: EventRecord;
  i: number;
  isSearchResult?: boolean;
};

const CardEventBlock = ({
  data,
  locale,
  i,
  isSearchResult = false,
}: PropsCardEvent) => {
  const { eventImage, title, tags, dateEndEvent, dateStartEvent } = data || {};
  return (
    <InternalLink className="group" record={data} locale={locale} title={title}>
      <div className="p-6 pb-2 bg-base-300 text-content duration-300 relative">
        <SRCImage data={eventImage.responsiveImage} />
        <div className="text-center py-6 xl:py-10 grid gap-6 xl:gap-8">
          <div className="font-serif uppercase">
            {getDate(dateStartEvent, dateEndEvent, locale)}
          </div>
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

export default CardEventBlock;
