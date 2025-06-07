// app/blog/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { fetchBlogFeed, stripHtml, formatDate } from "@/lib/blog";
import { Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "Amin Zare | Blog",
};
const font = Rubik({
  subsets: ["arabic"],
});

export default async function BlogPage() {
  const feed = await fetchBlogFeed();

  return (
    <div className={font.className}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {feed.title || "Blog"}
          </h1>
          {feed.description && (
            <p className="text-xl text-gray-600">{feed.description}</p>
          )}
        </header>

        <div className="space-y-8">
          {feed.posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <time
                    className="text-sm text-gray-500"
                    dateTime={post.pubDate}
                  >
                    {formatDate(post.pubDate)}
                  </time>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                {post.description && (
                  <div className="text-gray-700 mb-4 line-clamp-3">
                    {stripHtml(post.description).substring(0, 200)}
                    {stripHtml(post.description).length > 200 && "..."}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ادامه مطلب
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {feed.posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">هیچ مطلبی یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
