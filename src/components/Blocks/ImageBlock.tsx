import { Image as DatoImage } from "react-datocms";

export default function ImageBlock({ data, locale }) {
  const { imageAsset, imageDescription } = data;

  return (
    <div className={`standard-vertical-m`}>
      <div className="container">
        <div className="md:w-8/12 md:mx-auto relative">
          <DatoImage
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
      </div>
    </div>
  );
}
