import { Image as DatoImage } from "react-datocms";

export default function ImageBlock({ data, locale }) {
  const { imageAsset, imageDescription } = data;

  return (
    <div className={`p-6`}>
      <div className="container mx-auto">
        <div className="md:w-[10/12] md:mx-auto">
          <DatoImage
            data={imageAsset.responsiveImage}
            className="w-full h-auto"
          />
          {imageDescription && (
            <div
              className="grid gap-4 text-sm text-neutral/80 xl:text-base mt-6"
              dangerouslySetInnerHTML={{ __html: imageDescription }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
