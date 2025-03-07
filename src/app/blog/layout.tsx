import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Thoughts, reflections, and learnings from my journey',
    openGraph: {
        title: 'Blog',
        description: 'Thoughts, reflections, and learnings from my journey',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog',
        description: 'Thoughts, reflections, and learnings from my journey',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 