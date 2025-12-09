import { FooterQuery, SiteLocale } from "@/graphql/generated";
import Newsletter from "@/components/Footer/Newsletter";
import ExternalLink from "@/components/Links/ExternalLink";
import translate from "@/labels";
import CustomIcon from "@/components/Blocks/CustomIcon";
import Socials from "@/components/Footer/Socials";
import Iubenda from "@/components/Footer/ExternalServices/Iubenda";
import GoogleAnalytics from "@/components/Footer/ExternalServices/GoogleAnalytics";
import MenuFooter from "@/components/Footer/MenuFooter";
import StructuredContent from "@/components/Layout/StructuredContent";
import Image from "next/image";

type Props = {
  data: any;
  locale: SiteLocale;
};

const year = new Date().getFullYear();

const ENV = process.env.NEXT_PUBLIC_DATO_ENV;

const Footer = ({ data, locale }: Props) => {
  if (!data?.layout) return null;
  const {
    rea,
    address,
    googleMaps,
    phone,
    footerMenu,
    email,
    iva,
    urlNewsletter,
    footerLogo,
    socialMediaLinks,
    titleNewsletter,
    textNewsletter,
    colorReverseBanner,
    iubendaPolicyId,
    iubendaSiteId,
    googleAnalyticsId,
  } = data?.layout;
  return (
    <>
      <footer id="footer">
        <div className="">
          <div className="container px-6 py-12">
            <div className="flex border-y border-secondary flex-wrap gap-6 py-8 gap-y-8 md:justify-center md:gap-x-12 md:px-12 xl:py-12">
              <div className="relative aspect-3/1 w-[200px] grayscale">
                <Image
                  src={footerLogo.url}
                  fill
                  alt={footerLogo.alt}
                  title={footerLogo.title ? footerLogo.title : footerLogo.alt}
                  className="object-left object-contain"
                />
              </div>
              {footerMenu.map((fmi: any) => {
                return (
                  <>
                    <div key={fmi.id} className="lg:basis-auto text-left  ">
                      <div className="font-serif uppercase mb-2 lg:mb-4 pb-2 lg:pb-4 border-b border-b-white md:text-sm ">
                        <span className={`${fmi.label ? "" : "invisible"}`}>
                          {fmi.label ? fmi.label : ". "}
                        </span>
                      </div>

                      {fmi._modelApiKey == "columns_text_footer" && (
                        <div className=" text-base">
                          <StructuredContent
                            data={fmi.content}
                            locale={locale}
                          />
                        </div>
                      )}
                      {fmi.page?.length > 0 && (
                        <div className=" text-base">
                          <MenuFooter data={fmi.page as any} locale={locale} />
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="md:grid gap-6 md:grid-cols-2 pb-6 items-start md:gap-x-12 xl:grid-cols-12 lg:gap-x-24">
              {urlNewsletter && (
                <Newsletter
                  title={titleNewsletter}
                  subtitle={textNewsletter}
                  url={urlNewsletter}
                  locale={locale}
                />
              )}
              <div className="grid gap-3 md:pt-12 border-b border-secondary/40 md:border-none pb-12 xl:col-span-4">
                {rea && <div className="uppercase font-bold">{rea}</div>}
                {address && <div className="">{address}</div>}
                {googleMaps && (
                  <ExternalLink
                    className="group font-bold flex items-center"
                    url={googleMaps}
                    title="Link Google Maps"
                    locale={locale}
                  >
                    {translate("googleMaps", locale)}
                    <CustomIcon
                      classes="w-[14px] h-[14px] bg-primary-content ml-2 group-hover:ml-6 inline-block motion-safe:duration-300"
                      fileName="arrow-oblique"
                    />
                  </ExternalLink>
                )}
                {phone && (
                  <a
                    className="group"
                    href={`tel:${phone}`}
                    title={`tel:${phone}`}
                  >
                    {phone}
                  </a>
                )}
                {email && (
                  <a
                    className="group"
                    href={`mailto:${email}`}
                    title={`mailto:${email}`}
                  >
                    {email}
                  </a>
                )}
              </div>
              {socialMediaLinks.length > 0 && (
                <Socials socials={socialMediaLinks} locale={locale} />
              )}
            </div>
          </div>
        </div>
        <div className="bg-neutral text-neutral-content">
          <div className="container px-6 mx-auto py-6">
            <div className="grid gap-2 md:flex md:justify-between xl:items-center ">
              <div className="text-xs text-gray-light xl:flex xl:justify-between xl:gap-2">
                <span className="">
                  © {year} {rea}
                </span>
                <span className="px-1 xl:px-0"> - </span>
                <span className="">P.IVA {iva}</span>
                <span className="px-1 xl:px-0 hidden xl:block"> - </span>
                <div className="">
                  <ExternalLink
                    url="https://www.cantierecreativo.net"
                    title="Cantiere Creativo Agenzia web Firenze"
                    locale={locale}
                    className="hover:underline hover:underline-offset-4"
                  >
                    Design & dev Cantiere Creativo
                  </ExternalLink>
                </div>
              </div>
              <div className="text-xs text-gray-light">
                <a
                  href={`https://www.iubenda.com/privacy-policy/${iubendaPolicyId}`}
                  title={`Privacy Policy`}
                  className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
                >
                  <span className="hover:underline hover:underline-offset-4 ">
                    Privacy Policy
                  </span>
                </a>
                <span className="px-1"> - </span>
                <a
                  href={`https://www.iubenda.com/privacy-policy/${iubendaPolicyId}/cookie-policy`}
                  title={`Cookie Policy`}
                  className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
                >
                  <span className="hover:underline hover:underline-offset-4 ">
                    Cookie Policy
                  </span>
                </a>
                <span className="px-1"> - </span>
                <a
                  href="#"
                  title={`Cookie Policy`}
                  className="iubenda-cs-preferences-link"
                >
                  <span className="hover:underline hover:underline-offset-4 ">
                    {translate("preferencePolicy", locale)}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {iubendaSiteId && iubendaPolicyId && ENV !== "develop" && (
        <Iubenda
          locale={locale}
          siteId={iubendaSiteId}
          policyId={iubendaPolicyId}
          colorRev={colorReverseBanner}
        />
      )}
      {googleAnalyticsId && ENV !== "develop" && (
        <GoogleAnalytics id={googleAnalyticsId} />
      )}
    </>
  );
};

export default Footer;
