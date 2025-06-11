import Link from "next/link";
import { fetchBlogFeed, stripHtml } from "@/lib/blog";
import { IsNewPost } from "@/Components/isNewPost";

export default async function BlogPage() {
  const feed = await fetchBlogFeed();

  return (
    <div className="max-w-4xl mx-auto px-5 py-8 rtl">
      <div className="grid grid-cols-2 gap-4">
        {feed.posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="w-full border bg-white relative border-black/10 rounded-md flex flex-col justify-between items-start overflow-hidden"
          >
            <div className="flex grow flex-col justify-between gap-1 px-2 py-3">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 flex items-center gap-1">
                  {post.title}
                </h2>
                <IsNewPost pubDate={post.pubDate} />
              </div>

              <div className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                {stripHtml(post.description)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
