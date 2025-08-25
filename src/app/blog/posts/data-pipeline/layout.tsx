import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "A Recipe for Filtering Language Modelling Data",
    description: "A deep dive into the methodology and engineering required to transform terabytes of messy, " +
        "raw Common Crawl data into a high-quality dataset for training language models. " +
        "This post details a step-by-step filtering recipe, a scalable pipeline architecture, " +
        "and validates the final corpus by training a GPT-2 model.",
    openGraph: {
        title: "A Recipe for Filtering Language Modelling Data",
        description: "A deep dive into the methodology and engineering required to transform terabytes of messy, " +
        "raw Common Crawl data into a high-quality dataset for training language models. " +
        "This post details a step-by-step filtering recipe, a scalable pipeline architecture, " +
        "and validates the final corpus by training a GPT-2 model.",
        type: 'article',
        publishedTime: '2025-08-18',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}