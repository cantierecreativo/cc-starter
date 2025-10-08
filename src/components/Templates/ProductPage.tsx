"use client";
import { SRCImage } from "react-datocms";
import { SiteLocale, ProductQuery, ProductRecord } from "@/graphql/generated";
import { notFound } from "next/navigation";
import CustomIcon from "../Blocks/CustomIcon";
import Sections from "../Sections";

type Props = {
  data: ProductQuery["product"];
  locale: SiteLocale;
};

const ProductPage = ({ data, locale }: Props) => {
  const { title, productImage, blocks } = data;
  if (!data) notFound();

  return (
    <>
      <section className="bg-white-100">
        <div className="pt-20 pb-6 md:pt-24 md:pb-10 lg:pt-40 lg:pb-20 container ">
          <div className="mb-6 lg:mb-8 py-4 lg:py-8  relative">
            <h1 className="title uppercase max-w-[70%] lg:max-w-[50%] text-pretty">
              {title}
            </h1>
          </div>

          <div className="md:flex w-full">
            <div className="shrink-0 md:w-[48%] lg:w-[43%] mr-10 lg:mr-24">
              <div className="aspect-square relative md:aspect-2/1 ">
                <SRCImage
                  className="object-cover  inset-0"
                  data={productImage.responsiveImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {blocks.length > 0 && (
        <section className={`py-px -mt-[2px]`}>
          {blocks && <Sections section={data} locale={locale} />}
        </section>
      )}
    </>
  );
};

export default ProductPage;
