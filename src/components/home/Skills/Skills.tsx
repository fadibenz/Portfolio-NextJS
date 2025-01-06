// src/components/home/Skills/Skills.tsx
import Image from 'next/image'
import { skillsList } from '@/utils/constants'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section className={styles.Skills}>
      <h2>
        <span className="reverse-underline">SKILLS</span>
      </h2>
      <h3>
        <span className="underline">"It's a process"</span>
      </h3>
      <article className={styles.frontEnd}>
        <h3>Front-End:</h3>
        <ul>
          {skillsList.frontend.map((skill) => (
            <li key={skill.id}>
              <span className={skill.highlighted ? 'DO_ME' : ''}>
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </article>
      
      <span className="Dash" />
      
      <article className={styles.other}>
        <h3>Other:</h3>
        <ul>
          {skillsList.other.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </article>
      <Image
        src="/images/web.png"
        alt="Web Development"
        width={200}
        height={170}
        className={styles.imageContainer}
      />
    </section>
  )
}