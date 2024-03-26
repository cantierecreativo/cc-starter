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
    case "hero_bg":
      return (
        <BackgroundImageHero
          heroTitle={hero.heroTitle}
          heroSubtitle={hero.heroSubtitle}
          image={hero.heroImage}
          link={hero.link}
          locale={locale}
        />
      );
    case "hero_image_txt":
      return (
        <RightImageHero
          heroTitle={hero.heroTitle}
          heroSubtitle={hero.heroSubtitle}
          image={hero.heroImage}
          link={hero.link}
          locale={locale}
        />
      );
    case "hero_slider":
      return <Carousel slides={hero.sliders} locale={locale} />;
  }
}
