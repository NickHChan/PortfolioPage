import React from 'react'
import Article from '../reuse/Article'
import styles from './Achievement.module.css'
import { listOfGames } from './listOfGames'

export default function Achievement() {
  return (
    <section className={styles.achievenmentGrid}>
        {
            listOfGames.map((game, i) => {
                return(
                    <div key={i} className={styles[`gameRank${i}`]}>
                    <Article 
                    src={game.src}
                    alt={game.alt}
                    url={game.url}
                    width={game.width}
                    height={game.height}
                    game={game.game}
                    abbv={game.abbv}
                    paragraph={game.paragraph}
                    styleName={game.styleName}
                    />
                    </div>
                )
            })
        }
    </section>
  )
}
