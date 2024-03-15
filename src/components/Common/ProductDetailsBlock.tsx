import { ProductDetailRecord, SiteLocale } from "@/graphql/generated";
import Image from "next/image";
import CustomIcon from "@/components/Common/CustomIcon";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import DynamicLink from "../Links/DynamicLink";
import ButtonBlock from "./ButtonBlock";

type PropsProductDetailsBlock = {
  data: ProductDetailRecord;
  locale: SiteLocale;
};

function RenderValue(value: any) {
  if (value.star) {
    const icons = [];
    for (let i = 0; i < parseInt(value.value); i++) {
      icons.push(
        <CustomIcon key={i} classes="bg-base-content w-3 h-3" fileName="star" />
      );
    }
    return icons;
  } else {
    return value.value;
  }
}

const ProductDetailsBlock = ({ data, locale }: PropsProductDetailsBlock) => {
  const {
    title,
    description,
    productDetailImage,
    imageDescription,
    label,
    link,
    logo,
    values,
  } = data;
  return (
    <>
      <div className="p-6 py-10 md:py-24 container">
        <div className="md:w-10/12 md:mx-auto border border-primary-content/40 bg-base-100 px-4 py-8 pb-12 md:px-12 md:py-16">
          <h2 className="xl:pb-6 xl:text-3xl pb-2 uppercase font-serif text-lg border-b border-inherit md:text-xl md:pb-4">
            {title}
          </h2>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-20 xl:mt-8">
            <div className="">
              {logo && (
                <div className="w-[180px] h-[56px] relative mt-8">
                  <Image
                    src={logo.url}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt={`Logo ${title}`}
                    title={`Logo ${title}`}
                  />
                </div>
              )}
              {values.length > 0 && (
                <div className="pt-8">
                  {values?.map((v: any) => (
                    <div
                      className="flex justify-between border-b border-primary-content/40 py-2.5 items-center"
                      key={v.id}
                    >
                      <div className="uppercase text-sm">{v.key}</div>
                      <div className="text-sm flex">{RenderValue(v)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {productDetailImage && (
              <div className="">
                <div className="rounded-full bg-primary mt-20 aspect-[5/7] relative md:mt-10">
                  <div className="w-[70%] h-[70%] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
                    <DatoImage
                      data={
                        productDetailImage.responsiveImage as ResponsiveImageType
                      }
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </div>
                {imageDescription && (
                  <div
                    className="text-sm text-primary-content/80 mt-4"
                    dangerouslySetInnerHTML={{ __html: imageDescription }}
                  />
                )}
              </div>
            )}
            <div className="md:col-span-2 xl:col-span-1">
              {title && (
                <h3 className="mt-10 font-serif text-lg uppercase md:mt-16 xl:mt-10">
                  {title}
                </h3>
              )}
              {description && (
                <div className="mt-8 text-base opacity-80">{description}</div>
              )}
              {link && (
                <DynamicLink
                  link={link}
                  locale={locale}
                  className={`block mt-10`}
                >
                  <ButtonBlock label={link.label} type="underline" uppercase />
                </DynamicLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsBlock;
