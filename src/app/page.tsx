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
  const [lightness, setLightness] = useState<number>(90);
  const [isDay, setIsDay] = useState<'day' | 'midDay' | 'night'>('day');
  const { topPageRef, projectsRef, achievementRef, contactMeRef} = useContext(ScrollContext)

  const handleOnScroll = () => {
    const winWidth = window.innerWidth;
    let yPosition;
    if(winWidth > 768){
      yPosition = Math.floor((window.scrollY/100)*1.3)
    } else{
      yPosition = Math.floor((window.scrollY/100)*2.75)
    }
    let yMax = Math.floor(window.screenY / 100)
    let newNum = ((yMax - yPosition) * 1.5) + 90;
    setLightness(newNum)

  }

  useEffect(()=>{
    window.addEventListener('scroll', handleOnScroll, {passive: true})
    onLightnessChange(lightness, setHue,setSaturation, setIsDay);

    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[lightness])

  //Scrolls to top of page if user refreshes the page
  useEffect(()=>{
    window.onbeforeunload = function(){
      window.scrollTo(0, 0);
    }
  },[])



  return (
    <main className={isDay === 'day' ? styles.mainDay : (isDay === 'night' ? styles.mainNight : styles.mainmidDay)} style={{backgroundColor:`hsl(${hue},${saturation}%,${lightness}%)`}}>
      <section  ref={topPageRef}></section>
      <MainArticle/>
      <section ref={projectsRef}></section>
        <h6 className={styles.subTitle1}>A Few Projects I Have Worked On</h6>
        <Projects/>
       <h6 className={styles.subTitle2} ref={achievementRef}>My Gaming Achievements</h6>
      <Achievement/>
      <section ref={contactMeRef}></section>
      <ContactMe/>
    </main>
  )
}
