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
            <span className="underline"></span>
          </h3>
          <p className={styles.description}>
            Currently diving deep into neural network architectures and deep learning fundamentals
            through UC Berkeley's CS182 (Designing, Visualizing and Understanding <span className='DO_ME'>Deep Neural Networks</span>)
            taught by Prof. Anant Sahai.
          </p>
          <span className={styles.Light}>2021 - 2026</span>
        </div>
      </article>
      <article className={styles.Know_me_more}>
        <article className={styles.Know_me_more__info}>
          <h2 className='reverse-underline'>2024 - Recap</h2>
          <span className='Dash'></span>
          <p>
            Started learning <span>ML/DL</span> from scratch in a self-study journey.
          </p>
          <span className='Dash'></span>
          <p>
            Finished CS189: Introduction to Machine Learning by UC Berkeley.
          </p>
          <span className='Dash'></span>
          <p>Started CS182: Deep Neural Networks by <span>UC Berkeley</span>.</p>
        </article>
      </article>
    </section>
  )
}
