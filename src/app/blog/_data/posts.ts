import { BlogPost } from "../_types/blog"

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Positional Encoding heuristic understanding",
        description: 'This blog post offers a fun heuristic to' +
            ' understand positional encoding in high dimensions',
        date: "March 03, 2025",
        readingTime: "15 min read",
        slug: "Positional-Encoding",
    },
    {
        id: 2,
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
        id: 3,
        title: "RNNs motivation and challenges",
        description: "A different perspective to Recurrent Neural Networks",
        date: "February 25, 2025",
        readingTime: "15 min read",
        slug: "RNNs-Motivation-Challenges",
    }
] 