import Image from "next/image";
import { FeatureRecord } from "@/graphql/generated";
import ReactMarkdown from "react-markdown";

type Props = {
  feature: FeatureRecord;
};

const SingleFeature = ({ feature }: Props) => {
  const { featureIcon, featureTitle, featureDescription } = feature;

  return (
    <div className="w-full bg-base-100 rounded-md border border-base-content/30 p-6 xl:px-8 md:py-10">
      <div className="relative mb-10 flex h-[70px] w-full">
        <Image
          src={featureIcon.url}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt={featureTitle}
          title={featureTitle}
          aria-hidden={true}
        />
      </div>
      <h2 className="mb-5 text-base font-bold md:text-md">{featureTitle}</h2>
      <div className="text-sm opacity-90 xl:text-base">
        <ReactMarkdown>{featureDescription || ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SingleFeature;
