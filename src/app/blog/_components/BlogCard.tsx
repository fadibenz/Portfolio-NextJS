import Link from "next/link"
import { cn } from "@/lib/utils/utils"
import { StackVertical, StackHorizontal } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { BlogPost } from "../_types/blog"
import styles from './BlogHeader.module.css'

export function BlogCard({ post, isLast }: { post: BlogPost; isLast?: boolean }) {
    return (
        <div className="group">
            <Link 
                href={`/blog/${post.slug}`} 
                className={cn(
                    "block py-3",
                    "transition-all duration-300",
                    "hover:translate-x-1"
                )}
            >
                <article>
                    <StackVertical gap="xs">
                        <TextHeading 
                            as="h4" 
                            weight="medium" 
                            className={`${cn(
                                "group-hover:text-red-600 transition-colors duration-300"
                            )} ${styles.header}` }
                        >
                            {post.title}
                        </TextHeading>
                        <Text 
                            variant="muted"
                            size="sm"
                            className="line-clamp-2"
                        >
                            {post.description}
                        </Text>
                        <StackHorizontal className="text-muted-foreground" gap="xs">
                            <Text variant="muted" size="xs">
                                {post.date}
                            </Text>
                            <Text variant="muted" size="xs">•</Text>
                            <Text variant="muted" size="xs">
                                {post.readingTime}
                            </Text>
                        </StackHorizontal>
                    </StackVertical>
                </article>
            </Link>
            {/* Separator line with reduced top margin */}
            {!isLast && (
                <hr className="border-gray-500/20 mt-3" />
            )}
            {isLast && (<div className="mb-24"></div>)}
        </div>
    )
} 