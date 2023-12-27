import React from 'react'
import Nav from './Nav';
import styles from "./NavBar.module.css"

const navigationMenu: string[] = ["home", "projects", "contact"];



export default function NavBar() {
  return (
    <div className={styles.navBody}>
      <ul className={styles.ul}>
        {
          navigationMenu.map((menuItem, i) => {return (
              <li key={i} className={styles.li}>
                <Nav navItem={menuItem}/>
              </li>
          )
})
        }
      </ul>
    </div>
  )
}
