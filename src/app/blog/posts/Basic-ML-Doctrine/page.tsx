import { MDXRemote } from 'next-mdx-remote/rsc'
import { readFileSync } from 'fs'
import path from 'path'

import BaseContainer from '@/components/layout/container/base-container'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import { DynamicBreadcrumb } from '@/components/ui/primitives/breadcrumb'
import { ThemeToggle } from '@/components/ui/theme/theme-toggle'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { mdxComponents } from '@/lib/mdx/mdx-components'
import styles from '../../_components/BlogHeader.module.css'

export default async function MySelfReflectionFor2025() {
  // Read MDX content
  const filePath = path.join(process.cwd(), 'src/app/blog/posts/my-2025-resolution/content.mdx')
  const source = readFileSync(filePath, 'utf8')

  return (
    <div className='container p-10'>
      <StackVertical gap="md">
        <article>
          <TextHeading as="h1" className={styles.header}>My 2025 Resolution: Beyond the Roadmaps, Beyond the Timelines</TextHeading>
          <Text variant="muted" size="xs" className="mb-8">January 14, 2025 | 5 min read</Text>
            <MDXRemote source={source} components={mdxComponents} />
        </article>
      </StackVertical>
      <div className='mb-20'></div>
    </div>
  )
}