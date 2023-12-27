import React from 'react';
import Article from '../reuse/Article';
import questionMark from '../../../images/question_marks.svg'

export default function MainArticle() {
  return (
    <Article
      src= {questionMark}
      alt='empty'
      width={100}
      height={100}
      paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu condimentum leo, in euismod diam. Nam scelerisque et dolor ac fringilla. 
      Cras vitae nulla egestas, cursus nibh quis, suscipit arcu. Vestibulum sed condimentum ante, id molestie erat. Donec posuere nisl nec orci 
      vestibulum gravida. Suspendisse ut euismod lacus. Suspendisse vitae diam in neque scelerisque pharetra. Cras dictum risus sed vestibulum hendrerit. 
      Curabitur feugiat nibh ac ultricies tincidunt. Phasellus sed ante euismod, cursus quam at, sagittis ipsum. Nunc dictum fringilla ex quis ornare.'
      styleName='main'
    />
  )
}
