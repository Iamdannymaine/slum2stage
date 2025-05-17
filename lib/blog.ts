import { BlogPost } from "@/types";
import { NewsData } from "@/json";

// Type assertion to ensure the imported JSON matches our BlogPost type
const blogPosts = NewsData as BlogPost[];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  // Sort by date (newest first) and take the specified number
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedBlogPosts(
  currentPostId: string,
  count = 3
): BlogPost[] {
  // For simplicity, just return other posts (excluding the current one)
  // In a real app, you might use tags or categories to find truly related posts
  return blogPosts.filter((post) => post.id !== currentPostId).slice(0, count);
}
