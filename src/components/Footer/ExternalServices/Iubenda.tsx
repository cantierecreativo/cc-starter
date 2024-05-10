import { SiteLocale } from "@/graphql/generated";
import Script from "next/script";
import customTheme from "@/data/customTheme.json";

type PropsIubenda = {
  siteId: string;
  policyId: string;
  locale: SiteLocale;
  colorRev: Boolean;
};

export default function Iubenda({
  siteId,
  policyId,
  locale,
  colorRev,
}: PropsIubenda) {
  return (
    <>
      <Script
        id="iubenda-cs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "countryDetection": true,
            "enableFadp": true,
            "enableLgpd": true,
            "lgpdAppliesGlobally": false,
            "perPurposeConsent": true,
            "whitelabel":true,
            "purposes": "1, 3, 4",
            "siteId":${siteId},
            "lang":"${locale}",
            "cookiePolicyId":${policyId},
            "banner":{
              "prependOnBody":true,
              "acceptButtonDisplay":true,
              "closeButtonDisplay":false,
              "customizeButtonDisplay":true,
              "explicitWithdrawal":true,
              "listPurposes":true,
              "position":"bottom",
              "acceptButtonColor":"${
                colorRev
                  ? customTheme["accent-content"]
                  : customTheme["accent-content"]
              }",
              "acceptButtonCaptionColor":"${
                colorRev
                  ? customTheme["primary-content"]
                  : customTheme["primary-content"]
              }",
              "customizeButtonColor":"${
                colorRev
                  ? customTheme["accent-content"]
                  : customTheme["accent-content"]
              }",
              "customizeButtonCaptionColor":"${
                colorRev
                  ? customTheme["primary-content"]
                  : customTheme["primary-content"]
              }",
              "rejectButtonColor":"${
                colorRev
                  ? customTheme["accent-content"]
                  : customTheme["accent-content"]
              }",
              "rejectButtonCaptionColor":"${
                colorRev
                  ? customTheme["primary-content"]
                  : customTheme["primary-content"]
              }",
              "textColor":"${
                colorRev
                  ? customTheme["secondary-content"]
                  : customTheme["secondary-content"]
              }",
              "backgroundColor":"${
                colorRev ? customTheme["secondary"] : customTheme.primary
              }",
              "rejectButtonDisplay":true,
              "closeButtonRejects":true
            }
          }`,
        }}
      />
      <Script
        id="iubenda-cs-1"
        type="text/javascript"
        src={`https://cs.iubenda.com/autoblocking/${siteId}.js`}
      />
      <Script
        id="iubenda-cs-2"
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="lazyOnload"
      />
      <Script
        id="active-modal-cookie"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`,
        }}
      />
    </>
  );
}
