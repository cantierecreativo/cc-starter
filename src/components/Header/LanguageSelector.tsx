"use client";

import { SiteLocale } from "@/graphql/generated";
import Link from "next/link";
import React from "react";
import translate from "@/labels";

type Props = {
  locale: SiteLocale;
  hrefs?: any;
};

const LanguageSelector = ({ locale, hrefs }: Props) => {
  return (
    <div className="flex gap-2">
      {Object.entries(hrefs).map(([locale, url]) => {
        if (locale !== locale) {
          return (
            <div key={locale}>
              <Link href={url} className="" role="menuitem">
                <div className="uppercase">
                  {/* {translate("locale", locale).substring(0, 3)} */}
                  {translate("locale", locale)}
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default LanguageSelector;
