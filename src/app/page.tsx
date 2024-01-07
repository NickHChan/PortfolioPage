'use client'
import React, {useContext, useEffect, useState, useRef} from 'react'
import styles from './page.module.css'
import MainArticle from './components/mainArticle/MainArticle'
import Achievement from './components/achievement/Achievement'
import Projects from './components/projects/Projects'
import ContactMe from './components/contactme/ContactMe'
import { ScrollContext } from './helper/scrollToContext'
import {onLightnessChange} from './helper/lightnessChangeFunction'

export default function Home() {
  const [hue, setHue] = useState<number>(44);
  const [saturation, setSaturation] = useState<number>(100);
  const [lightness, setLightness] = useState<number>(100);
  const { topPageRef, projectsRef, achievementRef, contactMeRef} = useContext(ScrollContext)

  const handleOnScroll = () => {
    let yPosition = Math.floor((window.scrollY/100)*1.3)
    let yMax = Math.floor(window.screenY / 100)
    let newNum = ((yMax - yPosition) * 1.5) + 90;
    setLightness(newNum)

  }

  useEffect(()=>{
   

    window.addEventListener('scroll', handleOnScroll, {passive: true})
    onLightnessChange(lightness, setHue,setSaturation);
    console.log(lightness)

    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[lightness])




  return (
    <main className={styles.main} style={{backgroundColor:`hsl(${hue},${saturation}%,${lightness}%)`}}>
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
