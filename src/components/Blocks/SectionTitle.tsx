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
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} grid gap-6`}
      >
        {title && <h2 className="title">{title}</h2>}
        {paragraph && (
          <div className="text mx-auto">
            <ReactMarkdown>{paragraph || ""}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
