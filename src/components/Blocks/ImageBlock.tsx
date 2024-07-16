import { SRCImage } from "react-datocms";
import { motion, Variants } from "framer-motion";

export default function ImageBlock({ data, locale }) {
  const { imageAsset, imageDescription } = data;
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

  return (
    <div className={`standard-vertical-m`}>
      <div className="container">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <div className="md:w-8/12 md:mx-auto relative">
            <SRCImage
              data={imageAsset.responsiveImage}
              className="w-full h-auto"
            />
            {imageDescription && (
              <div
                className="text-sm mt-6"
                dangerouslySetInnerHTML={{ __html: imageDescription }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
