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

// MathDisplay component for rendering math expressions
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
                    strict: false,
                })
            } catch (error) {
                console.error("KaTeX parsing error:", error)
            }
        }
    }, [math, display])

    return <span ref={mathRef} />
}

// Custom Image component that overrides the default grayscale filter
function MdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      className={cn("max-w-full", props.className)}
      style={{
        filter: "none",  // Override the global grayscale filter
        mixBlendMode: "normal", // Override the global mix-blend-mode
        ...props.style,
      }}
    />
  )
}

// Admonition component for callouts
type AdmonitionType = "info" | "warning" | "danger" | "tip" | "note" | "seealso"

interface AdmonitionProps {
    type: AdmonitionType
    title?: string
    children: React.ReactNode
}

export const Admonition = ({ type, title, children }: AdmonitionProps) => {
    let bgColor = "bg-gray-50"
    let borderColor = "border-gray-400"
    let textColor = "text-gray-700"

    switch (type) {
        case "info":
            bgColor = "bg-blue-50"
            borderColor = "border-blue-400"
            textColor = "text-blue-700"
            break
        case "warning":
            bgColor = "bg-yellow-50"
            borderColor = "border-yellow-400"
            textColor = "text-yellow-700"
            break
        case "danger":
            bgColor = "bg-red-50"
            borderColor = "border-red-400"
            textColor = "text-red-700"
            break
        case "tip":
            bgColor = "bg-green-50"
            borderColor = "border-green-400"
            textColor = "text-green-700"
            break
        case "note":
            bgColor = "bg-indigo-50"
            borderColor = "border-indigo-400"
            textColor = "text-indigo-700"
            break
        case "seealso":
            bgColor = "bg-purple-50"
            borderColor = "border-purple-400"
            textColor = "text-purple-700"
            break
        default:
            break
    }

    return (
        <div className={`p-4 border-l-4 ${bgColor} ${borderColor} my-4`}>
            {title && <div className={`font-bold ${textColor} mb-2`}>{title}</div>}
            <div className={textColor}>{children}</div>
        </div>
    )
}

function CustomPre({ children, ...props }: any) {
  // Extract the code element from children
  const code = children?.props?.children || ''
  const language = children?.props?.className?.replace('language-', '') || 'text'

  return (
    <CodeBlock
      code={code.trim()}
      language={language}
    />
  )
}

// Custom code component for inline code
function CustomCode({ children, className, ...props }: any) {
  // If it has a language class, it's a code block (handled by pre)
  if (className?.startsWith('language-')) {
    return <code {...props}>{children}</code>
  }

  // Otherwise it's inline code
  return (
    <code
      className={cn(
        "font-mono text-sm",
        "bg-purple-100 dark:bg-purple-900/30",
        "text-purple-700 dark:text-purple-300",
        "px-1.5 py-0.5 rounded",
        "border border-purple-200 dark:border-purple-800/50"
      )}
      {...props}
    >
      {children}
    </code>
  )
}


// Define MDX components
export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="mt-8 mb-4 text-4xl">
            {children}
        </h1>
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
            <div className="my-4 flex justify-center text-red-500">
                <MathDisplay math={mathContent} display={true} />
            </div>
        )
    },

    // Use the next/image component for images
    img: MdxImage,

    // Override Next.js Image component integration
    Image: ({ src, alt, width, height }) => (
        <div className="my-6 relative rounded-lg overflow-hidden">
            <Image
                src={src || ""}
                alt={alt || ""}
                width={Number(width) || 800}
                height={Number(height) || 400}
                className="rounded-lg"
                loading="lazy"
                style={{ filter: "none", mixBlendMode: "normal" }}
            />
            {alt && (
                <figcaption className="text-sm text-center text-muted-foreground mt-2">
                    {alt}
                </figcaption>
            )}
        </div>
    ),

    p: ({ children }) => (
        <Text className="mb-4 text-black-500">{children}</Text>
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

    pre: CustomPre,
    // Override code for inline code styling
    code: CustomCode,
    // Custom components

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

    // Map the Admonition component for MDX usage
    Admonition: ({ type, title, children }: {
        type: AdmonitionType
        title?: string
        children: React.ReactNode
    }) => <Admonition type={type} title={title}>{children}</Admonition>,
}