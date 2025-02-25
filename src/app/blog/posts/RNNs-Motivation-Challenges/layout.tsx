import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'RNNs motivation and challenges',
    description: 'A different perspective to Recurrent Neural Networks',
    openGraph: {
        title: 'RNNs motivation and challenges',
        description: 'A different perspective to Recurrent Neural Networks',
        type: 'article',
        publishedTime: '2025-02-25',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}