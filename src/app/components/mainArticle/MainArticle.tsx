import React from 'react';
import Article from '../reuse/Article';
import questionMark from '../../../images/question_marks.svg'

export default function MainArticle() {
  return (
    <Article
      src= {questionMark}
      alt='empty'
      width={150}
      height={150}
      paragraph='Hello, I am Nick Chan, a dedicated web developer with a unique background in healthcare, and management. 
      My journey into the world of technology is self-driven, marked by a passion for learning and mastering programming.
       I am an enthusiastic gamer and have a appreciation for Psytrance music. 
       Currently, I am immersed in the concept of computer science. My goal is to leverage this knowledge and passion for learning into
      a successful and fulfilling career  .'
      styleName='main'
    />
  )
}
