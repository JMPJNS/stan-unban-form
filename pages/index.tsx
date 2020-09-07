import Head from 'next/head'
import styles from '../styles/Main.module.css'
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unban Formular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header backButton={false}/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Unban Formular
        </h1>

        <p className={styles.description}>
        Auf welcher Plattform wurdest du gebannt?
        </p>

        <div className={styles.grid}>
          <a href="/youtube" className={styles.card}>
            <h3>Youtube &rarr;</h3>
            <img width="auto" height="80px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/YouTube_icon.png"/>
          </a>

          <a href="/discord" className={styles.card}>
            <h3>Discord &rarr;</h3>
            <img width="auto" height="80px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTk4MTQyYWMtZjQxMC00MjNhLWJmMGItMzRjOWNiNWQ5NjA5XC9kYnRpZjVqLTYwMzA2ODY0LWQ2YjctNDRiNi1hOWZmLTY1ZThhZGNmYjkxMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.W3KM95rnj_ofajggtIrj5DA6xNti742Ho-VWcV1uYd4"/>
          </a>

          <a href="/twitch" className={styles.card}>
            <h3>Twitch &rarr;</h3>
            <img width="auto" height="80px" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?width=270"/>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
