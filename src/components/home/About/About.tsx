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
            I'm a results-oriented Front-End{" "}
            <span className='DO_ME'>web developer</span> with a global
            perspective through enriching experiences in Algeria, Finland
            and the United States.
            <Image
              src="/images/Me.jpg"
              alt="Personal"
              width={230}
              height={250}
              className={styles.inlineImage}
            />
            I have comprehensive experience in modern web development,
            creating web applications using React and complementing them with
            web services built on Node.js.
            <span className={styles.spacer} />
            <span className={styles.DO_ME}>I aimed </span> to give the design
            a touch of my fondness for newspapers. I remember waiting for my
            dad to bring home the daily newspaper so I could catch up on
            what's happening in the world. Hence, my portfolio is influenced
            by the old-school newspaper vibe.
          </p>
        </div>
      </article>
    </section>
  )
}