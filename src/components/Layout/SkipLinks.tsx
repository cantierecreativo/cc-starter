import translate from "@/labels";

export default function SkipLinks({ locale }) {
  const className =
    "fixed top-0 left-1/2 z-60 -translate-x-1/2 -translate-y-full bg-primary px-3 py-2 text-white duration-200 focus:translate-y-0";
  return (
    <div data-datocms-noindex>
      <a href="#content" className={className}>
        {translate("skipContent", locale)}
      </a>
      <a href="#footer" className={className}>
        {translate("skipFooter", locale)}
      </a>
    </div>
  );
}
