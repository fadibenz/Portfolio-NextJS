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
            <span className="reverse-underline"></span>
          </h2>
          <h3 className={styles.subtitle}>
            <span className="underline">Current Ongoings</span>
          </h3>
            <p className={styles.description}>
            I'm currently a fourth-year student at the Ecole Supérieure en
            Informatique, Sidi-Bel-Abbes, where I'm studying to get an
            engineering degree in computer science.
            </p>
          <span className={styles.Light}>2021 - 2026</span>
        </div>
      </article>
        <article className={styles.Know_me_more}>
          <article className={styles.Know_me_more__info}>
            <h2 className='reverse-underline'>2024 - Recap</h2>
            <span className='Dash'></span>
            <p>
            Started learning <span >ML/DL</span> from scratch in a self-study journey.            </p>
            {/* <span className='Dash'></span>
                <p>native Arabic speaker, fluent English , fluent French.</p> */}
            <span className='Dash'></span>
            <p>
Finished CS189: Introduction to Machine Learning by UC Berkeley.            </p>
            <span className='Dash'></span>
          <p>Started CS182: Deep Neural Networks by <span >UC Berkeley</span>.</p>
            {/* <span className='Dash'></span>
                <p>I love philosophy, astronomy, music and arabic poetry.</p> */}
          </article>
        </article>
    </section>
  )
}


//  <p>
//               I’m currently learning how to design, visualize and understand Neural Nets.
//             </p>

//             <span className='Dash'></span>
//             <p>
//               I'm looking for the topic of my first ML research paper.
//             </p>
//             <span className='Dash'></span>
//             <p>I'm learning Optimization from MIT's course, Nonlinear Optimization.</p>
//             <span className='Dash'></span>
//             <p>I'm trying to build a presence in the AI side of twitter, people there are smart.</p>
