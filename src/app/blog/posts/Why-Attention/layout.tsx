import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Attention as a Softened Hash Table',
    description: 'This blog post takes you on a journey to rediscover attention from first principles. ' +
        'Instead of treating attention as a black box, we break it down step by step, ' +
        'exploring its necessity, ' +
        'design choices, and theoretical foundations—all leading to ' +
        'the question that revolutionized deep learning: Is attention all we need?',
    openGraph: {
        title: 'Attention as a Softened Hash Table',
        description: 'This blog post takes you on a journey to rediscover attention from first principles. ' +
        'Instead of treating attention as a black box, we break it down step by step, ' +
        'exploring its necessity, ' +
        'design choices, and theoretical foundations—all leading to ' +
        'the question that revolutionized deep learning: Is attention all we need?',
        type: 'article',
        publishedTime: '2025-03-03',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}