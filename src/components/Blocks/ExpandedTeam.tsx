import { SiteLocale } from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import ReactMarkdown from "react-markdown";

type Props = {
  header: Maybe<string>;
  subheader: Maybe<string>;
  lng: SiteLocale;
};

const ExpandedTeam = ({ header, subheader, lng }: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          {header}
        </h1>

        <div className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          <ReactMarkdown>{subheader || ""}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default ExpandedTeam;
