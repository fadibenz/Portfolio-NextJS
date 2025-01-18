
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
    year: '2021',
    primary: 'CS Degree',
    secondary: 'Started studying CS at ESI-SBA.',
    position: 'right'
  },
  {
    id: 2,
    year: '2022',
    primary: 'Web development',
    secondary: 'Started my journey as a web developer.',
    position: 'left'
  },
  {
    id: 3,
    year: '2023',
    primary: 'USA',
    secondary: 'First time abroad! I was part of a student exchange program.',
    position: 'right'
  },
  {
    id: 4,
    year: '2024',
    primary: 'Machine Learning',
    secondary: 'Started learning ML through the courses of UC Berkeley.',
    position: 'left'
  }
] as const