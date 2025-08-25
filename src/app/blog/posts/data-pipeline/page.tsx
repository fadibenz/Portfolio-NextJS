import { readFile } from "fs/promises"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import Text from "@/components/ui/text/text"
import { mdxComponents } from "@/lib/mdx/mdx-components"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrism from "rehype-prism-plus"
import styles from "../../_components/BlogHeader.module.css"
import mdxStyles from "@/styles/mdx-content.module.css"


interface BlogMetadata {
  title: string
  date: string
  readingTime: string
  description?: string
  tags?: string[]
  author?: string
}


export async function generateStaticParams() {
  // Add your logic to get all blog slugs
  return [{ slug: "basic-ml-doctrine" }]
}

export async function generateMetadata({ params }: any) {
  const { slug } = params
  // Add your logic to get blog metadata
  const metadata: BlogMetadata = {
    title: "A Recipe for Filtering Language Modelling Data",
    date: "August 18, 2025",
    readingTime: "20 min read",
    description: "A deep dive into the methodology and engineering required to transform terabytes of messy, " +
        "raw Common Crawl data into a high-quality dataset for training language models. " +
        "This post details a step-by-step filtering recipe, a scalable pipeline architecture, " +
        "and validates the final corpus by training a GPT-2 model.",
    tags: ["LLM", "Data Engineering", "NLP", "Data Curation", "Python", "Machine Learning"],
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

export default async function BlogPost({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    `src/app/blog/posts/data-pipeline/content.mdx`
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
    title: "A Recipe for Filtering Language Modelling Data",
    date: "August 18, 2025",
    readingTime: "20 min read",
    tags: ["LLM", "Data Engineering", "NLP", "Data Curation", "Python", "Machine Learning"]
  }

  return (
    <div className="px-6 sm:px-12 max-w-4xl mx-auto">
      <StackVertical gap="md">
        <header className="mb-12">
          <TextHeading as="h1" className={`${styles.header} text-4xl font-bold`}>
            {metadata.title}
          </TextHeading>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
            <div className="space-y-2">
              <Text variant="muted" size="xs" className="text-gray-600 dark:text-gray-400">
                {metadata.date} | {metadata.readingTime}
              </Text>
              {metadata.tags && (
                <div className="flex flex-wrap gap-2">
                  {metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Apply both Tailwind prose and custom CSS module */}
        <article className={`prose dark:prose-invert prose-headings:font-bold prose-a:text-purple-600 max-w-none ${mdxStyles.mdxContent}`}>
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