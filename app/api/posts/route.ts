import { NextRequest, NextResponse } from "next/server";
import { fetchBlogFeed } from "@/lib/blog";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");

    const feed = await fetchBlogFeed();

    let posts = feed.posts;

    // Handle pagination
    if (page && limit) {
      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
      const startIndex = (pageNum - 1) * limitNum;
      const endIndex = startIndex + limitNum;
      posts = posts.slice(startIndex, endIndex);
    } else if (limit) {
      const limitNum = parseInt(limit);
      posts = posts.slice(0, limitNum);
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          ...feed,
          posts,
          total: feed.posts.length,
          page: page ? parseInt(page) : 1,
          limit: limit ? parseInt(limit) : feed.posts.length,
        },
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
        error: "Failed to fetch posts",
      },
      { status: 500 }
    );
  }
}
