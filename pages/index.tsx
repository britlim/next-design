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

      <header className={styles.header}>
      <div className={styles.notRightHeader}>
      <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36"><path fill="currentColor" d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
      <h3 id={styles.menuh3}>MENU</h3>
      </div>
      <h1 className={styles.branding}>Off the Grid</h1>
      <div className={styles.rightHeader}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="currentColor" d="m13 37.45 11-4.65 11 4.65V8.75H13ZM10 42V8.75q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1V42l-14-6ZM35 8.75H13h22Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="currentColor" d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="currentColor" d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"/></svg>
      </div>
      </header>
      
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
