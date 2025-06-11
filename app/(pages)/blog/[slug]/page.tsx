import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogPost, formatDate } from "@/lib/blog";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl rtl mx-auto px-4 pb-8">
        <article>
          <header className="pb-8">
            <div className="inline-flex items-center gap-2 text-md opacity-80">
              <Link href={"/"}>خانه</Link>/<Link href={"/blog"}>بلاگ</Link>/
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-md">
                <Image
                  height={30}
                  width={30}
                  alt="Profile"
                  className="rounded-full size-9"
                  src={"https://github.com/cwpslxck.png"}
                />
                <p>امین</p>
                <Link
                  target="_blank"
                  href={"https://x.com/cwpslxck"}
                  className="rounded-full mx-2 text-white bg-black px-4 gap-1 inline-flex items-center py-2 border"
                >
                  cwpslxck
                  <BsTwitterX className="size-3" />
                </Link>
              </div>
              <time className="text-sm opacity-80" dateTime={post.pubDate}>
                {formatDate(post.pubDate)}
              </time>
            </div>
          </header>

          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: post.description }}
              style={{ direction: "rtl" }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export const revalidate = 300;
