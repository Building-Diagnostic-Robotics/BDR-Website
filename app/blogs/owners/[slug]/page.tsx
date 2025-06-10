import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OwnersPostPage({ params }: Props) {
  const { slug } = await params

  console.log("OwnersPostPage rendering with slug:", slug)

  return <BlogPostPage category="owners" slug={slug} />
}