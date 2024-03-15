import { FormBlockRecord, SiteLocale } from "@/graphql/generated";
import Form from "@/components/Form/Form";

type PropsFormBlock = {
  data: FormBlockRecord;
  locale: SiteLocale;
};

const FormBlock = ({ data, locale }: PropsFormBlock) => {
  const { titleForm, textForm } = data;
  return (
    <>
      <div className="container px-6 mx-auto md:grid md:grid-cols-12 xl:px-0">
        <div className="md:col-start-2 col-span-10 xl:col-span-6 xl:col-start-5">
          <div className="md:pr-20 pb-20 border-b border-primary-content/20">
            {titleForm && (
              <div className="text-base md:text-md lg:text-lg uppercase max-w-prose font-serif md:pb-2 ">
                {titleForm}
              </div>
            )}
            {textForm && (
              <div
                className="text-sm max-w-prose xl:text-base md:pb-2"
                dangerouslySetInnerHTML={{ __html: textForm }}
              />
            )}
            <Form locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBlock;
