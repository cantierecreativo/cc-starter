import Brands from "../Home/Brands";
import Features from "../Home/Features";
import Pricing from "../Home/Pricing";
import Testimonials from "../Home/Testimonials";
import Video from "../Home/Video";
import DetailSection from "../Home/Detail/DetailSection";
import CompactTeam from "../About/CompactTeam";
import ExpandedTeam from "../About/ExpandedTeam";
import FAQAccordion from "../About/FAQAccordion";
import FAQGrid from "../About/FAQGrid";
import StatsSection from "../About/StatsSection";
import AboutIntro from "../About/AboutIntro";
import {
  AboutIntroRecord,
  AttachmentsBlockRecord,
  BannerCtaRecord,
  BlogListRecord,
  BrandSectionRecord,
  ChangelogSectionRecord,
  DetailSectionRecord,
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
  SlideshowRecord,
  StatsSectionRecord,
  TeamSectionRecord,
  TextBlockRecord,
  VideoSectionRecord,
} from "@/graphql/generated";
import { redirect } from "next/navigation";
import GradientCards from "@/components/Home/Pricing/GradientCards";
import Minimal from "@/components/Home/Pricing/Minimal";
import FeatureListSelector from "@/components/Home/Pricing/FeatureListSelector";
import SmallCards from "@/components/Home/Pricing/SmallCards";
import Carrousel from "@/components/Home/Testimonials/Carrousel";
import ModernCarrousel from "@/components/Home/Testimonials/ModernCarrousel";
import MinimalCarrousel from "@/components/Home/Testimonials/MinimalCarrousel";
import MinimalReviewCards from "@/components/Home/Testimonials/MinimalReviewCards";
import BrandCards from "@/components/Home/Brands/BrandCards";
import Changelog from "@/components/Changelog";
import Carousel from "@/components/Common/Carousel";
import ImageBlock from "@/components/Common/ImageBlock";
import GalleryBlock from "@/components/Common/GalleryBlock";
import BannerCtaBlock from "@/components/Common/BannerCtaBlock";
import TextBlock from "@/components/Common/TextBlock";
import MultipleCardBlock from "@/components/Common/MultipleCardBlock";
import BlogListBlock from "@/components/Common/BlogListBlock";
import StandardFeaturedPages from "@/components/Home/FeaturedPages/StandardFeaturedPages";
import ProductDetailsBlock from "@/components/Common/ProductDetailsBlock";
import FormBlock from "@/components/Common/FormBlock";
import ContactTextBlock from "@/components/Common/ContactTextBlock";
import ElementListBlock from "@/components/Common/ElementListBlock";
import AttachmentsBlock from "@/components/Blog/AttachmentsBlock";

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
      case "slideshow": {
        const carouselSection = b as SlideshowRecord;
        return (
          <Carousel
            key={b.id}
            slides={carouselSection.slides}
            locale={locale}
          />
        );
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
      case "detail_section":
        const detailSectionRecord = b as DetailSectionRecord;
        return (
          <DetailSection
            key={b.id}
            imagePosition={detailSectionRecord.imagePosition as boolean}
            image={detailSectionRecord.image}
            details={detailSectionRecord.details}
          />
        );
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

      case "pricing_section":
        const pricingSectionRecord = section as PricingSectionRecord;
        switch (pricingSectionRecord.displayOption) {
          case "cards_gradient":
            return (
              <GradientCards
                key={b.id}
                header={pricingSectionRecord.pricingSectionHeader}
                subheader={pricingSectionRecord.pricingSectionSubheader}
                plans={pricingSectionRecord.plans}
              />
            );
          case "minimal":
            return (
              <Minimal
                key={b.id}
                header={pricingSectionRecord.pricingSectionHeader}
                subheader={pricingSectionRecord.pricingSectionSubheader}
                plans={pricingSectionRecord.plans}
              />
            );
          case "feature_list":
            return (
              <FeatureListSelector
                key={b.id}
                header={pricingSectionRecord.pricingSectionHeader}
                subheader={pricingSectionRecord.pricingSectionSubheader}
                plans={pricingSectionRecord.plans}
              />
            );
          case "mini_cards":
            return (
              <SmallCards
                key={b.id}
                header={pricingSectionRecord.pricingSectionHeader}
                subheader={pricingSectionRecord.pricingSectionSubheader}
                plans={pricingSectionRecord.plans}
              />
            );
          default:
            return (
              <Pricing
                key={b.id}
                header={pricingSectionRecord.pricingSectionHeader}
                subheader={pricingSectionRecord.pricingSectionSubheader}
                plans={pricingSectionRecord.plans}
              />
            );
        }

      case "featured_pages_section":
        const featuredPagesSectionRecord =
          section as FeaturedPagesSectionRecord;
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
        const faqSectionRecord = section as FaqSectionRecord;
        if (faqSectionRecord.displayOptions === "accordion")
          return (
            <FAQAccordion
              key={b.id}
              title={faqSectionRecord.title}
              subtitle={faqSectionRecord.subtitle}
              questions={faqSectionRecord.questions}
            />
          );
        return (
          <FAQGrid
            key={b.id}
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
