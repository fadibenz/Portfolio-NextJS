'use client'

import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { Highlight } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Copy button component
const CopyButton = ({ code, language }: { code: string; language?: string }) => {
    const [copied, setCopied] = useState(false);
    const { theme: currentTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && (currentTheme === 'dark' || (
        !currentTheme &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ));

    const copy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!mounted) return null;

    return (
        <>
            <button
                onClick={copy}
                className={cn(
                    "absolute top-3 right-3",
                    "p-1.5 rounded-md",
                    "transition-all duration-300 ease-in-out",
                    "hover:bg-purple-500/10",
                    "z-10",
                    copied
                        ? isDark
                            ? "text-purple-400"
                            : "text-[#8839ef]"
                        : "text-gray-400 hover:text-purple-400"
                )}
                aria-label="Copy code"
            >
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
                    <div className={cn(
                        "absolute inset-0 transform transition-all duration-300",
                        copied
                            ? "opacity-0 rotate-45 scale-0"
                            : "opacity-100 rotate-0 scale-100"
                    )}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </div>
                    <div className={cn(
                        "absolute inset-0 transform transition-all duration-300",
                        copied
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-45 scale-0"
                    )}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                </div>
            </button>
            <div className="absolute top-3 right-3 flex items-center">
                {language && (
                    <div className={cn(
                        "px-2 py-1.5 rounded-md mr-8",
                        "text-[10px] sm:text-xs font-medium uppercase tracking-wider",
                        "transition-all duration-300",
                        copied
                            ? "opacity-0 translate-x-4"
                            : "opacity-100 translate-x-0",
                        isDark
                            ? "text-gray-400"
                            : "text-gray-500"
                    )}>
                        {language}
                    </div>
                )}
                <div className={cn(
                    "absolute right-8",
                    "text-[10px] sm:text-xs",
                    "transition-all duration-300",
                    "pointer-events-none",
                    isDark
                        ? "text-purple-400"
                        : "text-[#8839ef]",
                    copied
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                )}>
                    COPIED!
                </div>
            </div>
        </>
    );
};

interface CodeBlockProps {
    code: string;
    language: string;
    className?: string;
}

// Use the GitHub theme for better syntax highlighting
const lightTheme = {
    plain: {
        backgroundColor: '#ffffff',
        color: '#24292f'
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: { color: '#6a737d', fontStyle: 'italic' }
        },
        {
            types: ['namespace'],
            style: { opacity: 0.7 }
        },
        {
            types: ['string', 'attr-value'],
            style: { color: '#032f62' }
        },
        {
            types: ['punctuation', 'operator'],
            style: { color: '#24292f' }
        },
        {
            types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
            style: { color: '#005cc5' }
        },
        {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: { color: '#d73a49' }
        },
        {
            types: ['function', 'deleted', 'tag'],
            style: { color: '#6f42c1' }
        },
        {
            types: ['function-variable'],
            style: { color: '#6f42c1' }
        },
        {
            types: ['tag', 'selector', 'keyword'],
            style: { color: '#d73a49' }
        }
    ]
};

const darkTheme = {
    plain: {
        backgroundColor: '#0d1117',
        color: '#e6edf3'
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: { color: '#8b949e', fontStyle: 'italic' }
        },
        {
            types: ['namespace'],
            style: { opacity: 0.7 }
        },
        {
            types: ['string', 'attr-value'],
            style: { color: '#a5d6ff' }
        },
        {
            types: ['punctuation', 'operator'],
            style: { color: '#e6edf3' }
        },
        {
            types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
            style: { color: '#79c0ff' }
        },
        {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: { color: '#ff7b72' }
        },
        {
            types: ['function', 'deleted', 'tag'],
            style: { color: '#d2a8ff' }
        },
        {
            types: ['function-variable'],
            style: { color: '#d2a8ff' }
        },
        {
            types: ['tag', 'selector', 'keyword'],
            style: { color: '#ff7b72' }
        }
    ]
};

export default function CodeBlock({ code, language, className }: CodeBlockProps) {
    const { theme: currentTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Provide a fallback theme based on system preference
    const isDark = mounted && (currentTheme === 'dark' || (
        !currentTheme &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ));

    const theme = isDark ? darkTheme : lightTheme;

    // Show a basic pre tag until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className={cn(
                "relative my-4",
                "rounded-lg overflow-hidden",
                "border w-full",
                "bg-gray-50 border-gray-200",
                className
            )}>
                <pre className={cn(
                    monoFont.className,
                    "overflow-x-auto whitespace-pre-wrap break-words",
                    "p-4",
                    "text-[13px] sm:text-sm",
                    "text-gray-800 bg-gray-50"
                )}>
                    {code}
                </pre>
            </div>
        );
    }

    return (
        <div className={cn(
            "relative my-4",
            "rounded-lg overflow-hidden",
            "border w-full",
            isDark
                ? "bg-[#0d1117] border-[#30363d]"
                : "bg-white border-gray-200",
            className
        )}>
            <Highlight
                code={code}
                language={language}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={cn(
                            className,
                            monoFont.className,
                            "overflow-x-auto whitespace-pre-wrap break-words",
                            "transition-colors duration-200",
                            "p-4",
                            "text-[13px] sm:text-sm"
                        )}
                        style={style}
                    >
                        {tokens.slice(0, -1).map((line, i) => (
                            <div key={i} {...getLineProps({ line, className: "leading-6 sm:leading-7" })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <CopyButton code={code} language={language} />
        </div>
    );
}