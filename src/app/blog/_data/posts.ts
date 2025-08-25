import { BlogPost } from "../_types/blog"

export const blogPosts: BlogPost[] = [
    {
        id:1,
        title: "A Recipe for Filtering Language Modelling Data",
        description: "A deep dive into the methodology and engineering required to transform terabytes of messy, " +
        "raw Common Crawl data into a high-quality dataset for training language models. " +
        "This post details a step-by-step filtering recipe, a scalable pipeline architecture, " +
        "and validates the final corpus by training a GPT-2 model.",
        date: "August 18, 2025",
        readingTime: "20 min read",
        slug: "data-pipeline"
    },

    {
        id: 2,
        title: "Does Tokenizer Leakage Actually Matter? An Experiment with OpenWebText\n",
        description: 'A controlled experiment deconstructing the dogma of "never train on the validation set" ' +
            ' that systematically investigates if including validation data in ' +
            'tokenizer training introduces subtle shortcuts that models exploit.' ,
        date: "Modified: August 24, 2025",
        readingTime: "15 min read",
        slug: "data-leakage-tokenization",
    },
    {
        id: 3,
        title: 'How to build an efficient BPE tokenizer in python',
        description: 'A step-by-step guide into building and designing an efficient BPE tokenizer' +
            'with a demystification of the different compromises',
        date: "june 20, 2025",
        readingTime: "25 min read",
        slug: "BPE-Tokenization",
    },
    {
        id: 4,
        title: "Positional Encoding heuristic understanding",
        description: 'This blog post offers a fun heuristic to' +
            ' understand positional encoding in high dimensions',
        date: "March 03, 2025",
        readingTime: "15 min read",
        slug: "Positional-Encoding",
    },
    {
        id: 5,
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
        id: 6,
        title: "RNNs motivation and challenges",
        description: "A different perspective to Recurrent Neural Networks",
        date: "February 25, 2025",
        readingTime: "15 min read",
        slug: "RNNs-Motivation-Challenges",
    }
] 