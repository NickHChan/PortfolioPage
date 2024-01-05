import React from 'react';
import Article from '../reuse/Article';
import questionMark from '../../../images/question_marks.svg'
import Image from 'next/image';
import styles from './MainArticle.module.css'

export default function MainArticle() {
  return (
    <section className={styles.main}>
      <Image 
      src={questionMark}
      alt='A picture of Nick Chan'
      height={100}
      width={100}
      />
        <p>Hello, I am Nick Chan, a dedicated web developer with a unique background in healthcare, and management. 
      My journey into the world of technology is self-driven, marked by a passion for learning and mastering programming.
       I am an enthusiastic gamer and have a appreciation for Psytrance music. 
       Currently, I am immersed in the concept of computer science. My goal is to leverage this knowledge and passion for learning into
      a successful and fulfilling career.
      </p>
    </section>

  )
}
