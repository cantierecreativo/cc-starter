import CardBlogBlock from "./CardBlogBlock";
import ImageBlock from "./ImageBlock";

export default function BlogListBlock({ data, locale }) {
  return null;
  return (
    <div className="container mx-auto py-10 flex gap-4 justify-between">
      {data.blogPost.map((post: any, i: number) => {
        return (
          <div key={post.id} className="w-1/3">
            <CardBlogBlock data={post} locale={locale} i={i} />
          </div>
        );
      })}
    </div>
  );
}
