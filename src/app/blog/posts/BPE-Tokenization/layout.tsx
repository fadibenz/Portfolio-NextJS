import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'How to build an efficient BPE tokenizer in python',
        description: 'A step-by-step guide into building and designing an efficient BPE tokenizer' +
            'with a demystification of the different compromises',
    openGraph: {
        title: 'How to build an efficient BPE tokenizer in python',
        description: 'A step-by-step guide into building and designing an efficient BPE tokenizer' +
            'with a demystification of the different compromises',
        type: 'article',
        publishedTime: '2025-06-20',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}