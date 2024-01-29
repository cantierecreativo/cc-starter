"use client";
import { Image } from "react-datocms";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  A11y,
  Pagination,
  Navigation,
  Parallax,
} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/parallax";
// import "swiper/css/a11y";

import "swiper/css/bundle";

export default function Carousel({
  slides,
  locale,
}: {
  slides: any;
  locale: string;
}) {
  return (
    <header className={`relative`}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, A11y, Parallax]}
        onSlideChange={(info) => console.log("slide change", info)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide: any, i: number) => {
          const { id, image, title, text } = slide;

          return (
            <div className="h-full w-full m-t-[100px]" key={`slide-${id}`}>
              <SwiperSlide>
                <div className="relative w-full min-h-[80vh]">
                  <Image
                    className="h-full w-full"
                    data={image.responsiveImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                  <div className="absolute top-1/2 z-20 -translate-y-2/4  xl:w-2/3 ">
                    <h2 className="box-decoration-clone font-semibold uppercase text-white bg-black bg-opacity-50 shadow-title md:shadow-title-lg 2xl:shadow-title-xl  text-xl md:text-2xl xl:text-4xl">
                      {title}
                    </h2>
                    <h5 className="text-lg md:text-xl xl:text-3xl box-decoration-clone text-white bg-black  bg-opacity-50 shadow-title md:shadow-title-lg 2xl:shadow-title-xl ">
                      {text}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  );
}
