import React from 'react'
import styles from './project.module.css'
import { listOfProjects } from './listOfProjects'
import Article from '../components/reuse/Article'

export default function Projects() {
  return (
    <div className={styles.projectBody}>
    <h4>Here are a few projects I have worked on</h4>
    <section className={styles.projectInfoContainer}>
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
    </section>
    </div>
  )
}

