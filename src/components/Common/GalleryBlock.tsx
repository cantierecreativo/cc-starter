"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image as DatoImage } from "react-datocms";
import {
  Autoplay,
  A11y,
  Pagination,
  Navigation,
  Parallax,
} from "swiper/modules";
import "swiper/css/a11y";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/parallax";

import "swiper/css/bundle";

export default function GalleryBlock({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  return (
    <div className="container lg:w-10/12 px-6 xl:px-0 mx-auto relative gallery py-8 md:py-16 lg:py-28">
      <Swiper
        speed={1000}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation, A11y, Parallax]}
        // onSlideChange={(info) => console.log("slide change", info)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.galleryImages.map((img: any) => {
          return (
            <SwiperSlide key={img.id}>
              <div className="bg-primary-content/10 relative py-4 aspect-[4/3] lg:aspect-[7/4] xl:aspect-[2/1] flex items-center justify-center">
                <DatoImage
                  data={img.imageAsset.responsiveImage}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              {img.imageDescription && (
                <div
                  className="grid gap-4 text-sm text-neutral/80 xl:text-base mt-3 md:w-2/3"
                  dangerouslySetInnerHTML={{ __html: img.imageDescription }}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
