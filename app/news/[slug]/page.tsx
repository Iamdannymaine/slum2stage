import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib"
import { SingleNewsPage } from "@/views"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return <SingleNewsPage post={post} />
}
