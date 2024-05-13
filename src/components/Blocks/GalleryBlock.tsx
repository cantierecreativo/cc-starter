"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image as DatoImage } from "react-datocms";
import Image from "next/image";

import {
  Autoplay,
  A11y,
  Pagination,
  Navigation,
  Parallax,
} from "swiper/modules";
import "swiper/css/a11y";
import { motion, Variants } from "framer-motion";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/parallax";

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

import "swiper/css/bundle";

export default function GalleryBlock({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {data.typeGallery === "carousel" ? (
        <Swiper
          keyboard={true}
          modules={[A11y, Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={true}
          className="slider-auto-width"
        >
          {data.galleryImages &&
            Object.values(data.galleryImages).map((img: any) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={img.imageAssetCarousel.responsiveImage}
                  alt={img.imageAssetCarousel.responsiveImage.alt}
                  title={img.imageAssetCarousel.responsiveImage.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <div className="container lg:w-8/12 standard-vertical-m relative gallery">
          <Swiper
            speed={1000}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
                      objectFit={data.typeGallery}
                      layout="fill"
                    />
                  </div>
                  {img.imageDescription && (
                    <div
                      className="text-sm text-neutral/80 mt-3"
                      dangerouslySetInnerHTML={{ __html: img.imageDescription }}
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </motion.div>
  );
}
