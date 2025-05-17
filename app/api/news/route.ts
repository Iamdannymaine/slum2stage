import { NextResponse } from "next/server";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const post = getBlogPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  }

  const posts = getAllBlogPosts();
  return NextResponse.json(posts);
}
