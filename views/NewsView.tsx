import { getAllBlogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/shared"
import { Section_Heading } from "@/components/shared/Section_Heading"


export function NewsView() {
  const blogPosts = getAllBlogPosts()

  return (
    <section className="w-full mx-auto py-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="py-10">
          <Section_Heading lgSize="56px" title="Our News" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
