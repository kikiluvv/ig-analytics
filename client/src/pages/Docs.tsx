import styles from "./styles/docs.module.css";

export default function Docs() {
    return (
        <div className={styles.docs}>
            <h1 className={styles.title}>📖 Follow Back Analyzer – User Guide</h1>

            <section className={styles.section}>
                <h2 className={styles.heading}>1. Export Your Instagram Data</h2>
                <p>
                    To use the analyzer, you first need to export your Instagram account data.
                    This gives us the <strong>followers</strong> and <strong>following</strong> lists
                    straight from Instagram.
                </p>
                <ol className={styles.steps}>
                    <li>Open Instagram on your phone or computer.</li>
                    <li>Go to <em>Settings → Your Information → Download Data</em>.</li>
                    <li>Request a download in <strong>JSON format</strong>.</li>
                    <li>You’ll receive an email with a ZIP file. Extract it on your computer.</li>
                </ol>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>2. Upload Your Data</h2>
                <p>
                    Inside the extracted folder, look for:
                </p>
                <ul className={styles.fileList}>
                    <li><code>followers.json</code></li>
                    <li><code>following.json</code></li>
                </ul>
                <p>
                    On the analyzer page, upload these files to load your data.
                    The app will parse them automatically.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>3. Run the Analyzer</h2>
                <p>
                    After uploading, hit the <strong>Analyze</strong> button.
                    You’ll see:
                </p>
                <ul className={styles.results}>
                    <li>✅ People you follow who also follow you back</li>
                    <li>❌ People you follow who don’t follow you</li>
                    <li>👻 Ghost followers (they follow you, but you don’t follow back)</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>4. Debug Logs</h2>
                <p>
                    If something goes wrong, check the <strong>📜 Debug Logs</strong> section.
                    Errors, skipped files, or parsing issues will show up there.
                </p>
            </section>

            <footer className={styles.footer}>
                <p>Made with 🖤 for research & personal insights.
                    Not affiliated with Instagram.</p>
            </footer>
        </div>
    );
}
