'use client'
import React, {useContext, useEffect, useState, useRef} from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import MainArticle from './components/mainArticle/MainArticle'
import Achievement from './components/achievement/Achievement'
import Projects from './components/projects/Projects'
import ContactMe from './components/contactme/ContactMe'
import { ScrollContext } from './helper/scrollToContext'
import {onLightnessChange} from './helper/lightnessChangeFunction'
import arrowPic from '../images/svg/arrow.svg'
import headerPic from '../images/svg/headerPic.svg'


export default function Home() {
  const [hue, setHue] = useState<number>(44);
  const [imageFade, setImageFade] = useState<number>(100)
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
    let imageFadeNumber = (((yMax+100) - (yPosition * 18)))
    let newNum = ((yMax - yPosition) * 1.5) + 90;
    console.log(imageFadeNumber)
    setImageFade(imageFadeNumber)
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
      <header className={styles.header}>
          <Image
          src={headerPic}
          alt='Picture of my name Nick Chan'
          height={400}
          width={500}
          className={styles.headerPic}
          />
        <section className={styles.subHeader} style={{opacity:`${imageFade}%`, transform:`translate(0 ${imageFade})`}}>
          <Image
          src={arrowPic}
          alt='Picture of an arrow pointing down'
          height={150}
          width={150}
          className={styles.arrowPic}
          />
          <p>Scroll down to know more about me!</p>
        </section>
      </header>
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
