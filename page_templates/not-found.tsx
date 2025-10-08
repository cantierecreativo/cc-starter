"use client";

import ButtonBlock from "@/components/Blocks/ButtonBlock";
import translate from "@/labels";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [locale, setLocale] = useState<string>("");

  useEffect(() => {
    const lang = () =>
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language || "en";
    if (lang().indexOf("it") !== -1) {
      setLocale("it");
    } else {
      setLocale("en");
    }
  }, []);

  return (
    <div className="py-12 bg-secondary text-secondary-content">
      <div className="container text-center grid gap-8">
        <div className="">{translate("404.text", locale)}</div>
        <h1 className="title">{translate("404.title", locale)} 🚩</h1>
        <Link href="/">
          <ButtonBlock label={translate("404.button", locale)} />
        </Link>
      </div>
    </div>
  );
}
