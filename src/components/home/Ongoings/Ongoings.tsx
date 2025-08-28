import Image from 'next/image'
import styles from './Ongoings.module.css'

export function Education() {
  return (
      <section className={`${styles.Add_info} left_border`}>
        <article className={styles.Education}>
          <div className={styles.imageContainer}>
            <Image
                src="/images/Neuronales Netz II.jpg"
                alt="ESI SBA"
                fill
                sizes="(max-width: 900px) 100vw, 260px"
                className={styles.image}
            />
          </div>
          <div>
            <h2 className={styles.Education__title}>
              <span className="reverse-underline">Current Ongoings</span>
            </h2>
            <h3 className={styles.subtitle}>
              <span className="underlinee"></span>
            </h3>
            <p className={styles.description}>
              I'm currently looking for a full-time research internship starting <span
                className='DO_ME'>January 2026</span>,
              I'm also open for remote research collaborations this fall, starting on September 2025.
            </p>
          </div>
        </article>
        <article className={styles.Know_me_more}>
          <article className={styles.Know_me_more__info}>
            <h2 className='reverse-underline'>2025 Highlights</h2>
            <span className='Dash'></span>
            <p>
              Went from ML fundamentals to engineering  LLM training and data pipelines
              from scratch.
            </p>
            <span className='Dash'></span>
            <p>
              Contributed to Large Multimodal Model research as an intern at QCRI.
            </p>
            <span className='Dash'></span>
            <p>
              Launched independent research into tokenizer-induced data leakage.
            </p>
          </article>
        </article>
      </section>
  )
}
