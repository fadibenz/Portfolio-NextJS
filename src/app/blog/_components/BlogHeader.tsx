import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import styles from './BlogHeader.module.css'
export function BlogHeader() {
    return (
        <StackVertical gap="md">
            <div>
                <TextHeading as="h1" className={styles.header} weight="bold">
                    Blog
                </TextHeading>
                <Text variant="muted" size="sm" >
                    Thoughts on programming, machine learning, and technology.
                </Text>
                
            </div>
        </StackVertical>
    )
} 