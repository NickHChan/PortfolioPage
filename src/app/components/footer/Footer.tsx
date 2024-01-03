'use client'
import React, {useState} from 'react'
import styles from './Footer.module.css'
import { motion } from 'framer-motion';

export default function Footer() {

const [isHover, toggleHover] = useState<boolean>(false);

const toggleHoverMenu = () => {
    toggleHover(!isHover)
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
        >
            <div className={styles.subMenuBG}>
                <aside>
                    <button className={styles.button}>Projects</button>
                    <button className={styles.button}>Achievments</button>
                    <button className={styles.button}>Contact Me</button>
                </aside>
            </div>
        </motion.div>
        <motion.div 
        className={styles.hoverMenu}
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
        >+
        </motion.div>
    </footer>
  )
}
