import CustomIcon from "@/components/Common/CustomIcon";
import translate from "@/labels";
import { SiteLocale } from "@/graphql/generated";

type PropsNewsletter = {
  title: string;
  subtitle: string;
  url: string;
  locale: SiteLocale;
};

export default function Newsletter({
  title,
  subtitle,
  url,
  locale,
}: PropsNewsletter) {
  return (
    <>
      <section className="py-12 xl:col-span-5">
        {title && <h2 className="font-bold">{title}</h2>}
        {subtitle && (
          <div
            className="text-sm text-gray-light mt-4 xl:text-base"
            dangerouslySetInnerHTML={{ __html: `${subtitle}` }}
          />
        )}
        <div id="mc_embed_signup">
          <form
            action={url}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div className="py-4" id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label
                  htmlFor="mce-EMAIL"
                  className="text-xs font-bold mb-2 mt-1 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  required={true}
                  defaultValue=""
                  name="EMAIL"
                  placeholder="Inserisci la tua email *"
                  className="block w-full bg-neutral-content border-primary-content border rounded-md py-6 px-3 text-sm text-base-content placeholder:text-neutral-focus lg:py-4"
                  id="mce-EMAIL"
                />
              </div>

              <div id="mce-responses" className="clear foot">
                <div className="hidden" id="mce-error-response"></div>
                <div className="hidden" id="mce-success-response"></div>
              </div>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="b_b43a7bd9734c7124b3be52921_1911023b36">
                  b_b43a7bd9734c7124b3be52921_1911023b36
                </label>
                <input
                  type="text"
                  name="b_b43a7bd9734c7124b3be52921_1911023b36"
                  tabIndex={-1}
                  defaultValue=""
                  id="b_b43a7bd9734c7124b3be52921_1911023b36"
                />
              </div>
              <div id="mergeRow-gdpr">
                <div className="mb-2 mt-4">
                  <fieldset
                    className="flex items-start gap-2"
                    name="interestgroup_field"
                    role="group"
                    aria-label={translate(
                      "newsletter.privacyFieldsetLabel",
                      locale
                    )}
                  >
                    <legend className="hidden">
                      {translate("newsletter.privacyFieldsetLabel", locale)}
                    </legend>
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      defaultValue="Y"
                      name="gdpr[150837]"
                      id="gdpr_150837"
                      required
                    />
                    <label
                      className="cursor-pointer text-xs text-gray-light"
                      htmlFor="gdpr_150837"
                    >
                      {translate("newsletter.accept", locale)}
                      <a
                        // href="https://www.datocms-assets.com/65765/1652793060-privacy-e-policy.pdf"
                        title={`Privacy Policy ${translate(
                          "externaLink",
                          locale
                        )}`}
                        target="_blank"
                        className="mx-1 underline"
                        rel="noreferrer noopener"
                      >
                        {translate("newsletter.policy", locale)}
                      </a>
                      {translate("newsletter.authorize", locale)}
                    </label>
                  </fieldset>
                </div>
                <div className="mb-2">
                  <fieldset
                    className="flex items-center gap-2"
                    name="interestgroup_field"
                    role="group"
                    aria-label={translate(
                      "newsletter.formAcceptFieldsetLabel",
                      locale
                    )}
                  >
                    <legend className="hidden">
                      {translate("newsletter.formAcceptFieldsetLabel", locale)}
                    </legend>
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      defaultValue="Y"
                      name="gdpr[150845]"
                      id="gdpr_150845"
                      required
                    />
                    <label
                      className="cursor-pointer text-xs text-gray-light"
                      htmlFor="gdpr_150845"
                    >
                      {translate("newsletter.acceptEmail", locale)}
                    </label>
                  </fieldset>
                </div>
                <p className="my-4 text-xs text-gray-light">
                  {translate("newsletter.unsubscribePre", locale)}
                  <a
                    href="https://mailchimp.com/legal/terms"
                    className="ml-1 underline duration-200 hover:text-red"
                    target="_blank"
                    rel="noreferrer noopener"
                    title={`legal terms mailchimp ${translate(
                      "externaLink",
                      locale
                    )}`}
                  >
                    {translate("newsletter.cta", locale)}
                  </a>
                </p>
              </div>
              <div className="optionalParent inline-block">
                <div className="bg-primary-content flex items-center rounded-full text-accent-content py-2 px-6 group">
                  <input
                    aria-label="undefined"
                    type="submit"
                    defaultValue={translate("newsletter.subscribe", locale)}
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                  <CustomIcon
                    classes="w-[14px] h-[14px] bg-base-100 ml-2 group-hover:ml-6 inline-block motion-safe:duration-300"
                    fileName="arrow-oblique"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
