import { Maybe } from "graphql/jsutils/Maybe";
import ReactMarkdown from "react-markdown";

const SectionTitle = ({
  title,
  paragraph,
  center,
}: {
  title: string;
  paragraph: Maybe<string>;
  center?: boolean;
}) => {
  return (
    <>
      <div className={` w-full ${center ? "mx-auto text-center" : ""} mb-8`}>
        {title && (
          <h2 className="text-md uppercase max-w-prose mx-auto font-serif font-light mb-4 md:text-lg md:pb-2 md:pt-4 xl:py-8 lg:text-2xl md:col-span-10 md:col-start-2">
            {title}
          </h2>
        )}
        {paragraph && (
          <div className="lg:text-md max-w-prose mx-auto md:col-span-10 md:col-start-2">
            <ReactMarkdown>{paragraph || ""}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
