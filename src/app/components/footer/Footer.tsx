'use client'
import React, {useState, useContext} from 'react'
import styles from './Footer.module.css'
import { motion } from 'framer-motion';
import {ScrollContext} from '../../helper/scrollToContext'

export default function Footer() {
const {scrollToProject, scrollToAchievements, scrollToContactMe} = useContext(ScrollContext)
const [isHover, toggleHover] = useState<boolean>(false);

const toggleHoverMenuOn = () => {
    toggleHover(true)
  }
const toggleHoverMenuOff = () => {
    toggleHover(false)
}

const subMenuAnimation = {
    show: {
        opacity: 1,
        rotateX: 0,
        transition:{
            duration: 0.5
        },
        display: "block"
    },
    close:{
        opacity: 0,
        rotateX: -15,
        transition:{
            duration: 0.5,
            delay: 0.5
        },
    transitionEnd:{
        display: 'none'
    }   
    }
}

  return (
    <footer className={styles.footer}>
         <motion.div
        initial = 'close'
        animate={isHover ? 'show' : 'close'}
        variants={subMenuAnimation}
        onHoverStart={toggleHoverMenuOn}
        onHoverEnd={toggleHoverMenuOff}
        >
            <div className={styles.subMenuBG}>
                    <button className={styles.button} onClick={scrollToProject}>Projects</button>
                    <button className={styles.button} onClick={scrollToAchievements}>Achievments</button>
                    <button className={styles.button} onClick={scrollToContactMe}>Contact Me</button>
            </div>
        </motion.div>
        <motion.div 
        className={styles.hoverMenu}
        onHoverStart={toggleHoverMenuOn}
        onHoverEnd={toggleHoverMenuOff}
        >+
        </motion.div>
    </footer>
  )
}
