import React from 'react'
import styles from './project.module.css'
import { listOfProjects } from './listOfProjects'
import Article from '../reuse/Article'
import { useRef } from 'react'
import {motion, useTransform, useScroll} from 'framer-motion'

export default function Projects() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress,[0,1],['1%', '-109%'])

  return (
    <div ref={targetRef} className={styles.projectBody}>
      <h4>A few projects I have worked on</h4>
      <div className={styles.stickyBody}>
        <motion.div style={{x}} className={styles.projectInfoContainer}>
          {
            listOfProjects.map((project, i) => {
              return(
                <div key={i}>
                  <Article 
                    src={project.src}
                    alt={project.alt}
                    width={100}
                    height={100}
                    paragraph={project.project_Name}
                    addtional={project.role}
                    styleName='projects'
                  />
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}

