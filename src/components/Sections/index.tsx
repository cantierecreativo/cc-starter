import Brands from "@/components/Blocks/Brands";
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
  SlideshowRecord,
  TeamBlockRecord,
  TestimonialsBlockRecord,
  TextBlockRecord,
  VideoSectionRecord,
} from "@/graphql/generated";
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
import TestimonialsBlock from "../Blocks/TestimonialsBlock";
import Slideshow from "../Blocks/Slideshow";
import dynamic from "next/dynamic";

type Props = {
  section: any;
  locale: SiteLocale;
  lastPosts?: PostRecord[];
  lastEvents?: EventRecord[];
};

const MapBlock = dynamic(() => import("../Map/MapBlock"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
      Caricamento mappa…
    </div>
  ),
});

export default function Sections({
  section,
  locale,
  lastPosts,
  lastEvents,
}: Props) {
  const numBlocks = section.blocks.length;
  const bg =
    section.style?.includes("neutral") | section.style?.includes("base")
      ? "light"
      : "dark";

  return section?.blocks?.map((b: any) => {
    let content: any;
    switch (b._modelApiKey) {
      case "attachments_block": {
        const attachmentsRecord = b as AttachmentsBlockRecord;
        return (
          <AttachmentsBlock
            style={section.style}
            data={attachmentsRecord}
            locale={locale}
            key={attachmentsRecord.id}
          />
        );
      }
      case "banner_cta": {
        const bannerCtaSection = b as BannerCtaRecord;
        return (
          <BannerCtaBlock
            data={bannerCtaSection}
            locale={locale}
            key={bannerCtaSection.id}
          />
        );
      }
      case "brand_section": {
        const brandSectionRecord = b as BrandSectionRecord;
        return (
          <Brands
            brandShowcase={brandSectionRecord.brands}
            key={brandSectionRecord.id}
          />
        );
      }
      case "contact_text_block": {
        return <ContactTextBlock data={b} locale={locale} key={b.id} />;
      }
      case "elements_list": {
        const elementsListRecord = b as ElementsListRecord;
        return (
          <ElementListBlock
            data={elementsListRecord}
            locale={locale}
            lastPosts={lastPosts}
            lastEvents={lastEvents}
            key={elementsListRecord.id}
          />
        );
      }
      case "faq_section": {
        const faqSectionRecord = b as FaqSectionRecord;
        return (
          <FAQAccordion
            title={faqSectionRecord.title}
            subtitle={faqSectionRecord.subtitle}
            questions={faqSectionRecord.questions}
            key={faqSectionRecord.id}
          />
        );
      }
      case "feature_list_section": {
        const featureListSectionRecord = b as FeatureListSectionRecord;
        return (
          <Features
            features={featureListSectionRecord.feature}
            featuresHeader={featureListSectionRecord.featuresHeader}
            featuresSubheader={featureListSectionRecord.featuresSubheader}
            key={featureListSectionRecord.id}
          />
        );
      }
      case "featured_pages_section": {
        const featuredPages = b as FeaturedPagesSectionRecord;
        return (
          <FeaturedPages
            title={featuredPages.featuredPagesHeader}
            subtitle={featuredPages.featuredPagesSubheader}
            pages={featuredPages.featuredPages}
            locale={locale}
            key={featuredPages.id}
          />
        );
      }
      case "form_block": {
        return <FormBlock data={b} locale={locale} key={b.id} />;
      }
      case "gallery_section": {
        const gallerySection = b as GallerySectionRecord;
        return (
          <GalleryBlock data={gallerySection} locale={locale} key={b.id} />
        );
      }
      case "image_block": {
        const imageBlock = b as ImageBlockRecord;
        return <ImageBlock data={imageBlock} locale={locale} key={b.id} />;
      }
      case "map_block": {
        const mapBlock = b as MapBlockRecord;
        return <MapBlock content={mapBlock} locale={locale} key={b.id} />;
      }
      case "multiple_card": {
        const multipleCardSection = b as MultipleCardRecord;
        return (
          <MultipleCardBlock
            data={multipleCardSection}
            locale={locale}
            key={b.id}
          />
        );
      }
      case "product_detail": {
        return <ProductDetailsBlock data={b} locale={locale} key={b.id} />;
      }
      case "slideshow":
        const slideshow = b as SlideshowRecord;
        return (
          <Slideshow data={slideshow} locale={locale} key={slideshow.id} />
        );
        break;
      case "team_block": {
        const teamBlock = b as TeamBlockRecord;
        return (
          <TeamBlock
            content={teamBlock}
            locale={locale}
            colors={section.style}
            key={teamBlock.id}
          />
        );
      }
      case "testimonials_block":
        const testimonialsBlock = b as TestimonialsBlockRecord;
        return (
          <TestimonialsBlock
            data={testimonialsBlock}
            locale={locale}
            key={testimonialsBlock.id}
          />
        );

      case "text_block": {
        const textBlockSection = b as TextBlockRecord;
        return (
          <TextBlock
            data={textBlockSection}
            locale={locale}
            bg={bg}
            key={textBlockSection.id}
          />
        );
      }
      case "video_section": {
        const videoSectionRecord = b as VideoSectionRecord;
        return (
          <Video
            videoHeader={videoSectionRecord.videoHeader}
            videoSubheader={videoSectionRecord.videoSubheader}
            externalVideo={videoSectionRecord.externalVideo}
            internalVideo={videoSectionRecord.internalVideo}
            key={videoSectionRecord.id}
          />
        );
      }
      default: {
        return (
          <div className="p-8 bg-red-500 text-white">
            <div className="title">{`Manca questo blocco ${b._modelApiKey}`}</div>
          </div>
        );
      }
    }
  });
}
