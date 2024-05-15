"use client";

import { SiteLocale } from "@/graphql/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import translate from "@/labels";
import CustomIcon from "../Blocks/CustomIcon";

type Props = {
  lng: SiteLocale;
  languages: SiteLocale[];
  sticky: Boolean;
  navbarOpen: Boolean;
  isDropdownOpen: Boolean;
};

const LanguageSelector = ({
  lng,
  languages,
  sticky,
  navbarOpen,
  isDropdownOpen,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const currentLocale = pathArray[1] as SiteLocale; //will be a SiteLocale because of the middleware redirect rules
  const defaultLocale = "it";
  const pathString = pathArray.splice(2, pathArray.length).join("/");
  return (
    <div className="flex gap-2 px-8">
      {languages.map((locale) => {
        if (locale !== lng)
          return (
            <div key={locale}>
              <Link
                href={`${
                  locale !== defaultLocale ? "/" + locale : ""
                }/${pathString}`}
                className="block px-3 py-2 text-xs font-bold tracking-widest bg-base-200 text-base-content"
                role="menuitem"
              >
                <div className="inline-flex uppercase">
                  {translate("locale", locale).substring(0, 3)}
                </div>
              </Link>
            </div>
          );
      })}
    </div>
  );
};

export default LanguageSelector;
