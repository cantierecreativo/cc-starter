import Brands from "@/components/Brands";
import Features from "@/components/Blocks/FeaturesList";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import CompactTeam from "@/components/Blocks/CompactTeam";
import ExpandedTeam from "@/components/Blocks/ExpandedTeam";
import FAQAccordion from "@/components/Blocks/FAQAccordion";
import StatsSection from "@/components/Blocks/StatsSection";
import AboutIntro from "@/components/Blocks/AboutIntro";
import {
  AboutIntroRecord,
  AttachmentsBlockRecord,
  BannerCtaRecord,
  BlogListRecord,
  BrandSectionRecord,
  ChangelogSectionRecord,
  ElementsListRecord,
  FaqSectionRecord,
  FeatureListSectionRecord,
  FeaturedPagesSectionRecord,
  GallerySectionRecord,
  ImageBlockRecord,
  MultipleCardRecord,
  PricingSectionRecord,
  RedirectSectionRecord,
  ReviewSectionRecord,
  SiteLocale,
  StatsSectionRecord,
  TeamSectionRecord,
  TextBlockRecord,
  VideoSectionRecord,
} from "@/graphql/generated";
import { redirect } from "next/navigation";
import Carrousel from "@/components/Testimonials/Carrousel";
import ModernCarrousel from "@/components/Testimonials/ModernCarrousel";
import MinimalCarrousel from "@/components/Testimonials/MinimalCarrousel";
import MinimalReviewCards from "@/components/Testimonials/MinimalReviewCards";
import BrandCards from "@/components/Brands/BrandCards";
import Changelog from "@/components/Changelog";
import ImageBlock from "@/components/Blocks/ImageBlock";
import GalleryBlock from "@/components/Blocks/GalleryBlock";
import BannerCtaBlock from "@/components/Blocks/BannerCtaBlock";
import TextBlock from "@/components/Blocks/TextBlock";
import MultipleCardBlock from "@/components/Blocks/MultipleCardBlock";
import BlogListBlock from "@/components/Blocks/BlogListBlock";
import StandardFeaturedPages from "@/components/FeaturedPages/StandardFeaturedPages";
import ProductDetailsBlock from "@/components/Blocks/ProductDetailsBlock";
import FormBlock from "@/components/Blocks/FormBlock";
import ContactTextBlock from "@/components/Blocks/ContactTextBlock";
import ElementListBlock from "@/components/Blocks/ElementListBlock";
import AttachmentsBlock from "@/components/Blocks/AttachmentsBlock";

type Props = {
  section: any;
  locale: SiteLocale;
};

