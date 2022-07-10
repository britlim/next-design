import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Off The Grid</title>
        <meta name="next designed" content="off-the-grid" />
        <link rel="" href="" />
      </Head>
      <h1 className={styles.branding}>Off the Grid</h1>
      <main className={styles.main}>
    
        <p>Typical Typography<br/>
        contrast contrast
        </p>
        HERO<br />
        content<br />
      </main>

      <footer className={styles.footer}>
        footer here
      </footer>
    </div>
  )
}

export default Home
