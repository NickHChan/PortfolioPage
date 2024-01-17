'use client'
import React, {useState, useContext} from 'react'
import styles from './Footer.module.css'
import { motion } from 'framer-motion';
import {ScrollContext} from '../../helper/scrollToContext'
import { ThemeContext } from '@/app/helper/themeContext';

export default function Footer() {
const {scrollToProject, scrollToAchievements, scrollToContactMe} = useContext(ScrollContext);
const {theme} = useContext(ThemeContext);
const [isHover, toggleHover] = useState<boolean>(false);

const toggleHoverMenuOn = () => {
    toggleHover(true)
  }
const toggleHoverMenuOff = () => {
    toggleHover(false)
}
const subMenuAnimationBase = {
    show: {
        opacity: 1,
        transform: "translateY(-85px)",
        transition:{
            duration: 1
        },
        display: "block"
    },
    close:{
        opacity: 0,
        transform: "translateY(85px)",
        transition:{
            duration: 1
        },
    transitionEnd:{
        display: 'none'
    }   
    }
}
const subMenuAnimation = {
    show: {
        opacity: 1,
        transform: "translateY(-75px)",
        transition:{
            duration: 0.5,
            delay: 0.1
        },
        display: "block"
    },
    close:{
        opacity: 0,
        transform: "translateY(75px)",
        transition:{
            duration: 0.5,
            delay: 0.5
        },
    },
    transitionEnd:{
        display: 'none'
    }   
}
const subMenuAnimation2 = {
    show: {
        opacity: 1,
        transform: "translateY(-50px)",
        transition:{
            duration: 0.5,
            delay: 0.3
        },
        display: "block"
    },
    close:{
        opacity: 0,
        transform: "translateY(50px)",
        transition:{
            duration: 0.3,
            delay: 0.3
        },
    },
    transitionEnd:{
        display: 'none'
    }   
}
const subMenuAnimation3 = {
    show: {
        opacity: 1,
        transform: "translateY(-25px)",
        transition:{
            duration: 0.5,
            delay: 0.5
        },
        display: "block"
    },
    close:{
        opacity: 0,
        transform: "translateY(25px)",
        transition:{
            duration: 0.3,
            delay: 0.1
        },
    },
    transitionEnd:{
        display: 'none'
    }   
}
  return (
    <footer className={styles.footer}>
          <motion.div
            initial = 'close'
            animate={isHover ? 'show' : 'close'}
            variants={subMenuAnimationBase}
            onHoverStart={toggleHoverMenuOn}
            onHoverEnd={toggleHoverMenuOff}
            className={styles.subMenuBG}
            >
            </motion.div>
            <section className={styles.subMenuButtonContainer}>
                    <motion.div
                        initial = 'close'
                        animate={isHover ? 'show' : 'close'}
                        variants={subMenuAnimation}
                        onHoverStart={toggleHoverMenuOn}
                        onHoverEnd={toggleHoverMenuOff}
                        >
                        <button className={theme === 'day' || theme === 'default' ? styles.dayButton : styles.nightButton} onClick={scrollToProject}>PROJECTS</button>
                    </motion.div>
                    <motion.div
                        initial = 'close'
                        animate={isHover ? 'show' : 'close'}
                        variants={subMenuAnimation2}
                        onHoverStart={toggleHoverMenuOn}
                        onHoverEnd={toggleHoverMenuOff}
                        >
                        <button className={theme === 'day' || theme === 'default' ? styles.dayButton : styles.nightButton} onClick={scrollToAchievements}>ACHIEVEMENTS</button>
                    </motion.div>
                    <motion.div
                        initial = 'close'
                        animate={isHover ? 'show' : 'close'}
                        variants={subMenuAnimation3}
                        onHoverStart={toggleHoverMenuOn}
                        onHoverEnd={toggleHoverMenuOff}
                        >
                        <button className={theme === 'day' || theme === 'default' ? styles.dayButton : styles.nightButton} onClick={scrollToContactMe}>CONTACT ME</button>
                    </motion.div>            
            </section>



        <motion.div 
        className={styles.hoverMenu}
        onHoverStart={toggleHoverMenuOn}
        onHoverEnd={toggleHoverMenuOff}
        onClick={toggleHoverMenuOn}
        >
                <motion.div
                animate={{
                    rotate: isHover ? 45 : 0
                }}
                >+</motion.div>
        </motion.div>
    </footer>
  )
}
