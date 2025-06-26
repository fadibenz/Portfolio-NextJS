import { BlogPost } from "../_types/blog"

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Subtle data leakage through tokenizer training",
        description: 'A controlled experiment reveals that including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit, ' +
            '  leading to deceptive validation performance and worse generalization, ' +
            'despite no visible change in token statistics or compression',
        date: "june 24, 2025",
        readingTime: "15 min read",
        slug: "data-leakage-tokenization",
    },
    {
        id: 2,
        title: 'How to build an efficient BPE tokenizer in python',
        description: 'A step-by-step guide into building and designing an efficient BPE tokenizer' +
            'with a demystification of the different compromises',
        date: "june 20, 2025",
        readingTime: "25 min read",
        slug: "BPE-Tokenization",
    },
    {
        id: 3,
        title: "Positional Encoding heuristic understanding",
        description: 'This blog post offers a fun heuristic to' +
            ' understand positional encoding in high dimensions',
        date: "March 03, 2025",
        readingTime: "15 min read",
        slug: "Positional-Encoding",
    },
    {
        id: 4,
        title: "Attention as a Softened Hash Table",
        description: 'This blog post takes you on a journey to rediscover attention from first principles. ' +
        'Instead of treating attention as a black box, we break it down step by step, ' +
        'exploring its necessity, ' +
        'design choices, and theoretical foundations—all leading to ' +
        'the question that revolutionized deep learning: Is attention all we need?',
        date: "March 03, 2025",
        readingTime: "15 min read",
        slug: "Why-Attention",
    },
    {
        id: 5,
        title: "RNNs motivation and challenges",
        description: "A different perspective to Recurrent Neural Networks",
        date: "February 25, 2025",
        readingTime: "15 min read",
        slug: "RNNs-Motivation-Challenges",
    }
] 