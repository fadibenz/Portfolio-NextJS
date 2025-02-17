"use client"

import React, { useEffect, useRef } from "react"
import type { MDXComponents } from "mdx/types"
import TextHeading from "@/components/ui/text-heading/text-heading"
import Text from "@/components/ui/text/text"
import { List, ListItem } from "@/components/ui/list/list"
import Ruler from "@/components/ui/ruler/ruler"
import { cn } from "@/lib/utils/utils"
import { monoFont } from "@/styles/fonts/fonts"
import CodeBlock from "@/components/blocks/code-block/code-block"
import Image from "next/image"
import "katex/dist/katex.min.css"
import katex from "katex"

// ----------------------------------------------------------------------
// Custom Math Component
// ----------------------------------------------------------------------
const MathDisplay = ({
    math,
    display = false,
}: {
    math: string
    display?: boolean
}) => {
    const mathRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!math) return

        if (mathRef.current) {
            try {
                katex.render(math, mathRef.current, {
                    displayMode: display,
                    throwOnError: false,
                    strict: false, // More forgiving parsing
                })
            } catch (error) {
                console.error("KaTeX parsing error:", error)
            }
        }
    }, [math, display])

    return <span ref={mathRef} />
}

// ----------------------------------------------------------------------
// MDX Components Configuration
// ----------------------------------------------------------------------
export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <TextHeading as="h1" weight="bold" className="mt-8 mb-4 text-4xl">
            {children}
        </TextHeading>
    ),
    h2: ({ children }) => (
        <TextHeading as="h2" weight="bold" className="mt-6 mb-3">
            {children}
        </TextHeading>
    ),
    h3: ({ children }) => (
        <TextHeading as="h3" weight="medium" className="mt-4 mb-2">
            {children}
        </TextHeading>
    ),
    h4: ({ children }) => (
        <TextHeading as="h4" weight="medium" className="mt-3 mb-2">
            {children}
        </TextHeading>
    ),

    // Inline math (e.g. $...$)
    inlineMath: ({ children }) => {
        const mathContent =
            typeof children === "string"
                ? children
                : React.Children.toArray(children).join("")
        return (
            <span className="inline-block align-middle">
                <MathDisplay math={mathContent} display={false} />
            </span>
        )
    },

    // Display math (e.g. $$...$$)
    math: ({ children }) => {
        const mathContent =
            typeof children === "string"
                ? children
                : React.Children.toArray(children).join("")
        return (
            <div className="my-4 flex justify-center">
                <MathDisplay math={mathContent} display={true} />
            </div>
        )
    },

    img: ({ src, alt, width, height }) => (
        <div className="my-6 relative rounded-lg overflow-hidden">
            <Image
                src={src || ""}
                alt={alt || ""}
                width={Number(width) || 800}
                height={Number(height) || 400}
                className="rounded-lg"
                loading="lazy"
            />
            {alt && (
                <figcaption className="text-sm text-center text-muted-foreground mt-2">
                    {alt}
                </figcaption>
            )}
        </div>
    ),

    p: ({ children }) => (
        <Text className="mb-4 text-foreground dark:text-foreground">
            {children}
        </Text>
    ),

    ul: ({ children }) => <List className="mb-4">{children}</List>,
    ol: ({ children }) => (
        <List type="ordered" className="mb-4">
            {children}
        </List>
    ),
    li: ({ children }) => <ListItem>{children}</ListItem>,

    strong: ({ children }) => (
        <span className="font-bold text-foreground dark:text-foreground">
            {children}
        </span>
    ),
    em: ({ children }) => (
        <span className="italic text-muted-foreground dark:text-muted-foreground">
            {children}
        </span>
    ),

    code: ({ children, className }) => {
        const codeString = React.Children.toArray(children).join("")
        const match = /language-(\w+)/.exec(className || "")
        const language = match ? match[1] : ""
        if (!language) {
            return (
                <code
                    className={cn(
                        monoFont.className,
                        "px-1.5 py-0.5 mx-0.5 my-0.5",
                        "text-inherit",
                        "bg-purple-100/80 dark:bg-purple-900/50",
                        "text-purple-800 dark:text-purple-200",
                        "rounded-md",
                        "inline-block leading-normal"
                    )}
                >
                    {codeString}
                </code>
            )
        }
        return <CodeBlock code={codeString} language={language} />
    },

    blockquote: ({ children }) => (
        <blockquote
            className={cn(
                "pl-4 border-l-2 border-purple-500/50",
                "my-4 italic",
                "text-muted-foreground/90 dark:text-muted-foreground/90"
            )}
        >
            {children}
        </blockquote>
    ),
    hr: () => <Ruler color="gray" marginTop="md" marginBottom="md" />,

    a: ({ href, children, ...props }) => (
        <a
            href={href}
            className={cn(
                "text-purple-600 dark:text-purple-300",
                "hover:text-purple-700 dark:hover:text-purple-200",
                "transition-colors duration-200",
                "underline underline-offset-4",
                "decoration-purple-300/50 dark:decoration-purple-500/50",
                "hover:decoration-purple-400 dark:hover:decoration-purple-400"
            )}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...props}
        >
            {children}
        </a>
    ),
}
