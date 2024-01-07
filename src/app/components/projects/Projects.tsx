import React from 'react'
import styles from './project.module.css'
import { listOfProjects } from './listOfProjects'
import ProjectBase from '../reuse/Projectbase'
import { useRef } from 'react'
import {motion, useTransform, useScroll, easeInOut, useVelocity} from 'framer-motion'

export default function Projects() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress,[0,1],['1%', '-118%'])
  const skewVelocity = useVelocity(scrollYProgress)
  const skew = useTransform(skewVelocity,[-1,-0.5,0,0.5,1],['10deg','5deg','0deg','-5deg','-10deg'],{ease: easeInOut})

  return (
    <div ref={targetRef} className={styles.projectBody}>
      <h4>A few projects I have worked on</h4>
      <div className={styles.stickyBody}>
        <motion.div style={{x, skew}} className={styles.projectInfoContainer}>
          {
            listOfProjects.map((project, i) => {
              return(
                <div key={i}>
                  <ProjectBase 
                    src={project.src}
                    alt={project.alt}
                    width={350}
                    height={400}
                    project_Name={project.project_Name}
                    project_summary={project.project_summary}
                    frameWork={project.frameWork}
                    language={project.language}
                    styling={project.styling}
                    hosting={project.hosting}
                    role={project.role}
                    webLink={project.webLink}
                    linkworks={project.linkworks}
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

