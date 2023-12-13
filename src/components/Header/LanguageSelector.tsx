"use client";

import { SiteLocale } from "@/graphql/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {
  lng: SiteLocale;
  languages: SiteLocale[];
};

const LanguageSelector = ({ lng, languages }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const currentLocale = pathArray[1] as SiteLocale; //will be a SiteLocale because of the middleware redirect rules
  const defaultLocale = "it";
  const pathString = pathArray.splice(2, pathArray.length).join("/");

  return (
    <div className="relative">
      <div
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
        onBlur={() =>
          setTimeout(() => {
            setIsOpen(false);
          }, 100)
        }
        className="ml-4 inline-flex w-28 items-center overflow-hidden rounded-md bg-base-200 transition duration-100 hover:opacity-80 active:scale-95 active:bg-accent"
      >
        <button className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium   ">
          {currentLocale || "it"}
        </button>
      </div>

      <div
        className={
          "absolute end-0 z-10 ml-4 mt-1 w-28 rounded-md border border-base-100  bg-base-200 text-base-content shadow-lg" +
          (isOpen ? "" : " hidden")
        }
        role="menu"
      >
        {languages.map((locale) => {
          return (
            <div
              key={locale}
              className="inline-flex w-full cursor-pointer items-end justify-start rounded-lg text-sm font-medium bg-base-200 text-base-content "
            >
              <Link
                href={`${
                  locale !== defaultLocale ? "/" + locale : ""
                }/${pathString}`}
                className="block px-4 py-2 text-sm bg-base-200 text-base-content"
                role="menuitem"
              >
                <div className="inline-flex">{locale}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;

//if the current dir is /posts/ or /legal/
//if the current page has a slug
//try to fetch the slug in the new locale, if it doesn't return any, redirect the user to a 404
//if it does return one, redirect the user to it
