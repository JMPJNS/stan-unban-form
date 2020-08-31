import styles from '../styles/Main.module.css'


export default function Twitch() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Unban Formular
                </h1>

                <p className={styles.description}>
                    <img width="80%" src="https://lh5.googleusercontent.com/wePeZixtZ5xetFIBwMFgOpkz0g8s5FPzq5IOx_htMOSxMG4vUUi6NeAuaiFxzkHb4TiD7W1KR-46zhi1vLQoK94GQouRKAwIpV6RbMdEkDQ_oc9DhO_Clg4UP0Nd=w740"/>
                </p>

                <div className={styles.grid}>
                    <label className={styles.card}>
                        Grund des Bans
                        <textarea placeholder="beleidigung, werbung..." className={styles.tput} rows={3}/>
                    </label>
                    
                    <label className={styles.card}>
                        Link zu deinem Twitch Profil
                        <input placeholder="https://twitch.tv/..." className={styles.tput} type="text"/>
                    </label>

                    <label className={styles.card}>
                        Dein Twitch Name
                        <input placeholder="..." className={styles.tput} type="text"/>
                    </label>
                </div>
            </main>
        </div>
    )
}