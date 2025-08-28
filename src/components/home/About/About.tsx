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
        <span className="underlinee">
          Dedicated, ambitious, always an amateur.
        </span>
          </h3>
          <span className={styles.quote}>
        "In order for connection to happen, we have to allow ourselves to
        be seen— <span className={styles.DO_ME}>really seen</span>."
      </span>
          <span className="Dash"/>
          <article className={styles.content}>
              <div>
                  <p>
                      <span className={styles.firstLetter}>I</span>'m Fadi Benzaima. I build the systems that power and
                      explain large-scale AI. My work sits at the <span className='DO_ME'>intersection</span> of
                      engineering and research.
                      <Image
                          src="/images/Me.jpg"
                          alt="Personal"
                          width={230}
                          height={250}
                          className={styles.inlineImage}
                      />
                      <span className={styles.spacer}/>
                      <span className={styles.spacer}/>
                      I'm driven by a need to move beyond <span className='DO_ME'>alchemy</span> and toward a principled
                      understanding of how these
                      models work. Whether it's by engineering a custom GPU kernel or designing a controlled experiment,
                      my goal is the same: the quest for <span className='DO_ME'>good explanations</span>.
                      <span className={styles.spacer}/>
                      <span className={styles.spacer}/>
                      This website is my open-source notebook. Here, I document my process, share insights from my
                      projects, and explore the questions that drive my research.
                  </p>
              </div>
          </article>
      </section>
  )
}