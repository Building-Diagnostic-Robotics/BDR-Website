import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function TrendsPostPage({ params }: Props) {
  const { slug } = await params

  console.log("TrendsPostPage rendering with slug:", slug)

  return <BlogPostPage category="trends" slug={slug} />
}