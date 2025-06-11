import { NextResponse } from "next/server";
import { fetchBlogPost } from "@/lib/blog";

export async function GET({ slug }: { slug: string }) {
  try {
    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: "Post slug is required",
        },
        { status: 400 }
      );
    }

    const post = await fetchBlogPost(slug);

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: "Post not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: post,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch post",
      },
      { status: 500 }
    );
  }
}
