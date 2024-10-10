import { Image } from "react-datocms";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  A11y,
  Pagination,
  Navigation,
  Parallax,
} from "swiper/modules";

import "swiper/css/bundle";
import DynamicLink from "../Links/DynamicLink";
import ButtonBlock from "../Blocks/ButtonBlock";

export default function Carousel({
  slides,
  locale,
}: {
  slides: any;
  locale: string;
}) {
  return (
    <header className={`relative hero-carousel`}>
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, A11y, Parallax]}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide: any, i: number) => {
          const { id, image, title, text, link } = slide;

          // return console.log("slide:", slide);

          return (
            <div className="h-full w-full m-t-[100px]" key={i}>
              <SwiperSlide key={i}>
                <div className="relative w-full h-[600px] 2xl:h-[700px] 3xl:h-[900px]">
                  <div className="bg-black z-10 absolute inset-0 opacity-40" />
                  <Image
                    data={image.responsiveImage}
                    priority={i === 0 ? true : false}
                    objectFit="cover"
                    className="h-full w-full z-0 !max-w-none"
                  />
                  <div className="absolute max-w-[700px] grid gap-10 top-1/2 font-serif left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-2/3 text-center text-base-100">
                    {title && (
                      <h2 className="xl:text-lg font-semibold">{title}</h2>
                    )}
                    {text && (
                      <h3 className="text-2xl uppercase font-semibold lg:text-4xl">
                        {text}
                      </h3>
                    )}
                    {link && (
                      <DynamicLink link={link} locale={locale}>
                        <ButtonBlock label={link.cta ? link.cta : "vai"} />
                      </DynamicLink>
                    )}
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
