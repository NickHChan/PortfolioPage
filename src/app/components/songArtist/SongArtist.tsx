import React from 'react'
import Article from '../reuse/Article'
import styles from './SongArtist.module.css'
import { listOfGames } from './listOfArtist'

export default function SongArtist() {
  return (
    <section className={styles.achievenmentGrid}>
        {
            listOfGames.map((game, i) => {
                return(
                    <div key={i} className={styles[`band${i}`]}>
                    <Article 
                    src={game.src}
                    alt={game.alt}
                    url={game.url}
                    width={game.width}
                    height={game.height}
                    game={game.name}
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
