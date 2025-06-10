import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function TechnologyPostPage({ params }: Props) {
  const { slug } = await params

  console.log("TechnologyPostPage rendering with slug:", slug)

  return <BlogPostPage category="technology" slug={slug} />
}
