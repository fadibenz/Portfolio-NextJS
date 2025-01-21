// src/components/layout/Footer/Footer.tsx
import Image from 'next/image'
import { socialLinks } from '@/utils/constants'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer>
      <section className={styles.Footer_main}>
        <article className={styles.Footer_info}>
          <h2>
            <span className="underlinee">GET IN TOUCH !</span>
          </h2>
          <p>Anything to share ?
            Please feel free to ping me at <a type='email' href='benzaimafadi@gmail.com'>
              <span className='DO_ME underlinee'>benzaimafadi@gmail.com</span></a> or 
              <a href='https://twitter.com/FadiBenzx'>
              <span className='DO_ME underlinee'>Twitter</span></a> 
          if you have any questions or just want to talk.</p>
        </article>
      </section>
      <section className={styles.Footer_secondary}>
        <hr />
        <span className="reverse-underline-black">Copyright 2024</span>
        <span className={styles.Dot}>.</span>
        <span className="reverse-underline-black">Fadi Benzaima</span>
        <section className={styles.Social_container}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={30}
                height={30}
                className="transition-transform hover:scale-105"
              />
            </a>
          ))}
        </section>
      </section>
    </footer>
  )
}