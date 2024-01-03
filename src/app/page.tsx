'use client'
import React, {useContext} from 'react'
import styles from './page.module.css'
import MainArticle from './components/mainArticle/MainArticle'
import Achievement from './components/achievement/Achievement'
import Projects from './components/projects/Projects'
import ContactMe from './components/contactme/ContactMe'
import { ScrollContext } from './helper/scrollToContext'

export default function Home() {
  const { topPageRef, projectsRef, achievementRef, contactMeRef} = useContext(ScrollContext)

  return (
    <main className={styles.main}>
      <section  ref={topPageRef}></section>
      In Development
      <MainArticle/>
      <section ref={projectsRef}></section>
        <Projects/>
       <h6 className={styles.h6} ref={achievementRef}>My Gaming Achievements</h6>
      <Achievement/>
      <section ref={contactMeRef}></section>
      <ContactMe/>
    </main>
  )
}
