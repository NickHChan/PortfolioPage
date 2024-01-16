'use client'
import React, {useContext} from 'react'
import styles from "./NavBar.module.css"
import {ScrollContext} from '../../helper/scrollToContext'
import { ThemeContext } from '@/app/helper/themeContext'


function Button() {
  const {scrollToTopPage} = useContext(ScrollContext);
  const {theme} = useContext(ThemeContext);

  if(theme === 'default'){
    return null
  } else{
    return(
      <button className={styles.button} onClick={scrollToTopPage}>NC</button>
    )
  }

}


export default function NavBar() {

  return (
    <div className={styles.navBody}>
      <Button/>
    </div>
  )
}
