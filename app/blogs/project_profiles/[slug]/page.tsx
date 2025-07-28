import BlogPostPage from "@/components/BlogPostPage"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectProfilesPostPage({ params }: Props) {
  const { slug } = await params

  console.log("ProjectProfilesPostPage rendering with slug:", slug)

  return <BlogPostPage category="project_profiles" slug={slug} />
}
