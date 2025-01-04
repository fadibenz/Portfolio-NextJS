// src/components/home/Projects/Projects.tsx
import { useState } from 'react'
import Image from 'next/image'
import { MdClear, MdOutlineArrowForwardIos } from 'react-icons/md'
import { ProjectType } from '@/types'
import styles from './Projects.module.css'

interface ProjectsProps {
  items: ProjectType[]
}

export function Projects({ items }: ProjectsProps) {
  const [explore, setExplore] = useState(false)
  
  return (
    <aside>
      <section className={`${styles.exploreBar} ${explore ? 'hide-explore' : ''}`}>
        <button 
          className={styles.newsScroll} 
          onClick={() => setExplore(true)}
        >
          <div className={styles.projectsTitle}>
            <h3>Explore projects</h3>
            <MdOutlineArrowForwardIos className={styles.arrow} />
          </div>
        </button>
      </section>
      
      <section className={`${styles.projectsCnt} ${!explore ? 'hide-explore' : ''}`}>
        <button
          className={styles.clearBtn}
          onClick={() => setExplore(false)}
        >
          <MdClear className={styles.clear} />
        </button>
        
        <section className={styles.projectsContainer}>
          {items.map((project) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${explore ? 'scroll' : ''}`}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <header>
                  <h1>{project.name}</h1>
                </header>
                <hr />
                <div>
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={500}
                    height={240}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p>{project.desc}</p>
                  <div className={styles.tagContainer}>
                    {project.Tags.map((tag) => (
                      <p key={tag} className={styles.tag}>{tag}</p>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </section>
      </section>
    </aside>
  )
}