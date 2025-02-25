import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Basic ML Doctrine',
    description: 'A deep, yet intuitive understanding of the basic principles of Machine Learning',
    openGraph: {
        title: 'Basic ML Doctrine ',
        description: '- A deep, yet intuitive understanding of the basic principles of Machine Learning',
        type: 'article',
        publishedTime: '2025-01-20T20:37:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Basic ML Doctrine',
        description: 'A deep, yet intuitive understanding of the basic principles of Machine Learning',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}