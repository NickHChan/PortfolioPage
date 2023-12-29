'use client'
import React, {useContext} from 'react'
import styles from "./NavBar.module.css"
import {ScrollContext} from '../../helper/scrollToContext'


export default function NavBar() {
const {scrollToProject} = useContext(ScrollContext)
  return (
    <div className={styles.navBody}>
      <button className={styles.button} onClick={scrollToProject}>N</button>
      <button className={styles.button}>C</button>
    </div>
  )
}
