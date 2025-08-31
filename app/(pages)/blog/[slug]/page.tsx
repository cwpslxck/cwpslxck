import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogPost, formatDate } from "@/lib/blog";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";

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
              <Link title="Visit home page" href={"/"}>
                خانه
              </Link>
              /
              <Link title="Visit blog page" href={"/blog"}>
                بلاگ
              </Link>
              /
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
                  loading="lazy"
                  className="rounded-full size-9"
                  src={"https://github.com/cwpslxck.png"}
                />
                <p>امین زارع</p>
                <Link
                  title="Visit my LinkedIn"
                  target="_blank"
                  href={"https://www.linkedin.com/in/aminzare2005/"}
                  className="p-2"
                >
                  <FiLinkedin className="size-5" />
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
