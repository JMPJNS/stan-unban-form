import styles from '../styles/Main.module.css'


export default function Discord() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Unban Formular
                </h1>

                <p className={styles.description}>
                    <img width="80%" src="https://lh3.googleusercontent.com/YE_ghD3LnLPG8EFjs24deIHOmSif_-Kxvtc7Vw56p2OulXgVboyTz2Ee3B0DMcItwmMfdjUgOhEdFNctt1uamGtNRCSL2yRKbYlqn_q2ZaCvpzG77vvl4qx5gh8H=w740"/>
                </p>

                <div className={styles.grid}>
                    <label className={styles.card}>
                        Grund des Bans
                        <textarea placeholder="beleidigung, werbung..." className={styles.tput} rows={3}/>
                    </label>
                    
                    <label className={styles.card}>
                        Dein Discord Name
                        <input placeholder="DeinName#0000..." className={styles.tput} type="text"/>
                    </label>
                    
                    <label className={styles.card}>
                        Deine Discord ID
                        <input placeholder="Deine ID..." className={styles.tput} type="text"/>
                    </label>
                </div>
            </main>
        </div>
    )
}