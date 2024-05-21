import Brands from "@/components/Brands";
import Features from "@/components/Blocks/FeaturesList";
import Video from "@/components/Video";
import FAQAccordion from "@/components/Blocks/FAQAccordion";
import {
  AttachmentsBlockRecord,
  BannerCtaRecord,
  BrandSectionRecord,
  ElementsListRecord,
  EventRecord,
  FaqSectionRecord,
  FeatureListSectionRecord,
  GallerySectionRecord,
  ImageBlockRecord,
  MultipleCardRecord,
  PostRecord,
  RedirectSectionRecord,
  SiteLocale,
  TextBlockRecord,
  VideoSectionRecord,
} from "@/graphql/generated";
import { redirect } from "next/navigation";
import BrandCards from "@/components/Brands/BrandCards";
import ImageBlock from "@/components/Blocks/ImageBlock";
import GalleryBlock from "@/components/Blocks/GalleryBlock";
import BannerCtaBlock from "@/components/Blocks/BannerCtaBlock";
import TextBlock from "@/components/Blocks/TextBlock";
import MultipleCardBlock from "@/components/Blocks/MultipleCardBlock";
import ProductDetailsBlock from "@/components/Blocks/ProductDetailsBlock";
import FormBlock from "@/components/Blocks/FormBlock";
import ContactTextBlock from "@/components/Blocks/ContactTextBlock";
import ElementListBlock from "@/components/Blocks/ElementListBlock";
import AttachmentsBlock from "@/components/Blocks/AttachmentsBlock";

type Props = {
  section: any;
  locale: SiteLocale;
  lastPosts: PostRecord[];
  lastEvents: EventRecord[];
};

export default function Sections({
  section,
  locale,
  lastPosts,
  lastEvents,
}: Props) {
  return section?.blocks?.map((b: any) => {
    switch (b._modelApiKey) {
      case "elements_list": {
        const elementsListRecord = b as ElementsListRecord;
        return (
          <ElementListBlock
            key={b.id}
            data={elementsListRecord}
            locale={locale}
            lastPosts={lastPosts}
            lastEvents={lastEvents}
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

      case "redirect_section":
        const redirectSectionRecord = section as RedirectSectionRecord;
        redirect(`/${locale}/${redirectSectionRecord.slugToRedirectTo}`);
      default:
        return <></>;
    }
  });
}
