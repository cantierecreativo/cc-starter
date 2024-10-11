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
  FeaturedPagesSectionRecord,
  FeatureListSectionRecord,
  GallerySectionRecord,
  ImageBlockRecord,
  MapBlockRecord,
  MultipleCardRecord,
  PostRecord,
  SiteLocale,
  TeamBlockRecord,
  TextBlockRecord,
  VideoSectionRecord,
} from "@/graphql/generated";
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
import FeaturedPages from "../Blocks/FeaturedPages";
import TeamBlock from "../Blocks/TeamBlock";
import MapBlock from "../Map/MapBlock";

type Props = {
  section: any;
  locale: SiteLocale;
  lastPosts?: PostRecord[];
  lastEvents?: EventRecord[];
};

export default function Sections({
  section,
  locale,
  lastPosts,
  lastEvents,
}: Props) {
  const numBlocks = section.blocks.length;

  return section?.blocks?.map((b: any) => {
    let content: any;
    switch (b._modelApiKey) {
      case "elements_list": {
        const elementsListRecord = b as ElementsListRecord;
        content = (
          <ElementListBlock
            key={b.id}
            data={elementsListRecord}
            locale={locale}
            lastPosts={lastPosts}
            lastEvents={lastEvents}
          />
        );
        break;
      }
      case "attachments_block": {
        const attachmentsRecord = b as AttachmentsBlockRecord;
        content = (
          <AttachmentsBlock
            key={attachmentsRecord.id}
            style={section.style}
            data={attachmentsRecord}
            locale={locale}
          />
        );
        break;
      }
      case "featured_pages_section": {
        const featuredPages = b as FeaturedPagesSectionRecord;
        content = (
          <FeaturedPages
            title={featuredPages.featuredPagesHeader}
            subtitle={featuredPages.featuredPagesSubheader}
            pages={featuredPages.featuredPages}
            locale={locale}
          />
        );
        break;
      }
      case "contact_text_block": {
        content = <ContactTextBlock key={b.id} data={b} locale={locale} />;
        break;
      }
      case "form_block": {
        content = <FormBlock key={b.id} data={b} locale={locale} />;
        break;
      }
      case "product_detail": {
        content = <ProductDetailsBlock key={b.id} data={b} locale={locale} />;
        break;
      }
      case "feature_list_section": {
        const featureListSectionRecord = b as FeatureListSectionRecord;
        content = (
          <Features
            key={featureListSectionRecord.id}
            features={featureListSectionRecord.feature}
            featuresHeader={featureListSectionRecord.featuresHeader}
            featuresSubheader={featureListSectionRecord.featuresSubheader}
          />
        );
        break;
      }
      case "multiple_card": {
        const multipleCardSection = b as MultipleCardRecord;
        content = (
          <MultipleCardBlock
            key={multipleCardSection.id}
            data={multipleCardSection}
            locale={locale}
          />
        );
        break;
      }
      case "gallery_section": {
        const gallerySection = b as GallerySectionRecord;
        content = (
          <GalleryBlock
            key={gallerySection.id}
            data={gallerySection}
            locale={locale}
          />
        );
        break;
      }
      case "image_block": {
        const imageBlock = b as ImageBlockRecord;
        content = (
          <ImageBlock key={imageBlock.id} data={imageBlock} locale={locale} />
        );
        break;
      }
      case "banner_cta": {
        const bannerCtaSection = b as BannerCtaRecord;
        content = (
          <BannerCtaBlock
            key={bannerCtaSection.id}
            data={bannerCtaSection}
            locale={locale}
          />
        );
        break;
      }
      case "text_block": {
        const textBlockSection = b as TextBlockRecord;
        content = (
          <TextBlock
            key={textBlockSection.id}
            data={textBlockSection}
            locale={locale}
          />
        );
        break;
      }
      case "video_section":
        const videoSectionRecord = b as VideoSectionRecord;
        content = (
          <Video
            key={videoSectionRecord.id}
            videoHeader={videoSectionRecord.videoHeader}
            videoSubheader={videoSectionRecord.videoSubheader}
            externalVideo={videoSectionRecord.externalVideo}
            internalVideo={videoSectionRecord.internalVideo}
          />
        );
        break;

      case "team_block":
        const teamBlock = b as TeamBlockRecord;
        content = (
          <TeamBlock
            content={teamBlock}
            locale={locale}
            colors={section.style}
          />
        );
        break;
      case "brand_section":
        const brandSectionRecord = b as BrandSectionRecord;
        switch (brandSectionRecord.displayOptions) {
          case "brand_cards":
            content = (
              <BrandCards
                key={brandSectionRecord.id}
                brandShowcase={brandSectionRecord.brand}
              />
            );
            break;
          default:
            content = (
              <Brands
                key={brandSectionRecord.id}
                brandShowcase={brandSectionRecord.brand}
              />
            );
            break;
        }
      case "faq_section":
        const faqSectionRecord = b as FaqSectionRecord;
        content = (
          <FAQAccordion
            key={faqSectionRecord.id}
            title={faqSectionRecord.title}
            subtitle={faqSectionRecord.subtitle}
            questions={faqSectionRecord.questions}
          />
        );
        break;

      case "map_block":
        const mapBlock = b as MapBlockRecord;
        content = <MapBlock content={mapBlock} locale={locale} />;
        break;

      default:
        content = (
          <div className="p-8 bg-red-500 text-white">
            <div className="title">{`Manca questo blocco ${b._modelApiKey}`}</div>
          </div>
        );
        break;
    }
    return (
      <div
        key={b.id}
        className={`${numBlocks > 1 ? "standard-vertical-m" : "no"}`}
      >
        {content}
      </div>
    );
  });
}