export default function Sections({ section, locale }: Props) {
  return section?.blocks?.map((b: any) => {
    switch (b._modelApiKey) {
      case "elements_list": {
        const elementsListRecord = b as ElementsListRecord;
        return (
          <ElementListBlock
            key={b.id}
            data={elementsListRecord}
            locale={locale}
          />
        );
      }
      case "attachments_block": {
        const attachmentsRecord = b as AttachmentsBlockRecord;
        return (
          <AttachmentsBlock
            key={b.id}
            style={section.style}
            data={attachmentsRecord}
            locale={locale}
          />
        );
      }
      case "contact_text_block": {
        return <ContactTextBlock key={b.id} data={b} locale={locale} />;
      }
      case "form_block": {
        return <FormBlock key={b.id} data={b} locale={locale} />;
      }
      case "product_detail": {
        return <ProductDetailsBlock key={b.id} data={b} locale={locale} />;
      }
      case "feature_list_section": {
        const featureListSectionRecord = b as FeatureListSectionRecord;
        return (
          <Features
            key={b.id}
            features={featureListSectionRecord.feature}
            featuresHeader={featureListSectionRecord.featuresHeader}
            featuresSubheader={featureListSectionRecord.featuresSubheader}
          />
        );
      }
      case "multiple_card": {
        const multipleCardSection = b as MultipleCardRecord;
        return (
          <MultipleCardBlock
            key={b.id}
            data={multipleCardSection}
            locale={locale}
          />
        );
      }
      case "blog_list": {
        const blogListSection = b as BlogListRecord;
        return (
          <BlogListBlock key={b.id} data={blogListSection} locale={locale} />
        );
      }
      case "gallery_section": {
        const gallerySection = b as GallerySectionRecord;
        return (
          <GalleryBlock key={b.id} data={gallerySection} locale={locale} />
        );
      }
      case "image_block": {
        const imageBlock = b as ImageBlockRecord;
        return <ImageBlock key={b.id} data={imageBlock} locale={locale} />;
      }
      case "banner_cta": {
        const bannerCtaSection = b as BannerCtaRecord;
        return (
          <BannerCtaBlock key={b.id} data={bannerCtaSection} locale={locale} />
        );
      }
      case "text_block": {
        const textBlockSection = b as TextBlockRecord;
        return <TextBlock key={b.id} data={textBlockSection} locale={locale} />;
      }
      case "changelog_section":
        const changeLogSection = b as ChangelogSectionRecord;
        return (
          <Changelog
            key={b.id}
            title={changeLogSection.title}
            subtitle={changeLogSection.subtitle}
            featuredChangeLogs={changeLogSection.featuredVersions}
            locale={locale}
          />
        );

      case "video_section":
        const videoSectionRecord = b as VideoSectionRecord;
        return (
          <Video
            key={b.id}
            videoHeader={videoSectionRecord.videoHeader}
            videoSubheader={videoSectionRecord.videoSubheader}
            externalVideo={videoSectionRecord.externalVideo}
            internalVideo={videoSectionRecord.internalVideo}
          />
        );
      case "brand_section":
        const brandSectionRecord = b as BrandSectionRecord;
        switch (brandSectionRecord.displayOptions) {
          case "brand_cards":
            return (
              <BrandCards key={b.id} brandShowcase={brandSectionRecord.brand} />
            );
          default:
            return (
              <Brands key={b.id} brandShowcase={brandSectionRecord.brand} />
            );
        }
      case "review_section":
        const reviewSectionRecord = b as ReviewSectionRecord;
        switch (reviewSectionRecord.displayOptions) {
          case "card_carrousel":
            return (
              <Carrousel
                key={b.id}
                header={reviewSectionRecord.reviewSectionHeader}
                subheader={reviewSectionRecord.reviewSectionSubheader}
                reviews={reviewSectionRecord.reviews}
              />
            );
          case "modern_carrousel":
            return (
              <ModernCarrousel
                key={b.id}
                header={reviewSectionRecord.reviewSectionHeader}
                subheader={reviewSectionRecord.reviewSectionSubheader}
                reviews={reviewSectionRecord.reviews}
              />
            );
          case "minimal_carrousel":
            return (
              <MinimalCarrousel
                key={b.id}
                header={reviewSectionRecord.reviewSectionHeader}
                subheader={reviewSectionRecord.reviewSectionSubheader}
                reviews={reviewSectionRecord.reviews}
              />
            );
          case "minimal_cards":
            return (
              <MinimalReviewCards
                key={b.id}
                header={reviewSectionRecord.reviewSectionHeader}
                subheader={reviewSectionRecord.reviewSectionSubheader}
                reviews={reviewSectionRecord.reviews}
              />
            );
          default:
            return (
              <Testimonials
                key={b.id}
                header={reviewSectionRecord.reviewSectionHeader}
                subheader={reviewSectionRecord.reviewSectionSubheader}
                reviews={reviewSectionRecord.reviews}
              />
            );
        }

      case "featured_pages_section":
        const featuredPagesSectionRecord = b as FeaturedPagesSectionRecord;
        return (
          <StandardFeaturedPages
            locale={locale}
            key={b.id}
            pages={featuredPagesSectionRecord.featuredPages}
            header={featuredPagesSectionRecord.featuredPagesHeader}
            subheader={featuredPagesSectionRecord.featuredPagesSubheader}
          />
        );

      case "team_section":
        const teamSectionRecord = section as TeamSectionRecord;
        if (teamSectionRecord.displayOptions === "compact")
          return (
            <CompactTeam
              key={b.id}
              header={teamSectionRecord.title}
              subheader={teamSectionRecord.subtitle}
              lng={locale}
            />
          );
        return (
          <ExpandedTeam
            key={b.id}
            header={teamSectionRecord.title}
            subheader={teamSectionRecord.subtitle}
            lng={locale}
          />
        );
      case "faq_section":
        const faqSectionRecord = b as FaqSectionRecord;
        return (
          <FAQAccordion
            key={faqSectionRecord.id}
            title={faqSectionRecord.title}
            subtitle={faqSectionRecord.subtitle}
            questions={faqSectionRecord.questions}
          />
        );
      case "stats_section":
        const statsSectionRecord = section as StatsSectionRecord;
        return (
          <StatsSection
            key={b.id}
            title={statsSectionRecord.title}
            subtitle={statsSectionRecord.subtitle}
            statistic={statsSectionRecord.statistic}
          />
        );
      case "about_intro":
        const aboutIntroSectionRecord = section as AboutIntroRecord;
        return (
          <AboutIntro
            key={b.id}
            header={aboutIntroSectionRecord.header}
            subheader={aboutIntroSectionRecord.subheader}
            introduction={aboutIntroSectionRecord.introductionText}
            images={aboutIntroSectionRecord.images}
            preHeader={aboutIntroSectionRecord.preHeader}
          />
        );
      case "redirect_section":
        const redirectSectionRecord = section as RedirectSectionRecord;
        redirect(`/${locale}/${redirectSectionRecord.slugToRedirectTo}`);
      default:
        return <></>;
    }
  });
}
