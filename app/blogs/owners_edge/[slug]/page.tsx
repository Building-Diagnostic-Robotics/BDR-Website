import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OwnersEdgePostPage({ params }: Props) {
  const { slug } = await params

  console.log("OwnersEdgePostPage rendering with slug:", slug)

  return <BlogPostPage category="owners_edge" slug={slug} />
}