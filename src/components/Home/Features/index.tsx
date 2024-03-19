import { FeatureRecord } from "@/graphql/generated";
import SectionTitle from "../../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { Maybe } from "graphql/jsutils/Maybe";

type Props = {
  features: FeatureRecord[];
  featuresHeader: string;
  featuresSubheader: Maybe<string>;
};

const Features = ({ features, featuresHeader, featuresSubheader }: Props) => {
  return (
    <section id="features" className=" xl:w-10/12 mx-auto">
      <div className="container mx-auto px-6 py-8 md:py-16 lg:py-28">
        <SectionTitle
          title={featuresHeader}
          paragraph={featuresSubheader}
          center
        />

        <div className="grid gap-3 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
