// src/app/page.tsx
import { About } from '@/components/home/About/About';
import { Education } from '@/components/home/Ongoings/Ongoings';
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
