import { useState } from "react";
import styles from "./styles/upload.module.css";

interface Props {
    onUploaded: () => void;
}

export default function Upload({ onUploaded }: Props) {
    const [followersFile, setFollowersFile] = useState<File | null>(null);
    const [followingFile, setFollowingFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!followersFile || !followingFile) return;

        const followersText = await followersFile.text();
        const followingText = await followingFile.text();

        localStorage.setItem("followers", followersText);
        localStorage.setItem("following", followingText);

        onUploaded();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.uploadForm}>
            <h2 className={styles.uploadHeader}>
                🗂 Data Export Analysis
            </h2>
            <div className={styles.inputGroup}>
                <label>Followers.json</label>
                <input
                    type="file"
                    accept="application/json"
                    onChange={(e) => setFollowersFile(e.target.files?.[0] || null)}
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Following.json</label>
                <input
                    type="file"
                    accept="application/json"
                    onChange={(e) => setFollowingFile(e.target.files?.[0] || null)}
                />
            </div>
            <button type="submit" className={styles.submitBtn}>
                Process
            </button>
        </form>
    );
}
