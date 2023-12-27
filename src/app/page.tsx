import styles from './page.module.css'
import MainArticle from './components/mainArticle/MainArticle'
import Achievement from './components/achievement/Achievement'

export default function Home() {
  return (
    <main className={styles.main}>

      In Development
      <MainArticle/>
      <p>Some Of My Gaming Achievements</p>
      <Achievement/>
    </main>
  )
}
