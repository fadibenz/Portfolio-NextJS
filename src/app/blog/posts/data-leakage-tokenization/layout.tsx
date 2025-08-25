import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Does Tokenizer Leakage Actually Matter? An Experiment with OpenWebText\n',
        description: 'A controlled experiment deconstructing the dogma of "never train on the validation set" ' +
            ' that systematically investigates if including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit.',
    openGraph: {
        title: 'Does Tokenizer “Leakage” Actually Matter? An Experiment with OpenWebText\n',
        description: 'A controlled experiment deconstructing the dogma of "never train on the validation set" ' +
            ' that systematically investigates if including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit.',
        type: 'article',
        publishedTime: '2025-06-24',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}