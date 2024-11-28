"use client";

import { SiteLocale } from "@/graphql/generated";
import Link from "next/link";
import React from "react";
import translate from "@/labels";

type Props = {
  lng: SiteLocale;
  languages: SiteLocale[];
  sticky: Boolean;
  navbarOpen: Boolean;
  isDropdownOpen: Boolean;
  hrefs?: any;
};

const LanguageSelector = ({ lng, languages, hrefs }: Props) => {
  return (
    <div className="flex gap-2">
      {languages.map((locale) => {
        if (locale !== lng) {
          const fallbackLocale: string = locale == "it" ? "/" : `/${locale}`;
          return (
            <div key={locale}>
              <Link
                href={hrefs[locale] || fallbackLocale}
                className="block px-3 py-2 text-xs font-bold tracking-widest bg-base-200 text-base-content"
                role="menuitem"
              >
                <div className="inline-flex uppercase">
                  {translate("locale", locale).substring(0, 3)}
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
