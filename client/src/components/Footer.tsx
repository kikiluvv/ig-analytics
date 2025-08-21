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
                    <a href="https://github.com/kikiluvv/ig-analytics" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="mailto:1kikiluvv@gmail.com" target="_blank" rel="noreferrer">
                        Contact
                    </a>
                    <a href="/docs" rel="noreferrer">
                        Docs
                    </a>
                </nav>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} appeal2heaven... all rights reserved.
                </p>
            </div>
        </footer>
    );
}
