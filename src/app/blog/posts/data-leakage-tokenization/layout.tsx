import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Subtle data leakage through tokenizer training',
        description: 'A controlled experiment reveals that including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit, ' +
            '  leading to deceptive validation performance and worse generalization, ' +
            'despite no visible change in token statistics or compression',
    openGraph: {
        title: 'Subtle data leakage through tokenizer training',
        description: 'A controlled experiment reveals that including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit, ' +
            '  leading to deceptive validation performance and worse generalization, ' +
            'despite no visible change in token statistics or compression',
        type: 'article',
        publishedTime: '2025-06-18',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}