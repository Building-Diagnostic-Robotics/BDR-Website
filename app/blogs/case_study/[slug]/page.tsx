import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPostPage({ params }: Props) {
  const { slug } = await params

  console.log("CaseStudyPostPage rendering with slug:", slug)

  return <BlogPostPage category="case_study" slug={slug} />
}
