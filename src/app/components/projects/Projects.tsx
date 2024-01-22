import React, { useEffect } from 'react'
import styles from './project.module.css'
import { listOfProjects } from './listOfProjects'
import ProjectBase from '../reuse/Projectbase'
import { useRef } from 'react'
import {motion, useTransform, useScroll, easeInOut, useVelocity} from 'framer-motion'


type OrientationTypes = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export default function Projects() {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress,[0,1],['1%', '-120%'])
  const skewVelocity = useVelocity(scrollYProgress)
  const skew = useTransform(skewVelocity,[-1,-0.5,0,0.5,1],['5deg','3deg','0deg','-3deg','-5deg'],{ease: easeInOut})
  const orientation = useRef<OrientationTypes>();

  useEffect(()=>{
    orientation.current = window.screen.orientation.type;
  },[orientation])

  return (
    <div ref={targetRef} className={styles.projectBody}>
      <div className={styles.stickyBody}>
        <motion.div style={ orientation.current === "landscape-primary" || orientation.current === "landscape-secondary" ? {x, skew} : {} } className={styles.projectInfoContainer}>
          {
            listOfProjects.map((project, i) => {
              return(
                <div key={i} >
                  <ProjectBase 
                    src={project.src}
                    alt={project.alt}
                    width={500}
                    height={550}
                    project_Name={project.project_Name}
                    project_summary={project.project_summary}
                    project_summary2= {project.project_summary2}
                    project_summary3={project.project_summary3}
                    project_summary4={project.project_summary4}
                    frameWork={project.frameWork}
                    language={project.language}
                    styling={project.styling}
                    hosting={project.hosting}
                    frameWorkName={project.frameWorkName}
                    languageName={project.languageName}
                    stylingName={project.stylingName}
                    hostingName={project.hostingName}
                    role={project.role}
                    webLink={project.webLink}
                    linkworks={project.linkworks}
                    i={i}
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

