import Parser from "rss-parser";
import { BlogPost, BlogFeed } from "@/types/blog";

const RSS_URL = "https://cwpslxck.blog.ir/rss/";

const parser = new Parser();

export async function fetchBlogFeed(): Promise<BlogFeed> {
  try {
    const feed = await parser.parseURL(RSS_URL);

    const posts: BlogPost[] = feed.items.map((item: any) => {
      const slug = extractSlugFromUrl(item.link || "");

      return {
        id: slug,
        title: item.title || "",
        description: item.description || item.content || "",
        pubDate: item.pubDate || "",
      };
    });

    return {
      title: feed.title || "",
      link: feed.link || "",
      description: feed.description || "",
      lastBuildDate: feed.lastBuildDate || "",
      posts,
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw new Error("Failed to fetch blog feed");
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const feed = await fetchBlogFeed();
    const post = feed.posts.find((p) => p.id === slug);
    return post || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

function extractSlugFromUrl(url: string): string {
  // Extract slug from URL like "https://cwpslxck.blog.ir/post/my-second-test-post"
  const match = url.match(/\/post\/([^\/\?#]+)/);
  if (match) {
    return match[1];
  }

  // Fallback: create slug from title or use timestamp
  return (
    url
      .split("/")
      .pop()
      ?.replace(/[^a-zA-Z0-9-]/g, "-") || Date.now().toString()
  );
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
