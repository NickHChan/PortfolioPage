import React from 'react'
import styles from './contactMe.module.css'
import Link from 'next/link'

export default function ContactMe() {
  return (
    <div className={styles.contactMeBody}>
        <h4>Contact Me</h4>
        <section className={styles.contactInfo}>
            <div>Image Box</div>
            <aside>
                <h5>Nicholas Chan</h5>
                <p>Email: <b>Nickharuchan@gmail.com</b></p>
                <p>Github: <Link href='https://github.com/NickHChan' rel='noopener noreferral' target='_blank'><b>github.com/NickHChan</b></Link></p>
            </aside>
        </section>
    </div>
  )
}