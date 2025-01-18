// src/app/page.tsx
import { About } from '@/components/home/About/About';
import { Education } from '@/components/home/Ongoings/Ongoings';
import { Projects } from '@/components/home/Projects/Projects';
import { Skills } from '@/components/home/Journey/Journey';
import styles from './page.module.css';
export default async function Home() {
  return (
    <article className={styles.Information}>
      <Education></Education>
      <About></About>
      <Skills></Skills>
    </article>
  );
}

// This ensures projects are generated at build time
// export async function generateStaticParams() {
  
//   return {
//     props: {
//       projects,
//     },
//     revalidate: 3600, // Revalidate every hour
//   };
// }