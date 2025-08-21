"use client";
import { useState } from "react";
import styles from "./styles/scraper.module.css";

export default function Scraper() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [followers, setFollowers] = useState<string[]>([]);
    const [following, setFollowing] = useState<string[]>([]);
    const [logs, setLogs] = useState<string[]>([]);

    const scrapeData = async () => {
        setLoading(true);
        setError(null);
        setLogs([]);
        try {
            const res = await fetch(
                `http://localhost:5000/api/scrape/${username}`
            );
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to fetch profile data");
            }

            setLogs(data.logs || []);

            // just demo placeholders
            setFollowers(["alice", "bob", "charlie"]);
            setFollowing(["bob", "david", "emma"]);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.scraper}>
            <h2>🕷️ Insta Scraper (Experimental)</h2>
            <p className={styles.note}>
                ⚠️ This may not work consistently since Instagram blocks scraping.
            </p>

            <input
                className={styles.input}
                type="text"
                placeholder="Enter Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                className={styles.scrapeBtn}
                onClick={scrapeData}
                disabled={loading}
            >
                {loading ? "Loading..." : "Scrape"}
            </button>

            {error && <p className={styles.error}>❌ {error}</p>}

            {logs.length > 0 && (
                <div className={styles.logs}>
                    <h3>📜 Debug Logs</h3>
                    <pre>{logs.join("\n")}</pre>
                </div>
            )}

            {followers.length > 0 && (
                <div className={styles.results}>
                    <h3>Followers</h3>
                    <ul>{followers.map((f) => <li key={f}>{f}</li>)}</ul>
                    <h3>Following</h3>
                    <ul>{following.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
            )}
        </div>
    );
}
