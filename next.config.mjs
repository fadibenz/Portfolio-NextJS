import createMDX from "@next/mdx"
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrism from 'rehype-prism-plus'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true
  }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm, {}], [remarkMath, {}]],
    rehypePlugins: [[rehypeKatex, {}], [rehypePrism, {}]],
    // Remove providerImportSource as it's causing serialization issues
  }
})

// Apply MDX configuration
export default withMDX(nextConfig)