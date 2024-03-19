"use client";

import { HeroSectionRecord } from "@/graphql/generated";

import GradientHero from "./GradientHero";
import RightImageHero from "./RightImageHero";
import BackgroundImageHero from "./BackgroundImage";
import SplitImage from "./SplitImage";

export default function WhichHero({ hero }) {
  const heroSectionRecord = hero as HeroSectionRecord;
  switch (heroSectionRecord.displayOptions) {
    case "gradient":
      return (
        <GradientHero
          heroTitle={heroSectionRecord.heroTitle}
          heroSubtitle={heroSectionRecord.heroSubtitle}
          buttons={[]}
        />
      );
    case "right_image":
      return (
        <RightImageHero
          heroTitle={heroSectionRecord.heroTitle}
          heroSubtitle={heroSectionRecord.heroSubtitle}
          buttons={[]}
          image={heroSectionRecord.heroImage}
        />
      );
    case "background_image":
      return (
        <BackgroundImageHero
          heroTitle={heroSectionRecord.heroTitle}
          heroSubtitle={heroSectionRecord.heroSubtitle}
          buttons={[]}
          image={heroSectionRecord.heroImage}
        />
      );
    case "split_image":
      return (
        <SplitImage
          heroTitle={heroSectionRecord.heroTitle}
          heroSubtitle={heroSectionRecord.heroSubtitle}
          buttons={[]}
          image={heroSectionRecord.heroImage}
        />
      );
    // default:
    //   return (
    //     <Hero
    //       heroTitle={heroSectionRecord.heroTitle}
    //       heroSubtitle={heroSectionRecord.heroSubtitle}
    //       buttons={heroSectionRecord.buttons}
    //     />
    //   );
  }
}
