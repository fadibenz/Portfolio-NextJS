
export const socialLinks = [
    {
        name:'twitter',
        url: 'https://twitter.com/FadiBenzx',
        icon: '/icons/logo-twitter.svg'

    },
    {
        name:'linkedin',
        url: 'https://www.linkedin.com/in/fadi-benzaima-8a497721b/',
        icon: '/icons/logo-linkedin.svg'
    }, 
    {
        name:'github',
        url: 'https://github.com/fadibenz',
        icon: '/icons/logo-github.svg'
    }
]


// src/utils/constants.ts
export const skillsList = {
  frontend: [
    { id: 1, name: 'ReactJS', highlighted: true }, // Assuming ReactJS should be highlighted
    { id: 2, name: 'Redux & Context API' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'Tailwind CSS & Sass' },
    { id: 5, name: 'Webpack & Vite' },
    { id: 6, name: 'CSS3 & CSS modules' },
  ],
  other: [
    { id: 7, name: 'Express & NodeJS' },
    { id: 8, name: 'MongoDB' },
    { id: 9, name: 'Jest & Cypress' },
    { id: 10, name: 'Git & Github' },
    { id: 11, name: 'Python' },
  ],
};



export const journeyData = [
  {
    id: 1,
    year: '2024',
    primary: 'Deep Dive into ML',
    secondary: 'Transitioned my focus to AI, building a strong theoretical foundation with Berkeley\'s advanced ML curriculum.',
    position: 'right'
  },
  {
    id: 2,
    year: 'Q1 2025',
    primary: 'The Builder Phase',
    secondary: 'Built and open-sourced full-stack LLM infrastructure, from data curation pipelines to multi-GPU training loops.',
    position: 'left'
  },
  {
    id: 3,
    year: 'Q2 2025',
    primary: 'Research Internship @ QCRI',
    secondary: 'Joined the Qatar Computing Research Institute to contribute to state-of-the-art research in Large Multimodal Models.',
    position: 'right'
  },
  {
    id: 4,
    year: 'Q3 2025',
    primary: 'Systems & Specialization',
    secondary: 'Focused on low-level systems, optimizing GPU performance with Triton and pursuing independent research.',
    position: 'left'
  }
] as const;