import resolveLink from "./resolveLink";

type pageDataProps = {
  _modelApiKey: string;
  slugs: [
    {
      locale: string;
      value: string;
    }
  ];
};

export function pickHrefs(data: any) {
  const arr: string[] = ["slugs", "_modelApiKey"];
  const pageData: any = Object.fromEntries(
    Object.entries(data).filter(([k]) => arr.includes(k) || "")
  );

  return {
    it: resolveLink({ ...pageData, locale: "it", modelRelated: null }),
    en: resolveLink({ ...pageData, locale: "en", modelRelated: null }),
  };
}
