// Skills.tsx
import Image from 'next/image'
import styles from './Journey.module.css'
import { journeyData } from '../../../utils/constants'

export function Skills() {
  return (
    <section className={styles.Skills}>
      <h2>
        <span className="reverse-underline">Journey timeline</span>
      </h2>
      <h3>
        <span className={styles.process}>This is a small breakdown of my journey so far!</span>
      </h3>

      <div className={styles.timeline}>
        <div className={styles.line} />

        {journeyData.map(({ id, year, primary, secondary, position }) => (
          <div key={id} className={`${styles.item} ${styles[position]}`}>
            <div className={styles.dot} />
            <div className={styles.content}>
              <span className={styles.year}>{year}</span>
              <h4 className={styles.primary}>{primary}</h4>
              <p className={styles.secondary}>{secondary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}