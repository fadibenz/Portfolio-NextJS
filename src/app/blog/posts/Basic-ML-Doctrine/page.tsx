import { MDXRemote } from "next-mdx-remote/rsc"
import { readFile } from "fs/promises"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import Text from "@/components/ui/text/text"
import { mdxComponents } from "@/lib/mdx/mdx-components"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrism from "rehype-prism-plus"
import styles from "../../_components/BlogHeader.module.css"


interface BlogMetadata {
  title: string
  date: string
  readingTime: string
  description?: string
  tags?: string[]
  author?: string
}

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  // Add your logic to get all blog slugs
  return [{ slug: "basic-ml-doctrine" }]
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  // Add your logic to get blog metadata
  const metadata: BlogMetadata = {
    title: "Basic ML Doctrine: deep, yet intuitive",
    date: "January 20, 2025",
    readingTime: "15 min read",
    description: "A deep dive into the fundamental principles of Machine Learning",
    // Add other metadata
  }

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const filePath = path.join(
    process.cwd(),
    `src/app/blog/posts/Basic-ML-Doctrine/content.mdx`
  )
  const source = await readFile(filePath, "utf8")

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism],
      },
    },
  })

  const metadata: BlogMetadata = {
    title: "Basic ML Doctrine: deep, yet intuitive",
    date: "January 20, 2025",
    readingTime: "15 min read",
  }

  return (
      <div className="px-12">
        <StackVertical gap="md">
          <header className="mb-12">
            <TextHeading as="h1" className={`${styles.header} text-4xl font-bold`}>
              {metadata.title}
            </TextHeading>
            <div className="flex items-center justify-between mt-4">
              <div className="space-y-2">
                <Text variant="muted" size="xs" className="text-gray-600 dark:text-gray-400">
                  {metadata.date} | {metadata.readingTime}
                </Text>
                {metadata.tags && (
                  <div className="flex gap-2">
                    {metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>
          <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-purple-600">
            {content}
          </article>

          {metadata.author && (
            <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Text variant="muted" size="sm" className="text-gray-600 dark:text-gray-400">
                Written by {metadata.author}
              </Text>
            </footer>
          )}
        </StackVertical>
      </div>
  )
}