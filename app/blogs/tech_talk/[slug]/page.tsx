import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function TechTalkPostPage({ params }: Props) {
  const { slug } = await params

  console.log("TechTalkPostPage rendering with slug:", slug)

  return <BlogPostPage category="tech_talk" slug={slug} />
}
