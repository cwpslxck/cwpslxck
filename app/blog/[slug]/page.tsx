import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogFeed, formatDate } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const feed = await fetchBlogFeed();
  return feed.posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        

        <article className="">
          {/* Header */}
          <header className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <time className="text-sm text-gray-500" dateTime={post.pubDate}>
                {formatDate(post.pubDate)}
              </time>
            </div>

            <h1 className="text-4xl rtl  font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="p-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.description }}
              style={{ direction: "rtl" }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
