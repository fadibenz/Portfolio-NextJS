import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Positional Encoding heuristic understanding',
    description: 'A heuristic to understand positional encoding in high dimensions',
    openGraph: {
        title: 'Positional Encoding heuristic understanding',
        description: 'A heuristic to understand positional encoding high dimensions',
        type: 'article',
        publishedTime: '2025-03-25',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}