import { PostRecord, ResponsiveImage, SiteLocale } from "@/graphql/generated";
import transformDate from "@/lib/transformDate";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

type Props = {
  blog: PostRecord; //
  locale: SiteLocale;
};

const SingleBlog = ({ blog, locale }: Props) => {
  const { title, seoTags, tags, _publishedAt, slug } = blog;

  return (
    <>
      <div className="relative h-full overflow-hidden rounded-xl bg-white shadow-one dark:bg-dark">
        <Link
          href={"/" + locale + "/posts/" + slug}
          className="relative block w-full overflow-hidden h-[230px]"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary  px-4 py-2 text-sm font-semibold capitalize text-primary-content">
            {tags[0].tag}
          </span>
          <div className="relative h-full w-full overflow-hidden">
            <DatoImage
              className="h-full w-full object-contain"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              data={seoTags!.image!.responsiveImage as ResponsiveImage}
            />
          </div>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={"/" + locale + "/posts/" + slug}
              className="mb-4 block h-16 text-xl text-black hover:text-primary≤"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color " />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
