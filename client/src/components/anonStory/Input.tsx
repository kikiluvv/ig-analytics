import styles from "./styles/input.module.css";

type InputProps = {
    username: string;
    setUsername: (val: string) => void;
    onSubmit: (u: string) => void;
    loading: boolean;
};

export default function Input({ username, setUsername, onSubmit, loading }: InputProps) {
    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                if (username.trim()) onSubmit(username.trim());
            }}
        >
            <input
                className={styles.input}
                placeholder="public username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
            />
            <button className={styles.button} disabled={loading}>
                {loading ? (
                    <span className={styles.spinner} aria-label="loading" />
                ) : (
                    "view"
                )}
            </button>
        </form>
    );
}
