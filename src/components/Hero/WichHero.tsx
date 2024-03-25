"use client";

import { HeroSectionRecord, SiteLocale } from "@/graphql/generated";

import RightImageHero from "./RightImageHero";
import BackgroundImageHero from "./BackgroundImage";
import Carousel from "@/components/Blocks/Carousel";

type PropsWhichHero = {
  hero: HeroSectionRecord;
  locale: SiteLocale;
};

export default function WhichHero({ hero, locale }: PropsWhichHero) {
  switch (hero.displayOptions) {
    case "heroBg":
      return (
        <BackgroundImageHero
          heroTitle={hero.heroTitle}
          heroSubtitle={hero.heroSubtitle}
          image={hero.heroImage}
          link={hero.link}
          locale={locale}
        />
      );
    case "heroImageTxt":
      return (
        <RightImageHero
          heroTitle={hero.heroTitle}
          heroSubtitle={hero.heroSubtitle}
          image={hero.heroImage}
          link={hero.link}
          locale={locale}
        />
      );
    case "heroSlider":
      return <Carousel slides={hero.sliders} locale={locale} />;
  }
}
