import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Image from "next/image"
import { User, Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

interface Props {
  category: string
  slug: string
}

interface BlogMeta {
  title: string
  author: string
  authorRole: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  excerpt: string
}

export default async function BlogPostPage({ category, slug }: Props) {
  console.log("BlogPostPage called with:", { category, slug })

  // Try multiple possible file paths
  const possiblePaths = [
    path.join(process.cwd(), "app/blogs", category, slug, "post.mdx"),
    path.join(process.cwd(), "app/blogs", category, `${slug}.mdx`),
  ]

  let filePath: string | null = null
  let fileExists = false

  for (const possiblePath of possiblePaths) {
    console.log("Checking path:", possiblePath)
    if (fs.existsSync(possiblePath)) {
      filePath = possiblePath
      fileExists = true
      console.log("Found file at:", possiblePath)
      break
    }
  }

  if (!fileExists || !filePath) {
    console.log("File not found, calling notFound()")
    notFound()
  }

  try {
    const file = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(file)
    const frontmatter = data as BlogMeta

    // Convert markdown to HTML using remark
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    console.log("Successfully loaded post:", frontmatter.title)

    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header with back button */}
        <div className="border-b border-white/10">
          <div className="container max-w-4xl py-6 px-4">
            <Link
              href="/blogs"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        <article className="container max-w-4xl py-16 px-4">
          {frontmatter.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={frontmatter.image || "/placeholder.svg?height=400&width=800"}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400 mb-4">
              {category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{frontmatter.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{frontmatter.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{frontmatter.readTime}</span>
              </div>
            </div>
          </div>

          {frontmatter.author && (
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
              <div className="size-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                <User className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <p className="font-medium">{frontmatter.author}</p>
                {frontmatter.authorRole && <p className="text-sm text-white/60">{frontmatter.authorRole}</p>}
              </div>
            </div>
          )}

          {/* Render the HTML content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/90 prose-a:text-teal-400 prose-strong:text-white prose-code:text-teal-400 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-ul:text-white/90 prose-ol:text-white/90 prose-li:text-white/90"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog link */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/blogs"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
          </div>
        </article>
      </div>
    )
  } catch (error) {
    console.error("Error reading blog post:", error)
    notFound()
  }
}
