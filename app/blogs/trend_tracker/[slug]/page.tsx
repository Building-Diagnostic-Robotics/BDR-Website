// app/blogs/trends/[slug]/page.tsx
import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function TrendTrackerPostPage({ params }: Props) {
  const { slug } = await params

  console.log("TrendsPostPage rendering with slug:", slug)

  return <BlogPostPage category="trend_tracker" slug={slug} />
}