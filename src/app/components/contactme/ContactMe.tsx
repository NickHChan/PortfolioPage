'use client'
import React, {useState, useEffect} from 'react'
import styles from './contactMe.module.css'
import Link from 'next/link'
import contactMePic from '../../../images/profilePic.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactMe() {
const [copied, setCopied] = useState<boolean>(false);

const copiedPopUp = {
  show:{
    opacity: 1,
    transition:{
      duration: 0.5
    },
    display: "block"
  },
  hidden:{
    opacity: 0,
    trasition:{
      duration: 0.5,
      delay: 0.5
    }
  },
    transitionEnd:{
      display:"none"
    }
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCopied(false)
    }, 1000)
    return( ()=>{
      clearInterval(timer)
    }
    )
  },[copied])

  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.currentTarget.value)
    setCopied(true)
  }

  return (
    <div className={styles.contactMeBody}>
        <header className={styles.title}>
          <h3>Contact Me</h3>
        </header>
        <section className={styles.contactInfo}>
            <Image 
              src={contactMePic}
              alt='A picture of Nick Chan'
              height={300}
              width={300}
              className={styles.image}
              />
            <aside className={styles.linkContainer}>
                <motion.div
                initial='hidden'
                animate={copied ? 'show' : 'hidden'}
                variants={copiedPopUp}
                >
                  <div className={styles.popupBG}>
                    <p>Copied!</p>
                  </div>
                </motion.div>
                <p>Email: <button className={styles.button}  value='Nickharuchan@gmail.com'onClick={handleOnClick}>Nickharuchan@gmail.com</button></p>
                <p>Github: <Link href='https://github.com/NickHChan' rel='noopener noreferral' target='_blank' className={styles.link}>Github.com/NickHChan</Link></p>
            </aside>
        </section>
    </div>
  )
}