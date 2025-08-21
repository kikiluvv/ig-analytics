type InstaEntry = {
    string_list_data: { value: string }[];
};

import styles from "./styles/results.module.css";

function parseUsers(json: string): Set<string> {
    const data: InstaEntry[] = JSON.parse(json);
    return new Set(data.map((e) => e.string_list_data[0].value));
}

export default function Results() {
    const followersRaw = localStorage.getItem("followers");
    const followingRaw = localStorage.getItem("following");

    if (!followersRaw || !followingRaw) {
        return <p className={styles.emptyMsg}>No data uploaded yet.</p>;
    }

    const followers = parseUsers(followersRaw);
    const following = parseUsers(followingRaw);

    const mutuals = [...following].filter((u) => followers.has(u));
    const notFollowingBack = [...following].filter((u) => !followers.has(u));
    const notFollowedBack = [...followers].filter((u) => !following.has(u));

    const clearData = () => {
        localStorage.removeItem("followers");
        localStorage.removeItem("following");
        window.location.reload();
    };

    return (
        <div className={styles.results}>
            <div className={styles.header}>
                <h2>📊 Your InstaAudit Results</h2>
            </div>

            <div className={styles.section}>
                <h3>🤝 Mutuals ({mutuals.length})</h3>
                <ul>
                    {mutuals.map((u) => (
                        <li key={u}>{u}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3>🙅‍♂️ Not Following Back ({notFollowingBack.length})</h3>
                <ul>
                    {notFollowingBack.map((u) => (
                        <li key={u}>{u}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3>👀 You Don’t Follow Back ({notFollowedBack.length})</h3>
                <ul>
                    {notFollowedBack.map((u) => (
                        <li key={u}>{u}</li>
                    ))}
                </ul>
            </div>
            <button className={styles.clearBtn} onClick={clearData}>
                🔄 Clear & Upload New
            </button>
        </div>
    );
}
