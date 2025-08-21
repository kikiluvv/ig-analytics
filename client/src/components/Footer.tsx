"use client";
import styles from "./styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.brand}>
                    🌐 ig-analytics <span>v0.1</span>
                </p>
                <nav className={styles.footerNav}>
                    <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                    <a href="https://openai.com" target="_blank" rel="noreferrer">
                        Docs
                    </a>
                </nav>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} ig-analytics. all rights reserved.
                </p>
            </div>
        </footer>
    );
}
