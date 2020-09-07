import styles from "../styles/Main.module.css";

export default function Header(props: {backButton: boolean}) {
    return (
        <header className={styles.header}>
            {props.backButton ? <a className={`${styles.hb} ${styles.hbb}`} onClick={() => {window.history.back()}}> ←Back </a> : null}
            <a className={styles.hb}> Login </a>
        </header>
    )
}