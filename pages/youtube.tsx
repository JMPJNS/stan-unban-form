import styles from '../styles/Main.module.css'
import Header from "../components/header";


export default function Youtube() {
    return (
        <div className={styles.container}>
            <Header backButton={true}/>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Unban Formular
                </h1>

                <p className={styles.description}>
                    <img width="80%" src="https://lh5.googleusercontent.com/s3QxcKfnSXfmCMN_lQIcVs357lVH_acwTADl_K0sWZWt_ulPfnOEQxkmH0rN9sJiPjrMTdhQR2ZbGkFhXm1rmJFyQEF3Xtp1QKH0nS8a8DR5C49lTODrS_v50LLM=w740"/>
                </p>

                <div className={styles.grid}>
                    <label className={styles.card}>
                        Grund des Bans
                        <textarea placeholder="beleidigung, werbung..." className={styles.tput} rows={3}/>
                    </label>
                    
                    <label className={styles.card}>
                        Link zu deinem YouTube Profil
                        <input placeholder="https://youtube.com/channel/..." className={styles.tput} type="text"/>
                    </label>
                </div>
            </main>
        </div>
    )
}