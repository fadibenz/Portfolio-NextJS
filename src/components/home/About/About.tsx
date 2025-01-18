// src/components/home/About/About.tsx
import Image from 'next/image'
import styles from './About.module.css'

export function About() {
  return (
    <section className={`${styles.About_me} left_border`}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/mainPic.jpg"
          alt="Profile"
          width={466}
          height={287}
          priority
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h2>
        <span className="reverse-underline">ABOUT ME</span>
      </h2>
      <h3>
        <span className="underline">
          Dedicated, ambitious, always an amateur.
        </span>
      </h3>
      <span className={styles.quote}>
        "In order for connection to happen, we have to allow ourselves to
        be seen— <span className={styles.DO_ME}>really seen</span>."
      </span>
      <span className="Dash" />
      <article className={styles.content}>
        <div>
          <p>
            <span className={styles.firstLetter}>M</span>y name is Fadi Benzaima,
            I'm a CS student and a Machine Learning enthusiast{" "}
            As we approach potential technological <span className='DO_ME'>singularity</span>, 
            my focus remains on understanding the theoretical foundations that make these advances possible.
            <Image
              src="/images/Me.jpg"
              alt="Personal"
              width={230}
              height={250}
              className={styles.inlineImage}
            />
            Rather than claiming expertise, I maintain the perspective of an eternal student - always questioning, always learning. 
            I'm interested by both the technical and philosophical aspects of artificial intelligence.
            <span className={styles.spacer} />
            <span className={styles.DO_ME}>I am</span> using this personal website to document my journey, share insights, 
            reflections, blog posts, my personal notes and more ! 
          </p>
        </div>
      </article>
    </section>
  )
}