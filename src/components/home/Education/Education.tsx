// src/components/home/Education/Education.tsx
import Image from 'next/image'
import styles from './Education.module.css'

export function Education() {
  return (
    <section className={`${styles.Add_info} left_border`}>
      <article className={styles.Education}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Esi-sba.jpg"
            alt="ESI SBA"
            width={260}
            height={207}
            className={styles.imageContainer}
          />
        </div>
        <div>
          <h2 className={styles.Education__title}>
            <span className="reverse-underline">Education</span>
          </h2>
          <h3 className={styles.subtitle}>
            <span className="underline">ESI, Sidi-Bel-Abbes.</span>
          </h3>
          <p className={styles.description}>
            I'm currently a third year student in the Ecole Superieure en
            Informatique, Sidi-Bel-Abbes. Where i'm studying to get an
            engineering degree in CS.
          </p>
          <span className={styles.Light}>2021 - 2026</span>
        </div>
      </article>
    </section>
  )
}