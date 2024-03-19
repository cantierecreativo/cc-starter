import { ButtonRecord, ImageAltTitleFileField } from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import { Image as DatoImage } from "react-datocms";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  heroTitle: string;
  heroSubtitle: Maybe<string>;
  buttons: ButtonRecord[];
  image: Maybe<ImageAltTitleFileField> | undefined;
};

const BackgroundImageHero = ({
  heroTitle,
  heroSubtitle,
  buttons,
  image,
}: Props) => {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: "90vh" }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="w-full relative object-cover object-bottom bg-black"
    >
      <DatoImage
        data={image?.responsiveImage}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        className="opacity-80"
        priority={true}
      />
      <div className="flex h-full flex-col items-center justify-end pb-24 px-8 lg:px-0 relative z-[2]">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-base-100 text-center font-serif uppercase">
          {heroTitle}
        </h1>
        <div className="text-base-100 text-sm lg:text-md text-center lg:max-w-[55%] text-balance">
          <div dangerouslySetInnerHTML={{ __html: heroSubtitle }} />
        </div>
        <div className="flex gap-4">
          {buttons.map((button) => {
            const primary =
              "inline-block rounded-lg bg-primary/90 px-8 py-3 text-center text-sm font-semibold text-primary-content/90 outline-none   transition duration-100  focus-visible:ring active:bg-indigo-700 md:text-base";
            const secondary =
              "inline-block rounded-lg bg-neutral px-8 py-3 text-center text-sm font-semibold text-neutral-content outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base";
            return (
              <a
                key={button.id}
                className={button.primary ? primary : secondary}
                href={button.url || "#"}
              >
                {button.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundImageHero;
