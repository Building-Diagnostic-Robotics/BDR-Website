// components/BlogPostPage.tsx
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Image from "next/image"
import { User, Calendar, Clock, ArrowLeft } from "lucide-react"
import BlogPostToolbar from "./BlogPostToolbar"
import Link from "next/link"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import remarkMath from 'remark-math'
import remarkRehype from "remark-rehype"
import rehypeKatex from "rehype-katex"
import rehypeStringify from "rehype-stringify"
import rehypeRaw from "rehype-raw"

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

  // Validate parameters
  if (!category || !slug) {
    console.error("Missing category or slug:", { category, slug })
    notFound()
  }

  // path pattern: app/blogs/{category}/{slug}/post.mdx
  const filePath = path.join(process.cwd(), "app/blogs", category, slug, "post.mdx")

  console.log("Looking for file at:", filePath)

  if (!fs.existsSync(filePath)) {
    console.log("File not found at:", filePath)
    notFound()
  }

  try {
    const file = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(file)
    const frontmatter = data as BlogMeta

    // Normalize LaTeX delimiters: support \[...\] and \(...\) by converting to $$...$$ and $...$
    const normalizedContent = content
      // display math: \[ ... \]  ->  $$ ... $$
      .replace(/\\\[([\s\S]*?)\\\]/g, (_match, inner) => `$$\n${inner}\n$$`)
      // inline math: \( ... \)   ->  $ ... $
      .replace(/\\\(([\s\S]*?)\\\)/g, (_match, inner) => `$${inner}$`)

    // Convert markdown to HTML using remark + rehype with KaTeX
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true }) // bridge mdast -> hast
      .use(rehypeKatex)                                 // render LaTeX with KaTeX
      .use(rehypeRaw)                                   // allow raw HTML in MD
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(normalizedContent)
    const contentHtml = String(processedContent)

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

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400 mb-4">
              {category === "project_profiles"
                ? "Project Profiles"
                : category === "tech_talk"
                ? "Tech Talk"
                : category === "owners_edge"
                ? "Owner's Edge"
                : category === "trend_tracker"
                ? "Trend Tracker"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{frontmatter.title}</h1>
            <BlogPostToolbar
              date={frontmatter.date}
              readTime={frontmatter.readTime}
              spotifyUrl={(frontmatter as any).spotifyUrl}
            />
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

          {/* Enhanced content formatting */}
          <div
            className="blog-content prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:leading-tight prose-h2:border-b prose-h2:border-white/20 prose-h2:pb-3
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:leading-tight
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
              prose-p:text-white/90 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:my-6 prose-ul:space-y-2
              prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-white/90 prose-li:leading-relaxed prose-li:text-lg
              prose-li:marker:text-teal-400 prose-li:marker:font-bold
              prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300 hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-white/80 prose-em:italic
              prose-code:text-teal-400 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/80 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8
              prose-hr:border-white/20 prose-hr:my-12"
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
