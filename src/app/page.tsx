'use client'
import React, {useContext} from 'react'
import styles from './page.module.css'
import MainArticle from './components/mainArticle/MainArticle'
import Achievement from './components/achievement/Achievement'
import Projects from './components/projects/Projects'
import ContactMe from './components/contactme/ContactMe'
import { ScrollContext } from './helper/scrollToContext'
import { useState, useEffect } from 'react'

export default function Home() {
  const {projectsRef} = useContext(ScrollContext)

  return (
    <main className={styles.main}>

      In Development
      <MainArticle/>
      <section ref={projectsRef}></section>
        <Projects/>
       <h6 className={styles.h6}>My Gaming Achievements</h6>
      <Achievement/>
      <ContactMe/>
    </main>
  )
}
