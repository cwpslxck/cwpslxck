import Link from "next/link";
import { fetchBlogFeed, stripHtml, formatDate } from "@/lib/blog";

export default async function BlogPage() {
  const feed = await fetchBlogFeed();

  return (
    <div className="max-w-4xl mx-auto px-5 py-8 rtl">
      <div className="grid grid-cols-2 gap-4">
        {feed.posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="w-full border bg-white border-black/10 rounded-md flex flex-col justify-between items-start overflow-hidden"
          >
            {/* Thumbnail Section */}
            <div className="w-full inset-0">
              <div className="aspect-video h-full bg-black flex items-center justify-center relative overflow-hidden"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 py-4 px-2">
              <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h2>

              <div className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                {stripHtml(post.description).substring(0, 150)}
                {stripHtml(post.description).length > 150 && "..."}
              </div>

              <div className="flex items-center justify-between">
                <time
                  className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                  dateTime={post.pubDate}
                >
                  {formatDate(post.pubDate)}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {feed.posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">هیچ مطلبی یافت نشد</p>
        </div>
      )}
    </div>
  );
}
