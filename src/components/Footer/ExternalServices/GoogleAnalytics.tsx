"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function GoogleAnalyticsInner({ id }) {
  console.log("GA4: Component rendering with ID:", id);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      if (!window.gtag) {
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
      }

      setTimeout(() => {
        window.gtag("config", id, {
          page_path: pathname,
          send_page_view: false,
        });

        const pageLocation = window.location.href;
        const pageTitle = document.title;

        window.gtag("event", "page_view", {
          page_title: pageTitle,
          page_location: pageLocation,
          page_path: pathname,
          send_to: id,
        });
        console.log(
          "GA4: Page view triggered for",
          pathname,
          "Location:",
          pageLocation,
          "Title:",
          pageTitle
        );
      }, 500);
    }
  }, [pathname, searchParams, id]);

  return (
    <>
      <Script
        id="gtm"
        type="plain/text"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="gas"
        type="plain/text"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
            send_page_view: false,
          });
        `,
        }}
      />
    </>
  );
}

export default function GoogleAnalytics(props) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner {...props} />
    </Suspense>
  );
}
