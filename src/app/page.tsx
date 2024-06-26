'use client'
import React, {useContext, useEffect, useState, useRef} from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import MainArticle from './components/mainArticle/MainArticle'
import NightArticle from './components/nightArticle/NightArticle'
import Achievement from './components/achievement/Achievement'
import Projects from './components/projects/Projects'
import SongArtist from './components/songArtist/SongArtist'
import ContactMe from './components/contactme/ContactMe'
import { ScrollContext } from './helper/scrollToContext'
import {onLightnessChange} from './helper/lightnessChangeFunction'
import arrowPic from '../images/svg/arrow.svg'
import headerPic from '../images/svg/headerPic.svg'
import { ThemeContext } from './helper/themeContext'

type OrientationTypes = 'portrait-primary' | 'landscape-primary' | 'portrait-secondary' | 'landscape-secondary';

export default function Home() {
  const [hue, setHue] = useState<number>(44);
  const [imageFadeOut, setImageFadeOut] = useState<number>(100)
  const [imageFadeIn, setImageFadeIn] = useState<number>(0)
  const [imageSlideFade, setImageSlideFade] = useState<number>(100)
  const [imageSlideOut, setImageSlideOut] = useState<number>(50)
  const [saturation, setSaturation] = useState<number>(100);
  const [lightness, setLightness] = useState<number>(90);
  const { topPageRef, projectsRef, achievementRef, contactMeRef, aboutMeRef, scrollToAboutMe} = useContext(ScrollContext)
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    const handleOnScroll = () => {
      const winWidth = window.innerWidth;
      let yPosition;
      if(winWidth > 768){
        yPosition = Math.floor((window.scrollY/100)*1.3)
      } else{
        yPosition = Math.floor((window.scrollY/100)*2.75)
      }
      let yMax = Math.floor(window.screenY / 100)
      let imageFadeOutNumber = (((yMax+100) - (yPosition * 18)))
      let imageSlideOutFadeNumber = (((yMax+100)-(yPosition * 48) )/100)
      let imageSlideOutNumber = (((yMax+60) - (yPosition * 380)))
      let imageFadeInNumber = (((yPosition * 30) -(yMax+100))/100)
      let newNum = ((yMax - yPosition) * 1.5) + 90;
      setImageFadeOut(imageFadeOutNumber)
      setImageFadeIn(imageFadeInNumber)
      setImageSlideOut(imageSlideOutNumber)
      setImageSlideFade(imageSlideOutFadeNumber)
      
      setLightness(newNum)
      if(lightness <= 85.5 && lightness >= 84){
        scrollToAboutMe()
      }
    }

    window.addEventListener('scroll', handleOnScroll, {passive: true})
    onLightnessChange(lightness, setHue,setSaturation, setTheme);


    return(()=>{
      window.removeEventListener('scroll', handleOnScroll)
    })
  },[lightness, setTheme, scrollToAboutMe])

  //Scrolls to top of page if user refreshes the page
  useEffect(()=>{
    window.onbeforeunload = function(){
      window.scrollTo(0, 0);
    }

  },[])

  const orientation = useRef<OrientationTypes>();

  useEffect(()=>{
    orientation.current = window.screen.orientation.type;
  },[orientation])


  return (
    <main className={theme === 'day' ? styles.mainDay : (theme === 'night' ? styles.mainNight : (theme === 'default' ? styles.default : styles.mainmidDay))} style={{backgroundColor:`hsl(${hue},${saturation}%,${lightness}%)`}}>
      <header className={styles.header}  ref={topPageRef}>
        <section style={{transform:`translate(${imageSlideOut}px)`, opacity:`${imageSlideFade}`}}>
          <Image
          src={headerPic}
          alt='Picture of my name Nick Chan'
          height={400}
          width={300}
          quality={100}
          className={styles.headerPic}
          />
        </section>
        <section className={styles.subHeader} style={{opacity:`${imageFadeOut}%`}}>
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
      <article  ref={aboutMeRef} className={styles.aboutMe1} style={orientation.current === "landscape-primary" || orientation.current === "landscape-secondary" ? {opacity:`${imageFadeIn}`} : {}}>About Daytime Nick</article>
      <MainArticle/>
      <section ref={projectsRef}></section>
      <h2 className={styles.subTitle1}>A Few Projects I Have Worked On</h2>
      <Projects/>
      <article className={styles.aboutMe2} >About Nighttime Nick</article>
      <NightArticle/>
      <h2 className={styles.subTitle2} ref={achievementRef}>My Gaming Achievements</h2>
      <Achievement/>
      <h2 className={styles.subTitle3}>My Favourite Music Artists</h2>
      <SongArtist/>
      <section ref={contactMeRef}></section>
      <ContactMe/>
    </main>
  )
}
