import React from 'react'
import styles from './contactMe.module.css'

export default function ContactMe() {
  return (
    <div className={styles.contactMeBody}>
        <h4>Contact Me</h4>
        <section className={styles.contactInfo}>
            <div>Image Box</div>
            <aside>
                <h5>Nicholas Chan</h5>
                <p>Email:</p>
                <p>Phone#:</p>
                <p>Github:</p>
            </aside>
        </section>
    </div>
  )
}